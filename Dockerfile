#Dockerfile
FROM node:lts

#create app working directory

WORKDIR /usr/src/app

COPY ./package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD [ "npm","dev" ]
