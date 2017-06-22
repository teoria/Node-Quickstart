FROM node:6.10.3

# Create app directory
ENV DIR /usr/src/app
RUN mkdir -p $DIR

# Install dependencies
RUN npm i gulp -g --silent

COPY . $DIR
WORKDIR $DIR

RUN npm i --silent

EXPOSE 8000