FROM node

WORKDIR /usr/src/thoughts42dayp2

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD [ "npm", "start" ]