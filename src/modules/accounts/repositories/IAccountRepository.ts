import { ICreateAccountDTO } from '../dtos/ICreateAccount'
import { Account } from '../entities/Account'

interface IAccounts {
  users: Account[]
}

interface IAccountRepository {
  // index(): Promise<IAccounts>
  create(data: ICreateAccountDTO): Promise<void>
  // find(id: string): Promise<{ user: Account }>
  // findOneBy(value: string): Promise<Account>
}

export { IAccountRepository }
