FROM node:10.13.0

WORKDIR /portfolio

COPY . /portfolio

RUN yarn install; yarn build

EXPOSE 80

ENV NAME World

CMD ["yarn", "dev"]