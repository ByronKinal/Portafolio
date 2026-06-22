# Stage 1: Build stage
FROM node:18-alpine AS build
WORKDIR /app

# Install pnpm since pnpm-lock.yaml is present in the project
RUN npm install -g pnpm

# Copy package configuration files
COPY package.json pnpm-lock.yaml ./

# Install dependencies
RUN pnpm install --frozen-lockfile

# Copy the rest of the application files and build
COPY . .
RUN pnpm run build

# Stage 2: Serve stage with Nginx
FROM nginx:stable-alpine

# Copy build artifacts to Nginx html directory
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port 80 for Render Web Service
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]
