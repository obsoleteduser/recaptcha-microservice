FROM node:18 as build
WORKDIR /app
COPY ./package.json .
COPY ./tsconfig.json .
RUN yarn install
COPY ./src .
RUN yarn build
FROM node:18
WORKDIR /app
COPY --from=build /app/dist /app
CMD [ "yarn", "start" ]