FROM nginx:alpine

WORKDIR /usr/app
COPY . /usr/app

RUN apk add nodejs npm
RUN npm install
RUN node build

RUN cp -R dist/* /usr/share/nginx/html
WORKDIR /
