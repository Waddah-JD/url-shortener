FROM node:13.0.1-alpine

RUN mkdir -p /usr/app/client
WORKDIR /usr/app/client

COPY package*.json ./

RUN npm install

COPY . .

CMD [ "npm", "run", "start" ]