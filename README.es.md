# Sitio Web Cuba Bitcoin

El sitio oficial de la comunidad Cuba Bitcoin (cubabitcoin.org), enfocado en la educación sobre Bitcoin y los servicios comunitarios en Cuba.

![Cuba Bitcoin](https://cubabitcoin.org/img/cuba-bitcoin-580x330.jpg)

## Acerca de

Cuba Bitcoin es una comunidad dedicada a la educación sobre Bitcoin en Cuba. El sitio ofrece:

- **Recursos Educativos**: Cursos, tutoriales y contenido educativo sobre Bitcoin
- **Servicios Comunitarios**: LNbits, BTCPay Server, Cashu Mint para la comunidad cubana
- **Proof of Work**: Línea de tiempo de logros y eventos de la comunidad
- **Comercio P2P**: Plataformas para comprar Bitcoin sin KYC
- **Donaciones**: Integración con BTCPay Server para financiamiento comunitario
- **Integración Nostr**: Directorio y servicios de identidad NIP05

## Tecnología

- **HTML5** - Marcado semántico
- **Bootstrap 5** - Diseño responsivo y componentes UI
- **CSS Personalizado** - Estilos específicos de la marca en `css/global.css`
- **Font Awesome** - Iconos
- **Sin Proceso de Build** - Desarrollo directo en HTML/CSS/JS

## Inicio Rápido

### Usando Docker (Recomendado)

1. **Compila y ejecuta el contenedor:**

```bash
docker build -t cubabitcoin .
docker run -d -p 80:80 --name cubabitcoin cubabitcoin
```

2. **O usa Docker Compose:**

```bash
# Desarrollo con live reload
docker-compose up dev

# Producción
docker-compose up web
```

3. **Abre tu navegador:**
   - Visita `http://localhost` para producción
   - Visita `http://localhost:8080` para desarrollo

### Sin Docker

Simplemente abre `index.html` en tu navegador, o usa cualquier servidor de archivos estáticos:

```bash
# Usando Python
python3 -m http.server 8000

# Usando PHP
php -S localhost:8000

# Usando Node.js
npx serve .
```

## Comandos Docker

| Comando | Descripción |
|---------|-------------|
| `docker build -t cubabitcoin .` | Compila la imagen |
| `docker run -d -p 80:80 cubabitcoin` | Ejecuta el contenedor |
| `docker-compose up -d web` | Ejecuta con docker-compose |
| `docker-compose logs -f` | Ver registros |
| `docker-compose down` | Detener contenedores |
| `docker exec -it cubabitcoin sh` | Acceder al contenedor |

## Estructura del Proyecto

```
cubabitcoin.org/
├── index.html          # Archivo HTML principal
├── css/
│   └── global.css     # Estilos personalizados
├── img/               # Imágenes y recursos
├── assets/            # Favicon y recursos estáticos
├── kmbalache/         # Instancia P2P de Kmbalache
├── Dockerfile         # Definición de imagen Docker
├── Dockerfile.dev     # Imagen Docker para desarrollo
├── docker-compose.yml # Configuración de Docker Compose
├── nginx.conf         # Configuración de Nginx
└── README.md         # Este archivo
```

## Variables de Entorno

No se requieren variables de entorno para el despliegue básico. Para producción con SSL, configura:

- `SSL_CERT_PATH` - Ruta al certificado SSL
- `SSL_KEY_PATH` - Ruta a la clave privada SSL

## Despliegue

### Producción con SSL

1. Coloca tus certificados SSL en el directorio `ssl/`:
   - `ssl/cert.pem` - Certificado SSL
   - `ssl/key.pem` - Clave privada

2. Usa la configuración de producción:

```bash
docker-compose up -f docker-compose.yml -f docker-compose.prod.yml production
```

### Desplegar en Various Plataformas

#### Render
```bash
# Usando el despliegue Docker de Render
```

#### Railway
```bash
# Usando el despliegue Docker de Railway
```

#### Fly.io
```bash
fly launch
fly deploy
```

#### AWS ECS
```bash
aws ecr get-login-password --region us-east-1 | docker login --username AWS --password-stdin $ECR_REPO
docker tag cubabitcoin:latest $ECR_REPO/cubabitcoin:latest
docker push $ECR_REPO/cubabitcoin:latest
```

## Contribuir

1. Haz un fork del repositorio
2. Crea tu rama de funcionalidad (`git checkout -b feature/amazing-feature`)
3. Commitea tus cambios (`git commit -m 'Add some amazing-feature'`)
4. Push a la rama (`git push origin feature/amazing-feature`)
5. Abre un Pull Request

## Licencia

Este proyecto está licenciado bajo la Licencia MIT - consulta el archivo [LICENSE](LICENSE) para más detalles.

## Comunidad

- **Telegram**: https://t.me/Cuba_Bitcoin
- **YouTube**: https://www.youtube.com/@CubaBitcoin21
- **Nostr**: npub1huyn6ru55pv6l7p0sxvlu3vfpq7pan958sl4weft0kte6lvdvvksd5s34t
- **Sitio Web**: https://cubabitcoin.org

## Apoyar

Si encuentras este proyecto útil, por favor considera apoyarnos:

- **BTCPay Server**: https://btcpay.cubabitcoin.org/apps/4GhTBzgnBEQGMhi633L6arsAunXG/crowdfund
- **Lightning Network**: 03736eabf99d772903d72bfc8b2e9792e9f408f3c0456a05267737fec607a9d3e4@7jd46lewcsdxm6zxwpjzrmdtjd6otliustozyjkwv6amx5ajzx53tmqd.onion:9735
