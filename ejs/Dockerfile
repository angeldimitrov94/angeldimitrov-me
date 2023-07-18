FROM node:18

WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install --only=prod
COPY . .

CMD ["node", "index.js"]
EXPOSE 8080