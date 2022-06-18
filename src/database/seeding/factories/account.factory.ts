import { Faker } from '@faker-js/faker'
import { define } from 'typeorm-seeding'
import { Account } from '../../../modules/accounts/entities/Account'

define(Account, (faker: Faker) => {
  const account = new Account()

  account.email = faker.internet.email()
  account.password = faker.internet.password(8)

  return account
})
