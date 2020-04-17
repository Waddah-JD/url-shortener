FROM node:13.0.1-alpine

RUN mkdir -p /usr/app/server
WORKDIR /usr/app/server

COPY package*.json ./

RUN npm install

COPY . .

CMD [ "npm", "run", "start" ]