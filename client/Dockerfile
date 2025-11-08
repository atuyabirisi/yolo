FROM node:24-alpine3.21 AS builder

WORKDIR /yolo-client

COPY package*.json .

RUN npm install

COPY . .

RUN npm run build


FROM nginx:alpine

RUN addgroup yolo && adduser -S -G yolo yolo

RUN rm -rf /usr/share/nginx/html/*

COPY --from=builder /yolo-client/build /usr/share/nginx/html

RUN chown -R yolo:yolo /usr/share/nginx/html

USER yolo

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
