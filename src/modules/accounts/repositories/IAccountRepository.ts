import { IAccountDTO } from '../dtos/IAccount'
import { ICreateAccountDTO } from '../dtos/ICreateAccount'
import { Account } from '../entities/Account'
// import { Account_detail } from '../entities/Account_detail'

interface IAccountRepository {
  index(): Promise<IAccountDTO>
  create(account: ICreateAccountDTO): Promise<void>
  find(id: number): Promise<IAccountDTO>
  findOneBy(value: string): Promise<Account>
}

export { IAccountRepository }
