# Stage 0, basado en Node.js, para compilación de Angular
FROM node:alpine as node
WORKDIR /app
COPY ./ /app/
RUN npm install
RUN npm run build -- --optimization

# Stage 1, basado en Nginx, para servir la app con Nginx
FROM nginx:alpine
COPY --from=node /app/dist/mapas-app /usr/share/nginx/html