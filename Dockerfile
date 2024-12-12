# Use the official Nginx image from the Docker Hub
FROM nginx:alpine

# Copy the build output to the Nginx html directory
COPY dist /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx when the container has started
CMD ["nginx", "-g", "daemon off;"]