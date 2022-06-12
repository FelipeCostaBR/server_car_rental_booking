import { Faker } from '@faker-js/faker'
import { define } from 'typeorm-seeding'
import { Account } from '../../../modules/users/entities/Account'
import validate_dt_birth from '../../../helper/isOver18'

define(Account, (faker: Faker) => {
  const account = new Account()
  const random_dt_birth = faker.date.past(70)
  const [dt_birth] = validate_dt_birth(random_dt_birth).split('T')

  account.first_name = faker.name.firstName()
  account.last_name = faker.name.lastName()
  account.gender = 'Male'
  account.date_birth = dt_birth
  account.email = faker.internet.email(account.first_name, account.last_name)
  account.password = faker.internet.password(8)
  account.phone = faker.phone.phoneNumber('+61 04## ### ###')
  account.address_line_1 = faker.address.streetName()
  account.city = faker.address.city()
  account.state = faker.address.stateAbbr()
  account.country = faker.address.country()
  account.post_code = '3036'

  return account
})
