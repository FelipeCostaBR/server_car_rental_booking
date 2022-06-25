import { Request, Response } from 'express'
import { VehicleRepository } from '../repositories/VehicleRepository'
import { VehicleService } from '../services/VehicleService'

const vehicleRepository = new VehicleRepository()
const vehicleService = new VehicleService(vehicleRepository)

class VehicleController {
  async index(_: Request, response: Response): Promise<Response> {
    try {
      const vehicles = await vehicleService.index()
      return response.status(200).send({ vehicles })
    } catch (err) {
      return response.status(500).json(err.message)
    }
  }

  async show(request: Request, response: Response): Promise<Response> {
    const { id } = request.params
    try {
      const vehicle = await vehicleService.find({ id })
      return response.status(200).send({ vehicle })
    } catch (err) {
      return response.status(500).json(err.message)
    }
  }

  async create(request: Request, response: Response): Promise<Response> {
    const {
      registration_number,
      registration_status,
      VIN,
      model,
      make,
      body,
      year,
      odometer,
      engine,
      fuel,
      color,
      next_services_date,
      notes,
      price,
      transmission,
    } = request.body

    try {
      await vehicleService.create({
        registration_number,
        registration_status,
        VIN,
        model,
        make,
        body,
        year,
        odometer,
        engine,
        fuel,
        color,
        next_services_date,
        notes,
        price,
        transmission,
      })
      return response.status(201).send()
    } catch (err) {
      return response.status(400).json(err.message)
    }
  }
}

export { VehicleController }
