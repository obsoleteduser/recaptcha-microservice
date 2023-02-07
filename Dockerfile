FROM node:18 as build
WORKDIR /recaptcha-microservice
COPY package*.json ./
COPY . .
RUN yarn install
RUN yarn build
FROM node:18
WORKDIR /recaptcha-microservice
COPY --from=build /recaptcha-microservice/dist /recaptcha-microservice
CMD [ "yarn", "start" ]