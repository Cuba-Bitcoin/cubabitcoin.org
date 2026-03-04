# Production stage
FROM nginx:alpine

# Create non-privileged user
RUN addgroup -g 1000 -S userapp && \
    adduser -u 1000 -S userapp -G userapp

# Remove default nginx config
RUN rm /etc/nginx/conf.d/default.conf

# Create directories with proper permissions
RUN mkdir -p /usr/share/nginx/html /var/cache/nginx/client_temp && \
    chown -R userapp:userapp /usr/share/nginx/html /var/cache/nginx

# Copy nginx config
COPY docker/nginx.conf /etc/nginx/conf.d/

# Copy static files
COPY --chown=userapp:userapp . /usr/share/nginx/html/

# Switch to non-privileged user
USER userapp

# Expose port
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
