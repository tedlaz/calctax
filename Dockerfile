FROM node:alpine AS builder

WORKDIR /app

COPY package.json ./

RUN npm install


# Copies everything over to Docker environment
COPY . ./
RUN npm run build


FROM nginx:alpine

WORKDIR /usr/share/nginx/html
# Remove default nginx static resources
RUN rm -rf ./*

# Copies static resources from builder stage
COPY --from=builder /app/build .

ENTRYPOINT ["nginx", "-g", "daemon off;"]