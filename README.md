# Cuba Bitcoin Website

The official website of the Cuba Bitcoin community (cubabitcoin.org), focused on Bitcoin education and community services in Cuba.

![Cuba Bitcoin](https://cubabitcoin.org/img/cuba-bitcoin-580x330.jpg)

## About

Cuba Bitcoin is a community dedicated to Bitcoin education in Cuba. The website provides:

- **Educational Resources**: Courses, tutorials, and educational content about Bitcoin
- **Community Services**: LNbits, BTCPay Server, Cashu Mint for the Cuban community
- **Proof of Work**: Timeline of community achievements and events
- **P2P Trading**: Platforms for buying Bitcoin without KYC
- **Donations**: BTCPay Server integration for community funding
- **Nostr Integration**: Directory and NIP05 identity services

## Tech Stack

- **HTML5** - Semantic markup
- **Bootstrap 5** - Responsive design and UI components
- **Custom CSS** - Brand-specific styling in `css/global.css`
- **Font Awesome** - Icons
- **No Build Process** - Direct HTML/CSS/JS development

## Quick Start

### Using Docker (Recommended)

1. **Build and run the container:**

```bash
docker build -t cubabitcoin .
docker run -d -p 80:80 --name cubabitcoin cubabitcoin
```

2. **Or use Docker Compose:**

```bash
# Development with live reload
docker-compose up dev

# Production
docker-compose up web
```

3. **Open your browser:**
   - Visit `http://localhost` for production
   - Visit `http://localhost:8080` for development

### Without Docker

Simply open `index.html` in your browser, or serve it with any static file server:

```bash
# Using Python
python3 -m http.server 8000

# Using PHP
php -S localhost:8000

# Using Node.js
npx serve .
```

## Docker Commands

| Command | Description |
|---------|-------------|
| `docker build -t cubabitcoin .` | Build the image |
| `docker run -d -p 80:80 cubabitcoin` | Run the container |
| `docker-compose up -d web` | Run with docker-compose |
| `docker-compose logs -f` | View logs |
| `docker-compose down` | Stop containers |
| `docker exec -it cubabitcoin sh` | Access container shell |

## Project Structure

```
cubabitcoin.org/
├── index.html          # Main HTML file
├── css/
│   └── global.css     # Custom styles
├── img/               # Images and assets
├── assets/            # Favicon and static assets
├── kmbalache/         # Kmbalache P2P instance
├── Dockerfile         # Docker image definition
├── Dockerfile.dev     # Development Docker image
├── docker-compose.yml # Docker Compose configuration
├── nginx.conf         # Nginx configuration
└── README.md          # This file
```

## Environment Variables

No environment variables are required for basic deployment. For production with SSL, configure:

- `SSL_CERT_PATH` - Path to SSL certificate
- `SSL_KEY_PATH` - Path to SSL private key

## Deployment

### Production with SSL

1. Place your SSL certificates in the `ssl/` directory:
   - `ssl/cert.pem` - SSL certificate
   - `ssl/key.pem` - Private key

2. Use the production configuration:

```bash
docker-compose up -f docker-compose.yml -f docker-compose.prod.yml production
```

### Deploy to Various Platforms

#### Render
```bash
# Using Render's Docker deployment
```

#### Railway
```bash
# Using Railway's Docker deployment
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

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing-feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Community

- **Telegram**: https://t.me/Cuba_Bitcoin
- **YouTube**: https://www.youtube.com/@CubaBitcoin21
- **Nostr**: npub1huyn6ru55pv6l7p0sxvlu3vfpq7pan958sl4weft0kte6lvdvvksd5s34t
- **Website**: https://cubabitcoin.org

## Support

If you find this project useful, please consider supporting us:

- **BTCPay Server**: https://btcpay.cubabitcoin.org/apps/4GhTBzgnBEQGMhi633L6arsAunXG/crowdfund
- **Lightning Network**: 03736eabf99d772903d72bfc8b2e9792e9f408f3c0456a05267737fec607a9d3e4@7jd46lewcsdxm6zxwpjzrmdtjd6otliustozyjkwv6amx5ajzx53tmqd.onion:9735
