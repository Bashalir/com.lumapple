FROM node:latest
WORKDIR /usr/src/app
ENV PATH /usr/src/app/node_modules/.bin:$PATH
COPY package.json ./usr/src/app
COPY package-lock.json ./usr/src/app
RUN npm install
ADD . /usr/src/app
EXPOSE 8080
ENTRYPOINT ["npm", "run", "dev-server"]