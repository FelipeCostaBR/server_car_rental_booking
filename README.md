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

### Migrations

We are using Typeorm, https://typeorm.io/

- Run the command bellow to run the migrations.

- `yarn datasource migration:run` (host: localhost on `data-source.config.ts`)

- on Docker, if the `booking_server` still down run $ `docker-compose up` again.

- You should be able to create a new Account using any platform as API management.

### Attention

at the moment, it requires a bit of manual work to run the migration/server. 😮‍💨 We fix it soon! 👇

To TypeORM commands like `run/create/generate/revert` the migrations make sure the host: locahost on the file `data-source.config.ts`.

To run the server make sure the host: database_booking on the file `data-source.config.ts`.

### Dev notes

If your docker crashes and doesn't update with your changes, run:
$ `docker-compose up --force-recreate`

Command to create a new migration
$ `yarn datasource migration:create ./src/database/migrations/[MigrationName]`

Any changes made on the entity needs to reflete the migration, to update on the database level you must drop the table:
$ `yarn datasource migration:revert`
then run the migration again
