import { ICreateUserDTO } from '../dtos/ICreateUser'
import { User } from '../entities/User'

interface IUsers {
  users: User[]
}

interface IUserRepository {
  index(): Promise<IUsers>
  create(data: ICreateUserDTO): Promise<void>
  find(id: string): Promise<{ user: User }>
  findOneBy(value: string): Promise<User>
}

export { IUserRepository }
