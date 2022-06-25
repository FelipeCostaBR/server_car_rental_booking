import 'reflect-metadata'
import consola from 'consola'
import { DataSource } from 'typeorm'

import { Account } from '../modules/accounts/entities/Account'
import { Admin } from '../modules/accounts/entities/Admin'
import { Vehicle } from '../modules/vehicles/entities/Vehicle'
import { Account_detail } from '../modules/accounts/entities/Account_detail'
import { Account_driver } from '../modules/accounts/entities/Account_driver'
import { Vehicle_detail } from '../modules/vehicles/entities/Vehicle_detail'
import { Vehicle_status } from '../modules/vehicles/entities/Vehicle_status'

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'database_booking',
  port: 5432,
  username: 'postgres',
  password: 'docker',
  database: 'booking',
  entities: [
    Vehicle,
    Vehicle_detail,
    Vehicle_status,
    Admin,
    Account_driver,
    Account_detail,
    Account,
  ],
  migrations: ['./src/database/migrations/*.ts'],
})

AppDataSource.initialize()
  .then(async () => {
    consola.log('Initializing the database...')
  })
  .catch(err => consola.log(err))
