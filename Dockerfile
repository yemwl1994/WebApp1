FROM node:alpine as node
WORKDIR /app
COPY ./package.json ./
RUN npm install
COPY ./ ./
EXPOSE 3000
CMD ["npm", "run", "start"];



