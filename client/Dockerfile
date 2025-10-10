FROM node:24-alpine3.21 AS builder

WORKDIR /yolo-client

COPY package*.json .

RUN npm ci

COPY . .

RUN npm run build


FROM node:24-alpine3.21 AS production

WORKDIR /yolo-client

COPY --from=builder /yolo-client/build .

EXPOSE 3000

CMD ["npm", "start"]