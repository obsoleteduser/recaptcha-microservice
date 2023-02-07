FROM node
WORKDIR /recaptcha_microservice
COPY package*.json ./
RUN yarn install
COPY . .
CMD ["yarn", "start"]