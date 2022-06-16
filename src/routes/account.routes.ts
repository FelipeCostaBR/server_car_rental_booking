import { Request, Response, Router } from 'express'
import { AccountController } from '../modules/accounts/controller/AccountController'

const accountRoutes = Router()

const accountController = new AccountController()

accountRoutes.get('/', (request: Request, response: Response) => {
  accountController.index(request, response)
})

accountRoutes.get('/:id', (request: Request, response: Response) => {
  accountController.show(request, response)
})

accountRoutes.post('/', (request: Request, response: Response) => {
  accountController.create(request, response)
})

export { accountRoutes }
