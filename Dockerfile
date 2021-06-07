FROM nginx:1.21.0
COPY build /app
COPY nginx/nginx.conf /etc/nginx/nginx.conf
