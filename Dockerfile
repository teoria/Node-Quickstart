FROM node:6.10.3

# Create app directory
ENV DIR /usr/src/app
RUN mkdir -p $DIR

COPY . $DIR
WORKDIR $DIR

RUN npm i --silent

EXPOSE 8000