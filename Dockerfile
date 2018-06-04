FROM node


# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied

WORKDIR /usr/src/thoughts42dayp2


COPY package*.json ./

RUN npm install


# Bundle app source
COPY . .

# Open the port where your server is running
EXPOSE 3000

# Start your server

COPY . .

EXPOSE 3000


CMD [ "npm", "start" ]