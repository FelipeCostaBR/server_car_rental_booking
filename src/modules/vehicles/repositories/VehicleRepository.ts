import { Repository } from 'typeorm'
import { IVehicleRepository } from './IVehicleRepository'
import { IVehicleDTO } from '../dtos/IVehicle'
import { Vehicle } from '../entities/Vehicle'
import { Vehicle_detail } from '../entities/Vehicle_detail'
import { AppDataSource } from '../../../database/data-source.config'

class VehicleRepository implements IVehicleRepository {
  private vehicle_repository: Repository<Vehicle>
  private vehicle_details_repository: Repository<Vehicle_detail>

  constructor() {
    this.vehicle_repository = AppDataSource.getRepository(Vehicle)
    this.vehicle_details_repository =
      AppDataSource.getRepository(Vehicle_detail)
  }

  async index(): Promise<Vehicle[]> {
    const vehicles = await this.vehicle_repository.find({
      relations: {
        vehicle_detail: true,
      },
    })

    return vehicles
  }

  async find(id: number): Promise<Vehicle> {
    const vehicle = await this.vehicle_repository.findOne({
      where: { id },
      relations: {
        vehicle_detail: true,
      },
    })

    return vehicle
  }

  async create(vehicle: IVehicleDTO): Promise<void> {
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
    } = vehicle

    const vehicle_details = this.vehicle_details_repository.create({
      odometer,
      next_services_date,
      price,
      notes,
    })

    const vehicle_instancy = this.vehicle_repository.create({
      registration_number,
      registration_status,
      VIN,
      model,
      make,
      body,
      year,
      engine,
      transmission,
      fuel,
      color,
      vehicle_detail: vehicle_details,
    })

    await this.vehicle_repository.save(vehicle_instancy)
  }

  async findOneBy(registration_number: string): Promise<Vehicle> {
    const vehicle = await this.vehicle_repository.findOne({
      where: { registration_number },
    })

    return vehicle
  }
}

export { VehicleRepository }
