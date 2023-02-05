FROM node:18
WORKDIR /recaptcha-microservice
COPY package*.json ./
RUN yarn install
COPY . .
CMD [ "yarn", "start" ]
