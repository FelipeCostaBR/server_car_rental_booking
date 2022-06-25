import { Vehicle } from '../entities/Vehicle'
import { IVehicleDTO } from '../dtos/IVehicle'

interface IVehicleRepository {
  index(): Promise<Vehicle[]>
  create(vehicle: IVehicleDTO): Promise<void>
  find(id: number): Promise<Vehicle>
  findOneBy(registration_number: string): Promise<Vehicle>
}

export { IVehicleRepository }
