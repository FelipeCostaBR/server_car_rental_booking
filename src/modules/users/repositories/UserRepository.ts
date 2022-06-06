import { Repository } from 'typeorm'
import { AppDataSource } from '../../../database/data-source.config'
import { ICreateUserDTO } from '../dtos/ICreateUser'
import { User } from '../../users/entities/User'
import { IUserRepository } from './IUserRepository'

interface IUsers {
  users: User[]
}

class UserRepository implements IUserRepository {
  private repository: Repository<User>

  constructor() {
    this.repository = AppDataSource.getRepository(User)
  }
  async index(): Promise<IUsers> {
    const users = await this.repository.find()
    return { users }
  }

  async create(data: ICreateUserDTO): Promise<void> {
    const { name, email, password, date_birth } = data
    const user = this.repository.create({
      name,
      email,
      password,
      date_birth,
      isAdmin: false,
    })

    await this.repository.save(user)
  }

  async find(id: string): Promise<{ user: User }> {
    const user = await this.repository.findOneBy({ id })
    return { user }
  }

  async findOneBy(value: string): Promise<User> {
    const user = await this.repository.findOne({
      where: [{ name: value }, { email: value }, { date_birth: value }],
    })

    return user
  }
}

export { UserRepository }
