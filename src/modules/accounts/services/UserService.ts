import { hash } from 'bcryptjs'
import { AppError } from '../../../errors/AppError'
import { ICreateUserDTO } from '../dtos/ICreateUser'
import { User } from '../entities/User'
import { IUserRepository } from '../repositories/IUserRepository'

export class UserService {
  constructor(private userRepository: IUserRepository) {}

  async index(): Promise<{ users: User[] }> {
    return await this.userRepository.index()
  }

  async find({ id }): Promise<{ user: User }> {
    const user = await this.userRepository.find(id)

    if (!user) {
      throw new AppError('User does not exist.')
    }

    return user
  }

  async create({
    name,
    email,
    password,
    date_birth,
  }: ICreateUserDTO): Promise<void> {
    const user = await this.userRepository.findOneBy(email)

    if (user) {
      throw new AppError('Email already exist.')
    }

    const passwordHash = await hash(password, 8)
    await this.userRepository.create({
      name,
      email,
      password: passwordHash,
      date_birth,
    })
  }
}
