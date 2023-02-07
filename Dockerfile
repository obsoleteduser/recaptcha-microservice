FROM node
WORKDIR /recaptcha_microservice
COPY package*.json ./
RUN yarn install
COPY tsconfig.json ./
COPY . .
RUN yarn build
COPY . .
COPY ./dist .
CMD ["yarn", "start"]