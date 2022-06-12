import 'reflect-metadata'
import { DataSource } from 'typeorm'
import { Account } from '../modules/users/entities/Account'

import consola from 'consola'

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost', // to run migrations change to -> 'localhost'. To run server change to -> database_booking
  port: 5432,
  username: 'postgres',
  password: 'docker',
  database: 'booking',
  entities: [Account],
  migrations: ['./src/database/migrations/*.ts'],
})

AppDataSource.initialize()
  .then(async () => {
    consola.log('Initializing the database...')
  })
  .catch(err => console.log(err))
