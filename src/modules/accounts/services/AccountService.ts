import { hash } from 'bcryptjs'
import { AppError } from '../../../errors/AppError'
import { format_account } from '../../../helper/formatAccount'
import { formatDate } from '../../../helper/formatDate'
import { IAccountDTO } from '../dtos/IAccount'
import { ICreateAccountDTO } from '../dtos/ICreateAccount'
import { Account } from '../entities/Account'
import { IAccountRepository } from '../repositories/IAccountRepository'

export class AccountService {
  constructor(private accountRepository: IAccountRepository) {}

  async index(): Promise<IAccountDTO[]> {
    const accounts = await this.accountRepository.index()
    const accounts_formatted = accounts.map((account: Account) =>
      format_account(account)
    )

    return accounts_formatted
  }

  async find({ id }): Promise<IAccountDTO> {
    const account = await this.accountRepository.find(id)

    if (!account) {
      throw new AppError('Account does not exist.')
    }

    return format_account(account)
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
    const account = await this.accountRepository.findOneBy(email)

    if (account) {
      throw new AppError('Email already exist.')
    }

    const passwordHash = await hash(password, 8)
    const date_birth_formatted = formatDate(date_birth)

    await this.accountRepository.create({
      first_name,
      last_name,
      email,
      password: passwordHash,
      gender,
      date_birth: date_birth_formatted,
      phone,
      address_line_1,
      address_line_2,
      city,
      state,
      country,
      post_code,
    })
  }
}
