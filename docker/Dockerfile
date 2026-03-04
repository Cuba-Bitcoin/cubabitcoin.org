# Production stage
FROM nginx:alpine

# Create non-privileged user
RUN addgroup -g 1000 -S userapp && \
    adduser -u 1000 -S userapp -G userapp

# Create required directories with proper permissions
RUN mkdir -p /var/cache/nginx/client_temp /var/cache/nginx/proxy && \
    chown -R userapp:userapp /var/cache/nginx

# Remove default nginx config
RUN rm /etc/nginx/conf.d/default.conf

# Copy nginx config
COPY docker/nginx.conf /etc/nginx/conf.d/

# Copy static files
COPY --chown=userapp:userapp . /usr/share/nginx/html/

# Expose port
EXPOSE 80

# Start nginx (runs as root, serves files owned by userapp)
CMD ["nginx", "-g", "daemon off;"]
