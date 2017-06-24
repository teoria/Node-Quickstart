FROM node:6.10.3

ENV DIR /usr/src/app
RUN mkdir -p $DIR

COPY . $DIR
WORKDIR $DIR

EXPOSE 8000

RUN npm i -g sequelize-cli --silent
RUN npm i --silent

# RUN sequelize db:migrate
# RUN sequelize db:seed:all