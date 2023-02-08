FROM nginx:alpine

WORKDIR /usr/app
COPY . /usr/app

RUN apk add nodejs npm
RUN npm install && cd calc && npm install && cd ..
RUN node build

RUN cp -R dist/* /usr/share/nginx/html
WORKDIR /
