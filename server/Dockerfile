FROM node

# app working folder
WORKDIR /app

# install dependencies
COPY package*.json ./

RUN npm install

# install app
COPY . .

EXPOSE 3000

# Run CMD
CMD ["node", "server.js"]
