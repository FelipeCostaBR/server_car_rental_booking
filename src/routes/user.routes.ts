import { Request, Response, Router } from 'express'
import { UserController } from '../modules/users/controller/UserController'

const userRoutes = Router()

const userController = new UserController()

userRoutes.get('/', (request: Request, response: Response) => {
  userController.index(request, response)
})

userRoutes.get('/:id', (request: Request, response: Response) => {
  userController.show(request, response)
})

userRoutes.post('/create', (request: Request, response: Response) => {
  userController.create(request, response)
})

export { userRoutes }
