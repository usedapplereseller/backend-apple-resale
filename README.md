# Apple resale backend

## Set up local postgres

If database not setup, start local instance of Postgres `backend-apple-resale`. Then create an .env file on the top level directory corresponding with your postgres login. For example:

```
PORT=3000
NODE_ENV=development
DB_USERNAME=postgres
DB_PASSWORD=password
DB_NAME=backend_apple_resale
DB_HOST=127.0.0.1
DB_DIALECT=postgres
```

## Create and seed the database

Create the database with the following commands:

- `npx sequelize db:create`
- `npx sequelize db:migrate`
- `npx sequelize db:seed:all`

## Set up middleware

Run `npm i` to install NPM packages, then `npm start` to start the Express server.
