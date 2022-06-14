import { Repository } from 'typeorm'
import { AppDataSource } from '../../../database/data-source.config'
import { ICreateAccountDTO } from '../dtos/ICreateAccount'
import { Account } from '../entities/Account'
import { Account_detail } from '../entities/Account_detail'
// import { Account_driver } from '../entities/Account_driver'
import { IAccountRepository } from './IAccountRepository'

interface IAccounts extends Account_detail {
  users: Account[]
}

class AccountRepository implements IAccountRepository {
  private account_repository: Repository<Account>
  private account_details_repository: Repository<Account_detail>
  // private account_driver_repository: Repository<Account_driver>

  constructor() {
    this.account_repository = AppDataSource.getRepository(Account)
    this.account_details_repository =
      AppDataSource.getRepository(Account_detail)
    // this.account_driver_repository = AppDataSource.getRepository(Account_driver)
  }

  // async index(): Promise<IAccounts> {
  //   const users = await this.repository.find()
  //   return { users }
  // }

  async create(data: ICreateAccountDTO): Promise<void> {
    const {
      first_name,
      last_name,
      email,
      password,
      gender,
      date_birth,
      phone,
      address_line_1,
      address_line_2,
      city,
      state,
      country,
      post_code,
    } = data

    const account_details = this.account_details_repository.create({
      first_name,
      last_name,
      gender,
      date_birth,
      phone,
      address_line_1,
      address_line_2,
      city,
      state,
      country,
      post_code,
    })

    const account = this.account_repository.create({
      email,
      password,
      account_detail: account_details,
    })

    await this.account_repository.save(account)
  }

  // async find(id: string): Promise<{ user: User }> {
  //   const user = await this.repository.findOneBy({ id })
  //   return { user }
  // }

  // async findOneBy(value: string): Promise<User> {
  //   const user = await this.repository.findOne({
  //     where: [{ name: value }, { email: value }, { date_birth: value }],
  //   })

  //   return user
  // }
}

export { AccountRepository }
