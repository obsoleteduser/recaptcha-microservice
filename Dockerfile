FROM node:18 as build
WORKDIR /app
COPY ./recaptcha-microservice/package.json .
COPY ./recaptcha-microservice/tsconfig.json .
RUN yarn install
COPY ./recaptcha-microservice/src .
RUN yarn build
FROM node:18
WORKDIR /app
COPY --from=build /app/dist /app
CMD [ "yarn", "start" ]