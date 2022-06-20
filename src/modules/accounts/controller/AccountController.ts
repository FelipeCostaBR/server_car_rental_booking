import { Request, Response } from 'express'
import { AccountRepository } from '../repositories/AccountRepository'
import { AccountService } from '../services/AccountService'

const accountRepository = new AccountRepository()
const accountService = new AccountService(accountRepository)

class AccountController {
  async index(_: Request, response: Response): Promise<Response> {
    try {
      const accounts = await accountService.index()
      return response.status(200).send({ accounts })
    } catch (err) {
      return response.status(500).json(err.message)
    }
  }

  async show(request: Request, response: Response): Promise<Response> {
    const { id } = request.params
    try {
      const account = await accountService.find({ id })
      return response.status(200).send({ account })
    } catch (err) {
      return response.status(500).json(err.message)
    }
  }

  async create(request: Request, response: Response): Promise<Response> {
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
    } = request.body

    try {
      await accountService.create({
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
      })
      return response.status(201).send()
    } catch (err) {
      return response.status(400).json(err.message)
    }
  }
}

export { AccountController }
