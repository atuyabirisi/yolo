FROM node:24-alpine3.21 AS builder

WORKDIR /yolo-client

COPY package*.json .

RUN npm ci

COPY . .

RUN npm run build


FROM nginx:alpine

RUN rm -rf /usr/share/nginx/html/*

COPY --from=builder /yolo-client/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
