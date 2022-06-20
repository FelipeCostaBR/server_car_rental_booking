import { ICreateAccountDTO } from '../dtos/ICreateAccount'
import { Account } from '../entities/Account'

interface IAccountRepository {
  index(): Promise<Account[]>
  create(account: ICreateAccountDTO): Promise<void>
  find(id: number): Promise<Account>
  findOneBy(value: string): Promise<Account>
}

export { IAccountRepository }
