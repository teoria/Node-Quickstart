# Node QuickStart

This repository contains a simple quickstart of how to program on a node with a good architecture and good practices.

# This project was created using

* Hapi
* Sequelize
* MySQL
* Joi
* Boom
* JWT
* Gulp
* Typescript
* Docker

# Run

```
npm install
npm start
node_modules/sequelize-cli/bin/sequelize db:migrate
node_modules/sequelize-cli/bin/sequelize db:seed:all
```

# Set configurations

Inside the "sequelize/config" path, change the value in "development.host" to the host of your database,
see the sequelize documentation.

```
"development": {
    "username": "root",
    "password": null,
    "database": "database_development",
    "host": "127.0.0.1", //"db" for docker
    "dialect": "mysql"
}
```


# With Docker

```
docker-compose up -d
docker exec -it node_quickstart bash
sequelize db:migrate
sequelize db:seed:all
```

# In your browser

Access: http://localhost:8000/users