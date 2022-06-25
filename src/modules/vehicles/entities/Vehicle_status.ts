import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity('vehicle_status')
export class Vehicle_status {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  status: string
}
