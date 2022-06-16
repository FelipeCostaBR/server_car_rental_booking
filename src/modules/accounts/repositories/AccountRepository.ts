import { RelationId, Repository } from 'typeorm'
import { AppDataSource } from '../../../database/data-source.config'
import { IAccountDTO } from '../dtos/IAccount'
import { ICreateAccountDTO } from '../dtos/ICreateAccount'
import { Account } from '../entities/Account'
import { Account_detail } from '../entities/Account_detail'
// import { Account_driver } from '../entities/Account_driver'
import { IAccountRepository } from './IAccountRepository'

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


  async index(): Promise<IAccountDTO> {
    const accounts_repository = await this.account_repository.find({
      relations: {
        account_detail: true,
      }
    })

    const accounts = this.format_accounts(accounts_repository)
    return accounts
  }

  async find(id: number): Promise<IAccountDTO> {
    const account_repository = await this.account_repository.find({
      where: { id },
      relations: {
        account_detail: true
      }
    })
    const account = this.format_accounts(account_repository).pop()

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
    // Can find by these Account information: date_birth, email, phon4

    const account = await this.account_repository.findOne({
      where: [{ account_detail: { date_birth: value } }, { email: value }, { account_detail: { phone: value } }],
      relations: {
        account_detail: true
      }
    })

    return account
  }

  private format_accounts(accounts_repository): IAccountDTO {
    const accounts = accounts_repository.map(account => (
      {
        id: account.id,
        first_name: account.account_detail.first_name,
        last_name: account.account_detail.last_name,
        email: account.email,
        gender: account.account_detail.gender,
        data_birth: account.account_detail.date_birth,
        phone: account.account_detail.phone,
        address_line_1: account.account_detail.address_line_1,
        address_line_2: account.account_detail.address_line_2,
        city: account.account_detail.city,
        state: account.account_detail.state,
        country: account.account_detail.country,
        post_code: account.account_detail.post_code,
        is_active: account.is_active,
        created_at: account.created_at,
        updated_at: account.updated_at,
        deleted_at: account.deleted_at
      }
    ))
    return accounts
  }
}

export { AccountRepository }
