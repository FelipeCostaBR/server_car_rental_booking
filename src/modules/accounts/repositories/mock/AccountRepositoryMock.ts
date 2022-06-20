import { ICreateAccountDTO } from '../../dtos/ICreateAccount'
import { Account } from '../../entities/Account'
import { Account_detail } from '../../entities/Account_detail'
import { IAccountRepository } from '../IAccountRepository'

class AccountRepositoryMock implements IAccountRepository {
  accounts: Account[] = []

  async index(): Promise<Account[]> {
    const list = this.accounts
    return list
  }

  async find(id: number): Promise<Account> {
    const mock_account = this.accounts.find(account => account.id === id)
    return mock_account
  }

  async findOneBy(value: string): Promise<Account> {
    const mock_account = this.accounts.find(
      account =>
        account.account_detail.date_birth === value ||
        account.email === value ||
        account.account_detail.phone === value
    )
    return mock_account
  }

  async create({
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
  }: ICreateAccountDTO): Promise<void> {
    const account = new Account()
    const account_details = new Account_detail()

    const new_account_details = Object.assign(account_details, {
      id: this.accounts.length + 1,
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

    const new_account = Object.assign(account, {
      id: this.accounts.length + 1,
      account_detail: new_account_details,
      email,
      password,
      is_active: true,
      created_at: new Date(),
      updated_at: new Date(),
      deleted_at: new Date(),
    })

    this.accounts.push(new_account)
  }
}

export { AccountRepositoryMock }
