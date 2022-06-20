# server_car_rental_booking

## README in progress

### Setup the project

we are using Docker to run the server, it will make sure that everyone is working on the same version and avoid the painful part of the setup.

- Download docker and have it running.
- clone the repo.
- build the image
  $ `docker build -t booking .`

- create the containers and start the server:
  $ `docker-compose up`

#### OR

$ `docker-compose up -d` and `docker logs booking_server -f`

### Migrations and seed

We are using Typeorm, https://typeorm.io/

- Run the command bellow to run the migrations ( I already created a template for User entity ) and seeding the database.

- `yarn typeorm migration:run && yarn db:seed`

- You should be able to see the [Faker users](http://localhost:3333/users) and create a new user using any platform as API management.

### Attention

at the moment, it requires a bit of manual work to run the migration/server. 😮‍💨 We fix it soon! 👇

To `run/create/generate/revert` the migrations/seeds make sure the host: locahost on the file `data-source.config.ts`.

To run the server make sure the host: database_booking on the file `data-source.config.ts`.

### Dev notes

If your docker crashes and doesn't update with your changes, run:
$ `docker-compose up --force-recreate`

Command to create a new migration
$ `yarn typeorm migration:create ./src/database/migrations/[MigrationName]`

Any changes made on the entity needs to reflete the migration, to update on the database level you must drop the table:
$ `yarn typeorm migration:revert`
then run the migration again
