FROM node:16.14.0-alpine

COPY package.json ./
RUN npm install -g npm@9.6.2
RUN npm install && npm cache clean --force

COPY . .

EXPOSE 2087

CMD ["npm", "run", "start:server"]