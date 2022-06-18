import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm'
import { Account } from './Account'
import { Account_detail } from './Account_detail'

@Entity('account_drivers')
export class Account_driver {
  @PrimaryGeneratedColumn()
  id: number

  @OneToOne(() => Account_detail, { cascade: true })
  @JoinColumn({ name: 'account_details_id' })
  account_details: Account_detail

  @ManyToOne(() => Account, { cascade: true })
  @JoinColumn({ name: 'account_id' })
  account: Account

  @Column()
  license_number: string

  @Column()
  expiry_date: Date

  @Column()
  license_type: string

  @Column()
  issue_state: string

  @Column()
  issue_country: string

  @Column()
  conditions: string

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date

  @DeleteDateColumn()
  deleted_at: Date
}
