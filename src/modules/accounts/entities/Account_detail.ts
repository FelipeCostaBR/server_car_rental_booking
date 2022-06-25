import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import { Account } from './Account'
import { Account_driver } from './Account_driver'

@Entity('accounts_details')
export class Account_detail {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  first_name: string

  @Column()
  last_name: string

  @Column()
  gender: string

  @Column()
  date_birth: string

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

  @OneToMany(() => Account_driver, account_driver => account_driver)
  account_driver: Account_driver[]
}
