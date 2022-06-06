import { Request, Response } from 'express'
import { UserRepository } from '../repositories/UserRepository'
import { UserService } from '../services/UserService'

const userRepository = new UserRepository()
const userService = new UserService(userRepository)

class UserController {
  async index(_: Request, response: Response): Promise<Response> {
    try {
      const users = await userService.index()
      return response.status(200).send(users)
    } catch (err) {
      return response.status(500).json(err.message)
    }
  }

  async show(request: Request, response: Response): Promise<Response> {
    const { id } = request.params
    try {
      const users = await userService.find({ id })
      return response.status(200).send(users)
    } catch (err) {
      return response.status(500).json(err.message)
    }
  }

  async create(request: Request, response: Response): Promise<Response> {
    const { name, email, password, date_birth } = request.body
    try {
      await userService.create({ name, email, password, date_birth })
      return response.status(201).send()
    } catch (err) {
      return response.status(400).json(err.message)
    }
  }
}

export { UserController }
