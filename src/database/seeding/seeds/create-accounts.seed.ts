import { Factory, Seeder } from 'typeorm-seeding'
import { Account } from '../../../modules/accounts/entities/Account'

export default class CreateAccountDetail implements Seeder {
  public async run(factory: Factory): Promise<void> {
    await factory(Account)().createMany(10)
  }
}
