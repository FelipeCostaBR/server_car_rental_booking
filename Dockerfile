FROM node

WORKDIR /usr/app

COPY package.json ./

RUN npm install -g npm@latest

RUN yarn

COPY . .

EXPOSE 3333

CMD ["npm","run","dev:server"]