import { Faker } from '@faker-js/faker'
import { define } from 'typeorm-seeding'
import validate_dt_birth from '../../../helper/isOver18'
import { Account_detail } from '../../../modules/accounts/entities/Account_detail'

define(Account_detail, (faker: Faker) => {
  const account_details = new Account_detail()
  const random_dt_birth = faker.date.past(70)
  const [dt_birth] = validate_dt_birth(random_dt_birth).split('T')

  account_details.first_name = faker.name.firstName()
  account_details.last_name = faker.name.lastName()
  account_details.gender = 'Male'
  account_details.date_birth = dt_birth
  account_details.phone = faker.phone.phoneNumber('+61 04## ### ###')
  account_details.address_line_1 = faker.address.streetName()
  account_details.city = faker.address.city()
  account_details.state = faker.address.stateAbbr()
  account_details.country = faker.address.country()
  account_details.post_code = '3036'

  return account_details
})
