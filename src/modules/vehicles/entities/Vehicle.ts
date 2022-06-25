import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm'
import { Vehicle_detail } from './Vehicle_detail'

@Entity('vehicles')
export class Vehicle {
  @PrimaryGeneratedColumn()
  id: number

  @OneToOne(() => Vehicle_detail, { cascade: true })
  @JoinColumn({ name: 'vehicle_details_id' })
  vehicle_detail: Vehicle_detail

  vehicle_status: string

  @Column()
  registration_number: string

  @Column()
  registration_status: string

  @Column()
  VIN: string

  @Column()
  model: string

  @Column()
  make: string

  @Column()
  body: string

  @Column()
  year: number

  @Column()
  engine: string

  @Column()
  transmission: string

  @Column()
  fuel: string

  @Column()
  color: string

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date

  @DeleteDateColumn()
  deleted_at: Date
}
