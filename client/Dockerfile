FROM node:24-alpine3.21

WORKDIR /yolo-client

COPY . .

RUN npm install

RUN npm run build

EXPOSE 3001

CMD ["npm", "start"]