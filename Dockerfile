FROM node:latest
WORKDIR /usr/src/app
ADD . /usr/src/app/
RUN npm install
EXPOSE 8080
ENTRYPOINT ["npm", "run", "start"]