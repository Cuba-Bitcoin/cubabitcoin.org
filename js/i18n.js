/**
 * Cuba Bitcoin - Internationalization (i18n) Module
 * Hybrid approach: JSON for repeated elements, HTML for critical content
 */

class I18n {
    constructor(options = {}) {
        this.defaultLang = options.defaultLang || 'es';
        this.supportedLangs = options.supportedLangs || ['es', 'en'];
        this.translationsPath = options.translationsPath || '/i18n';
        this.translations = {};
        this.currentLang = this.detectLanguage();
    }

    /**
     * Detect language from URL, localStorage, or browser preference
     */
    detectLanguage() {
        // 1. Check URL path (e.g., /en/index.html)
        const pathLang = this.getLanguageFromPath();
        if (pathLang && this.supportedLangs.includes(pathLang)) {
            return pathLang;
        }

        // 2. Check localStorage preference
        const storedLang = localStorage.getItem('cubabitcoin-lang');
        if (storedLang && this.supportedLangs.includes(storedLang)) {
            return storedLang;
        }

        // 3. Check browser language
        const browserLang = navigator.language?.split('-')[0];
        if (browserLang && this.supportedLangs.includes(browserLang)) {
            return browserLang;
        }

        // 4. Default fallback
        return this.defaultLang;
    }

    /**
     * Extract language code from URL path
     */
    getLanguageFromPath() {
        const path = window.location.pathname;
        const match = path.match(/^\/(en|es)\//);
        return match ? match[1] : null;
    }

    /**
     * Load translations for a specific language
     */
    async loadTranslations(lang) {
        if (this.translations[lang]) {
            return this.translations[lang];
        }

        try {
            const response = await fetch(`${this.translationsPath}/common.${lang}.json`);
            if (!response.ok) {
                throw new Error(`Failed to load translations for ${lang}`);
            }
            this.translations[lang] = await response.json();
            return this.translations[lang];
        } catch (error) {
            console.error(`I18n: Error loading ${lang} translations:`, error);
            // Fallback to default language
            if (lang !== this.defaultLang) {
                return this.loadTranslations(this.defaultLang);
            }
            return {};
        }
    }

    /**
     * Get a translation by key path (e.g., "navbar.home")
     */
    t(keyPath, fallback = '') {
        const keys = keyPath.split('.');
        let value = this.translations[this.currentLang];

        for (const key of keys) {
            if (value && typeof value === 'object' && key in value) {
                value = value[key];
            } else {
                return fallback || keyPath;
            }
        }

        return value || fallback || keyPath;
    }

    /**
     * Apply translations to DOM elements with data-i18n attribute
     * Usage: <span data-i18n="navbar.home">Inicio</span>
     */
    applyTranslations() {
        const elements = document.querySelectorAll('[data-i18n]');

        elements.forEach(el => {
            const key = el.getAttribute('data-i18n');
            const translation = this.t(key);

            if (translation && translation !== key) {
                // Check if it's an input placeholder
                if (el.hasAttribute('placeholder')) {
                    el.placeholder = translation;
                }
                // Check for title attribute
                else if (el.hasAttribute('data-i18n-attr')) {
                    const attr = el.getAttribute('data-i18n-attr');
                    el.setAttribute(attr, translation);
                }
                // Default: set text content
                else {
                    el.textContent = translation;
                }
            }
        });

        // Apply title translations
        const titleElements = document.querySelectorAll('[data-i18n-title]');
        titleElements.forEach(el => {
            const key = el.getAttribute('data-i18n-title');
            const translation = this.t(key);
            if (translation && translation !== key) {
                el.title = translation;
            }
        });

        // Apply alt translations
        const altElements = document.querySelectorAll('[data-i18n-alt]');
        altElements.forEach(el => {
            const key = el.getAttribute('data-i18n-alt');
            const translation = this.t(key);
            if (translation && translation !== key) {
                el.alt = translation;
            }
        });
    }

    /**
     * Switch to a different language
     */
    async switchLanguage(lang) {
        if (!this.supportedLangs.includes(lang)) {
            console.warn(`I18n: Language ${lang} not supported`);
            return false;
        }

        // Save preference
        localStorage.setItem('cubabitcoin-lang', lang);

        // Redirect to the appropriate version
        const currentPath = window.location.pathname;
        let newPath;

        if (lang === 'es') {
            // Spanish is the default (root)
            newPath = currentPath.replace(/^\/(en)\//, '/');
        } else {
            // Other languages go in their folder
            if (currentPath.match(/^\/(en)\//)) {
                // Already in a language folder, replace it
                newPath = currentPath.replace(/^\/(en)\//, `/${lang}/`);
            } else {
                // In root (Spanish), add language prefix
                newPath = `/${lang}${currentPath}`;
            }
        }

        // Navigate to new path
        window.location.href = newPath;
        return true;
    }

    /**
     * Initialize the i18n system
     */
    async init() {
        await this.loadTranslations(this.currentLang);
        this.applyTranslations();
        this.updateHtmlLang();
        this.initLanguageSwitcher();

        console.log(`I18n: Initialized with language "${this.currentLang}"`);
        return this;
    }

    /**
     * Update the HTML lang attribute
     */
    updateHtmlLang() {
        document.documentElement.lang = this.currentLang;

        // Update locale-specific attributes if available
        const meta = this.translations[this.currentLang]?.meta;
        if (meta) {
            if (meta.dir) {
                document.documentElement.dir = meta.dir;
            }
        }
    }

    /**
     * Initialize language switcher elements
     * Usage: <a data-lang-switch="en" href="en/index.html">English</a>
     */
    initLanguageSwitcher() {
        const switchers = document.querySelectorAll('[data-lang-switch]');
        const isFileProtocol = window.location.protocol === 'file:';

        switchers.forEach(switcher => {
            const targetLang = switcher.getAttribute('data-lang-switch');

            // Mark current language as active
            if (targetLang === this.currentLang) {
                switcher.classList.add('active');
            }

            // Add click handler
            switcher.addEventListener('click', (e) => {
                // Save language preference
                localStorage.setItem('cubabitcoin-lang', targetLang);

                // For file:// protocol, use the href directly (don't prevent default)
                if (isFileProtocol) {
                    // Let the browser follow the href naturally
                    return;
                }

                // For http(s), use switchLanguage for cleaner URLs
                e.preventDefault();
                this.switchLanguage(targetLang);
            });
        });
    }

    /**
     * Get current language
     */
    getCurrentLang() {
        return this.currentLang;
    }

    /**
     * Check if a language is the current one
     */
    isCurrentLang(lang) {
        return this.currentLang === lang;
    }
}

// Detect base path for translations (works with file:// and http://)
function getTranslationsPath() {
    const path = window.location.pathname;
    // Check if we're in a subdirectory (e.g., /en/)
    if (path.includes('/en/')) {
        return '../i18n';
    }
    return 'i18n';
}

// Create global instance
const i18n = new I18n({
    defaultLang: 'es',
    supportedLangs: ['es', 'en'],
    translationsPath: getTranslationsPath()
});

// Auto-initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    i18n.init();
});

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { I18n, i18n };
}
