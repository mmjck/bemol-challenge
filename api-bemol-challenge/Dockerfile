FROM node:11-alpine

WORKDIR /app

COPY . .

RUN yarn install

EXPOSE 9000

CMD ["yarn", "start:development"]
