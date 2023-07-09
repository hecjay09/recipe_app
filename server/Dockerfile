FROM node:14 AS Production

ENV NODE_ENV=production

# app working folder
WORKDIR /src/app

# install dependencies
COPY package*.json ./

RUN npm install

# install app
COPY . .

EXPOSE 3000

# Run CMD
CMD ["node", "server.js"]
