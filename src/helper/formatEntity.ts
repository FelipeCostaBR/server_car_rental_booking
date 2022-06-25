import { Account } from '../modules/accounts/entities/Account'
import { Vehicle } from '../modules/vehicles/entities/Vehicle'
import { IVehicleDTO } from '../modules/vehicles/dtos/IVehicle'
import { IAccountDTO } from '../modules/accounts/dtos/IAccount'

export const format_account = (account: Account): IAccountDTO => ({
  id: account.id,
  first_name: account.account_detail.first_name,
  last_name: account.account_detail.last_name,
  email: account.email,
  gender: account.account_detail.gender,
  date_birth: account.account_detail.date_birth,
  phone: account.account_detail.phone,
  address_line_1: account.account_detail.address_line_1,
  address_line_2: account.account_detail.address_line_2,
  city: account.account_detail.city,
  state: account.account_detail.state,
  country: account.account_detail.country,
  post_code: account.account_detail.post_code,
  is_active: account.is_active,
  created_at: account.created_at,
  updated_at: account.updated_at,
  deleted_at: account.deleted_at,
})

export const format_vehicle = (vehicle: Vehicle): IVehicleDTO => ({
  id: vehicle.id,
  registration_status: vehicle.registration_status,
  registration_number: vehicle.registration_number,
  VIN: vehicle.VIN,
  model: vehicle.model,
  make: vehicle.make,
  body: vehicle.body,
  year: vehicle.year,
  engine: vehicle.engine,
  transmission: vehicle.transmission,
  fuel: vehicle.fuel,
  color: vehicle.color,
  odometer: vehicle.vehicle_detail.odometer,
  next_services_date: vehicle.vehicle_detail.next_services_date,
  price: vehicle.vehicle_detail.price,
  notes: vehicle.vehicle_detail.notes,
})
