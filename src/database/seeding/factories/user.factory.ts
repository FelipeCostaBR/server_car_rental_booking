import { Faker } from '@faker-js/faker'
import { define } from 'typeorm-seeding'
import { hash } from 'bcryptjs'
import { User } from '../../../modules/users/entities/User'
import validate_dt_birth from '../../../helper/isOver18'

define(User, (faker: Faker) => {
  const user = new User()
  const name = faker.name.firstName()
  const random_dt_birth = faker.date.past(70)
  const [dt_birth] = validate_dt_birth(random_dt_birth).split('T')

  user.name = name
  user.email = faker.internet.email(name)
  user.password = faker.internet.password(8)
  user.date_birth = dt_birth
  user.created_at = new Date()

  return user
})
