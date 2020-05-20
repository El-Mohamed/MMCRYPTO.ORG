
# NodeJS Image (Includes npm)
FROM node:alpine AS builder

# Set Work Dir
WORKDIR /app

# Copy Project Files
COPY . .

# Install npm Packages & Build Project
RUN npm install && \
    npm run build


# NGINX Image (Webserver)
FROM nginx:alpine

# Copy Builded Project To Html Folder
COPY --from=builder /app/dist/* /usr/share/nginx/html/