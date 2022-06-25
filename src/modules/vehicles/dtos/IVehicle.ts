interface IVehicleDTO {
  id?: number
  vehicle_status?: number
  registration_number: string
  registration_status: string
  VIN: string
  model: string
  make: string
  body: string
  year: number
  engine?: string
  transmission?: string
  fuel?: string
  color?: string
  odometer: number
  next_services_date?: Date
  price?: number
  notes?: string
}

export { IVehicleDTO }
