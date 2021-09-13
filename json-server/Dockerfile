FROM node:alpine

WORKDIR /json-server/

COPY . .

RUN npm install -g json-server

EXPOSE 3000

CMD ["json-server", "./db.json", "--host 0.0.0.0"]