# 1. Node JS creates Client App artifact
FROM node:12.19.0 as preconfigurated-react-build-deps

# create and set work dir
RUN mkdir /usr/src/preconfigurated-react
WORKDIR /usr/src/preconfigurated-react

# copy files and install dependencies
COPY . /usr/src/preconfigurated-react
RUN npm i

# build running
RUN npm run build
