import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import { Vehicle } from './Vehicle'

@Entity('vehicle_details')
export class Vehicle_detail {
  @PrimaryGeneratedColumn()
  id: number

  @OneToMany(() => Vehicle, vehicle => vehicle.vehicle_detail)
  vehicles: Vehicle[]

  @Column()
  odometer: number

  @Column()
  next_services_date: Date

  @Column()
  price: number

  @Column()
  notes: string
}
