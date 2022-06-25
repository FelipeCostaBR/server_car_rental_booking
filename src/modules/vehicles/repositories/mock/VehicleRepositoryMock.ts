import { IVehicleDTO } from "../../dtos/IVehicle";
import { Vehicle } from "../../entities/Vehicle";
import { Vehicle_detail } from "../../entities/Vehicle_detail";
import { IVehicleRepository } from "../IVehicleRepository";


class VehicleRepositoryMock implements IVehicleRepository {
  vehicles: Vehicle[] = []

  async index(): Promise<Vehicle[]> {
    const list = this.vehicles
    return list
  }

  async find(id: number): Promise<Vehicle> {
    const mock_vehicle = this.vehicles.find(vehicle => vehicle.id === id)
    return mock_vehicle
  }

  async findOneBy(registration_number: string): Promise<Vehicle> {
    const mock_vehicle = this.vehicles.find(
      vehicle => vehicle.registration_number === registration_number
    )
    return mock_vehicle
  }

  async create({ registration_number,
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
    transmission, }: IVehicleDTO): Promise<void> {
    const vehicle = new Vehicle()
    const vehicle_details = new Vehicle_detail()

    const new_vehicle_details = Object.assign(vehicle_details, {
      id: this.vehicles.length + 1,
      odometer,
      next_services_date,
      price,
      notes,
    })

    const new_vehicle = Object.assign(vehicle, {
      id: this.vehicles.length + 1,
      vehicle_status: 'AVAILABLE',
      vehicle_detail: new_vehicle_details,
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
      created_at: new Date(),
      updated_at: new Date(),
      deleted_at: new Date(),
    })

    this.vehicles.push(new_vehicle)
  }
}

export { VehicleRepositoryMock }