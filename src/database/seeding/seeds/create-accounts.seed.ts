import { Factory, Seeder } from 'typeorm-seeding'
import { Account } from '../../../modules/users/entities/Account'

export default class CreateUsers implements Seeder {
  public async run(factory: Factory): Promise<void> {
    await factory(Account)().createMany(10)
  }
}
