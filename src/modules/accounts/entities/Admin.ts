import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm'
import { Account } from './Account'
import { Account_detail } from './Account_detail'

@Entity('admins')
export class Admin {
  @PrimaryGeneratedColumn()
  @ManyToOne(() => Account, { cascade: true })
  @JoinColumn({ name: 'account_id' })
  account: Account

  @OneToOne(() => Account_detail, { cascade: true })
  @JoinColumn({ name: 'account_details_id' })
  account_details: Account_detail

  @Column()
  role: string
}
