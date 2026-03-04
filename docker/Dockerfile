# Build stage
FROM node:22-alpine AS builder

WORKDIR /app

# Copy package files if they exist
COPY package*.json ./

# Install dependencies if package.json exists
RUN if [ -f package.json ]; then npm install; fi

# Copy source files (from project root)
COPY . .

# Production stage
FROM nginx:alpine

# Create non-privileged user
RUN addgroup -g 1000 -S userapp && \
    adduser -u 1000 -S userapp -G userapp

# Remove default nginx config
RUN rm /etc/nginx/conf.d/default.conf

COPY docker/nginx.conf /etc/nginx/conf.d/nginx.conf

# Create directories with proper permissions
RUN mkdir -p /usr/share/nginx/html /var/cache/nginx/client_temp && \
    chown -R userapp:userapp /usr/share/nginx/html /var/cache/nginx

# Copy custom nginx config
COPY --chown=userapp:userapp nginx.conf /etc/nginx/conf.d/

# Copy static files from builder
COPY --from=builder --chown=userapp:userapp /app /usr/share/nginx/html

# Switch to non-privileged user
USER userapp

# Expose port
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
