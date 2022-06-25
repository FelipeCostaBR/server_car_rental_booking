import { Request, Response, Router } from 'express'
import { VehicleController } from '../modules/vehicles/controller/VehicleController'

const vehicleRoutes = Router()

const vehicleController = new VehicleController()

vehicleRoutes.get('/', (request: Request, response: Response) => {
  vehicleController.index(request, response)
})

vehicleRoutes.get('/:id', (request: Request, response: Response) => {
  vehicleController.show(request, response)
})

vehicleRoutes.post('/', (request: Request, response: Response) => {
  vehicleController.create(request, response)
})

export { vehicleRoutes }
