import { Repository } from 'typeorm'
import { AppDataSource } from '../../../database/data-source.config'
import { ICreateAccountDTO } from '../dtos/ICreateAccount'
import { Account } from '../entities/Account'
import { Account_detail } from '../entities/Account_detail'
import { IAccountRepository } from './IAccountRepository'
class AccountRepository implements IAccountRepository {
  private account_repository: Repository<Account>
  private account_details_repository: Repository<Account_detail>

  constructor() {
    this.account_repository = AppDataSource.getRepository(Account)
    this.account_details_repository =
      AppDataSource.getRepository(Account_detail)
  }

  async index(): Promise<Account[]> {
    const accounts = await this.account_repository.find({
      relations: {
        account_detail: true,
      },
    })

    return accounts
  }

  async find(id: number): Promise<Account> {
    const account = await this.account_repository.findOne({
      where: { id },
      relations: {
        account_detail: true,
      },
    })

    return account
  }

  async create(account: ICreateAccountDTO): Promise<void> {
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
    } = account

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

    const account_instancy = this.account_repository.create({
      email,
      password,
      account_detail: account_details,
    })

    await this.account_repository.save(account_instancy)
  }

  async findOneBy(value: string): Promise<Account> {
    // Can find by these Account information: date_birth, email, phone

    const account = await this.account_repository.findOne({
      where: [
        { account_detail: { date_birth: value } },
        { email: value },
        { account_detail: { phone: value } },
      ],
      relations: {
        account_detail: true,
      },
    })

    return account
  }
}

export { AccountRepository }
