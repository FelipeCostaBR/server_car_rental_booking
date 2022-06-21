# server_car_rental_booking

## README in progress

### Setup the project

we are using Docker to run the server, it will make sure that everyone is working on the same version and avoid the painful part of the setup.

- Download docker and have it running.
- download and install [node](https://nodejs.org/en/download/) (make sure you have the version 16.13.1 or superior)
- clone the repo.
- run the command below inside the project folder, **server_car_rental_booking.** it will take a few second to complete.

- $ `docker build -t booking . && npm install --global yarn && yarn && docker-compose up  -d && sleep 7 && docker exec -it booking_server  yarn datasource migration:run && docker logs booking_server -f`

- Your terminal should have the message 
**server running on port 3333 🚀**
**Initializing the database...**

- on Docker, if the `booking_server` still down run $ `docker-compose up --force-recreate`.

- The project is UP and RUNNING 🥳. You should be able to create a new Account using any platform as API management.

- hit the endpoint **POST** http://localhost:3333/accounts with the JSON body\
{\
	"first_name": "Test",\
	"last_name": "Piggott",\
	"email": "test.piggott@gmail.com",\
	"password": "123456",\
	"gender": "female",\
	"date_birth": "1992-07-15",\
	"phone": "+61 0404 412 631",\
	"address_line_1": "40 Test Ave",\
	"city": "Test",\
	"state": "Test",\
	"country": "Australia",\
	"post_code": "3036"\
}

### Dev notes

If your docker crashes, run:
$ `docker-compose up --force-recreate`
