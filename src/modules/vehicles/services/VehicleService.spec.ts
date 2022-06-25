import { faker } from '@faker-js/faker'
import { IVehicleDTO } from '../dtos/IVehicle'
import { VehicleRepositoryMock } from '../repositories/mock/VehicleRepositoryMock'
import { VehicleService } from './VehicleService'

let vehicle_repository: VehicleRepositoryMock
let vehicle_service: VehicleService


const create_vehicle_mock = (): IVehicleDTO => {
  return {
    registration_number: faker.vehicle.vrm(),
    registration_status: "AVAILABLE",
    VIN: faker.vehicle.vin(),
    model: faker.vehicle.model(),
    make: faker.vehicle.manufacturer(),
    body: faker.vehicle.type(),
    year: 2019,
    odometer: 30000,
  }
}

describe('when creates an Vehicle', () => {
  beforeEach(() => {
    vehicle_repository = new VehicleRepositoryMock()
    vehicle_service = new VehicleService(vehicle_repository)
  })

  it('should create an Vehicle', async () => {
    const vehicle_mock = create_vehicle_mock()

    await vehicle_service.create(vehicle_mock)

    const vehicle_mock_created = await vehicle_repository.findOneBy(
      vehicle_mock.registration_number
    )
    expect(vehicle_mock_created).toHaveProperty('id')
  })

  it('should fail if registration number already exist', async () => {
    const vehicle_mock = create_vehicle_mock()

    try {
      await vehicle_service.create(vehicle_mock)
      await vehicle_service.create(vehicle_mock)
    } catch (error) {
      expect(error.message).toEqual('vehicle with this registration number already exist')
    }
  })
})

describe('when get Vehicle', () => {
  beforeEach(() => {
    vehicle_repository = new VehicleRepositoryMock()
    vehicle_service = new VehicleService(vehicle_repository)
  })

  it('list all vehicles', async () => {
    await vehicle_service.create(create_vehicle_mock())
    await vehicle_service.create(create_vehicle_mock())
    await vehicle_service.create(create_vehicle_mock())

    const vehicles_list = await vehicle_service.index()
    expect(vehicles_list).toHaveLength(3)
    expect(vehicles_list).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          id: expect.any(Number),
          registration_number: expect.any(String),
          registration_status: expect.any(String),
          VIN: expect.any(String),
          model: expect.any(String),
          year: expect.any(Number),
        }),
      ])
    )
  })

  it('list one vehicle', async () => {
    await vehicle_service.create(create_vehicle_mock())
    await vehicle_service.create(create_vehicle_mock())
    await vehicle_service.create(create_vehicle_mock())

    const vehicle_mock = (await vehicle_service.index()).pop()

    const vehicle = await vehicle_service.find({ id: vehicle_mock.id })

    expect(vehicle.id).toEqual(vehicle_mock.id)
  })

  it('should fail if vehicle does not exist', async () => {
    await vehicle_service.create(create_vehicle_mock())
    const vehicle_mock = await vehicle_service.index()

    try {
      await vehicle_service.find({ id: vehicle_mock.length + 1 })
    } catch (error) {
      expect(error.message).toEqual('Vehicle does not exist')
    }
  })
})
