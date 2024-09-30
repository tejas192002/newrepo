FROM node:18.2.0 AS builder

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE 80

CMD ["npx", "serve", "-s", "build", "-l", "80"]O

