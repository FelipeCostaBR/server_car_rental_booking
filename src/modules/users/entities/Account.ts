import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm'

@Entity('accounts')
export class Account {
  @PrimaryGeneratedColumn()
  account_id: number

  @Column()
  first_name: string

  @Column()
  last_name: string

  @Column()
  gender: string

  @Column()
  date_birth: string

  @Column()
  email: string

  @Column()
  password: string

  @Column()
  phone: string

  @Column()
  address_line_1: string

  @Column()
  address_line_2: string


  @Column()
  city: string

  @Column()
  state: string

  @Column()
  country: string

  @Column()
  post_code: string

  @Column()
  is_active: boolean

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date

  @DeleteDateColumn()
  deleted_at: Date
}
