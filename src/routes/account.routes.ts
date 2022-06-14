import { Request, Response, Router } from 'express'
import { AccountController } from '../modules/accounts/controller/AccountController'

const accountRoutes = Router()

const accountController = new AccountController()

// userRoutes.get('/', (request: Request, response: Response) => {
//   userController.index(request, response)
// })

// userRoutes.get('/:id', (request: Request, response: Response) => {
//   userController.show(request, response)
// })

accountRoutes.post('/create', (request: Request, response: Response) => {
  accountController.create(request, response)
})

export { accountRoutes }
