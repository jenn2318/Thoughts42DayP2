FROM node

WORKDIR /usr/src/app

package-lock.json are copied
COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 3000

CMD [ "npm", "start" ]