FROM node:12.16.1 as node-ga-app
WORKDIR /app
COPY ./package.json /app
RUN npm install --silent
COPY ./ .
RUN npm run build