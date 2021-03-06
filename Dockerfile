FROM node:12

WORKDIR ./bin/src
COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8000


CMD [ "npm", "start" ]
