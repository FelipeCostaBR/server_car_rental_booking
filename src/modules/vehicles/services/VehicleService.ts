import { Vehicle } from '../entities/Vehicle'
import { IVehicleDTO } from '../dtos/IVehicle'
import { IVehicleRepository } from '../repositories/IVehicleRepository'
import { AppError } from '../../../errors/AppError'
import { format_vehicle } from '../../../helper/formatEntity'

export class VehicleService {
  constructor(private vehicleRepository: IVehicleRepository) {}

  async index(): Promise<IVehicleDTO[]> {
    const vehicles = await this.vehicleRepository.index()

    const vehicles_formatted = vehicles.map((vehicle: Vehicle) =>
      format_vehicle(vehicle)
    )

    return vehicles_formatted
  }

  async find({ id }): Promise<IVehicleDTO> {
    const vehicle = await this.vehicleRepository.find(id)

    if (!vehicle) {
      throw new AppError('Vehicle does not exist')
    }

    return format_vehicle(vehicle)
  }

  async create({
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
  }: IVehicleDTO): Promise<void> {
    const vehicle = await this.vehicleRepository.findOneBy(registration_number)

    if (vehicle) {
      throw new AppError('vehicle with this registration number already exist')
    }

    await this.vehicleRepository.create({
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
  }
}
