import 'reflect-metadata'
import { DataSource } from 'typeorm'
import { Account } from '../modules/accounts/entities/Account'

import consola from 'consola'
import { Account_detail } from '../modules/accounts/entities/Account_detail'
import { Account_driver } from '../modules/accounts/entities/Account_driver'
import { Admin } from '../modules/accounts/entities/Admin'

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'database_booking', // to run migrations change to -> 'localhost'. To run server change to -> database_booking
  port: 5432,
  username: 'postgres',
  password: 'docker',
  database: 'booking',
  entities: [Admin, Account_driver, Account_detail, Account],
  migrations: ['./src/database/migrations/*.ts'],
})

AppDataSource.initialize()
  .then(async () => {
    consola.log('Initializing the database...')
  })
  .catch(err => consola.log(err))
