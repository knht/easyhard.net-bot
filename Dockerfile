FROM node:12

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm ci --no-optional --only=production

COPY . .

CMD [ "node", "index.js" ]