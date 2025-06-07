# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the official website for Cuba Bitcoin community (cubabitcoin.org), a static HTML website focused on Bitcoin education and community services in Cuba. The site is built using vanilla HTML, CSS, and Bootstrap 5.

## Architecture

- **Static HTML Site**: Single-page application with anchor-based navigation
- **Bootstrap 5**: For responsive design and UI components  
- **Vanilla CSS**: Custom styles in `css/global.css` with responsive improvements
- **Font Awesome**: For social media and Bitcoin icons
- **YouTube Embeds**: Carousel-based multimedia section with playlists
- **No Build Process**: Direct HTML/CSS/JS development

## Key Features

- **Community Services Section**: Cards linking to Bitcoin tools (LNbits, BTCPay Server, Cashu Mint, Tutorials)
- **Educational Timeline**: Collapsible proof-of-work section showing community milestones
- **Multimedia Integration**: YouTube playlist carousel for educational content
- **Donation System**: BTCPay Server integration for community funding
- **Nostr Integration**: Community directory and NIP05 identity services
- **Hardware Wallet Sales**: Blockstream Jade distribution

## Content Structure

The site focuses on:
- Bitcoin education in Spanish for Cuban community
- Community-run Bitcoin services and tools
- Historical timeline of Cuba Bitcoin achievements
- Peer-to-peer Bitcoin trading platforms
- Educational resources and courses

## Development Notes

- All content is in Spanish targeting Cuban Bitcoin community
- Mobile-first responsive design with extensive media queries
- SEO optimized with Open Graph and Twitter Card meta tags
- Uses external CDNs for Bootstrap, Font Awesome, and icons
- Images stored in `/img/` directory with descriptive filenames
- Custom CSS focuses on Bitcoin brand colors (#ff4e16 primary)

## External Services Referenced

- lnbits.cubabitcoin.org - Community Lightning wallet
- btcpay.cubabitcoin.org - Payment processing
- mint.cubabitcoin.org - Cashu ecash mint
- YouTube channel integration for educational content
- Telegram and Nostr community links