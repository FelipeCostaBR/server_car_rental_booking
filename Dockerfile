FROM node

WORKDIR /usr/app

COPY package.json ./

RUN npm install -g npm@latest

COPY . .

EXPOSE 3333

CMD ["npm","run","dev:server"]