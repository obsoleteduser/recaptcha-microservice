# Use an official Node.js runtime as the base image
FROM node:18

# Set the working directory in the container
WORKDIR /recaptcha-microservice

# Copy the package.json and package-lock.json to the container
COPY package*.json ./

# Install the app dependencies in the container
RUN yarn install

# Copy the app source code to the container
COPY . .

# Specify the command to run the app
CMD [ "yarn", "start" ]
