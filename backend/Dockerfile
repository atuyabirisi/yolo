FROM node:24-alpine3.21

WORKDIR /yolo

COPY package*.json .

RUN npm ci --only=production && npm cache clean --force

COPY . .

EXPOSE 5000

CMD ["npm", "start"]


