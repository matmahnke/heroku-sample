FROM node:14.15.4-alpine As builder

WORKDIR /usr/src/app

COPY package*.json ./

RUN yarn install --silent

COPY . ./

CMD ["yarn", "start"]

EXPOSE 8000
