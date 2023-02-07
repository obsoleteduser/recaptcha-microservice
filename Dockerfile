FROM node as build
WORKDIR /app
COPY ./package.json .
COPY ./tsconfig.json .
COPY ./yarn.lock .
COPY ./.env .
RUN yarn install
COPY ./src .
COPY ./views .
RUN yarn build
FROM node
WORKDIR /app
COPY --from=build /app/dist /app
CMD [ "yarn", "start" ]