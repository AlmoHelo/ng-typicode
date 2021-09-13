# Sert de base à la création d'une nouvelle image
FROM node:alpine as build

WORKDIR /angular-app/

COPY . .

RUN npm install 

RUN npm run start

# Copie de fichiers
COPY /dist/ng-typicode/ /usr/share/nginx/html

