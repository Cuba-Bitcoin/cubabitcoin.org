# Docker Configuration

This directory contains all Docker-related configuration files for deploying the Cuba Bitcoin website.

## Files

| File | Description |
|------|-------------|
| `Dockerfile` | Production Docker image (Nginx) |
| `Dockerfile.dev` | Development Docker image with live reload |
| `docker-compose.yml` | Docker Compose configuration for all services |
| `docker-compose.prod.yml` | Production override configuration |
| `nginx.conf` | Nginx configuration for production |
| `nginx-dev.conf` | Nginx configuration for development |
| `nginx-ssl.conf` | Nginx configuration with SSL |
| `.dockerignore` | Files to exclude from Docker builds |

## Usage

### From project root:

```bash
# Using Make
make build
make up
make dev
make down

# Using deploy script
./deploy.sh dev
./deploy.sh production
```

### From this directory:

```bash
# Build image
docker build -t cubabitcoin -f Dockerfile ..

# Run containers
docker-compose up -d web

# Development with live reload
docker-compose up -d dev
```

## User

The containers run as a non-privileged user (`userapp` with UID/GID 1000) for security.

## Ports

- **80**: Production HTTP
- **8080**: Development server
- **443**: Production HTTPS (requires SSL certificates)
