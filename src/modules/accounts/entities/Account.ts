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
import { Account_detail } from './Account_detail'

@Entity('accounts')
export class Account {
  @PrimaryGeneratedColumn()
  id: number

  @OneToOne(() => Account_detail, { cascade: true })
  @JoinColumn({ name: 'account_details_id' })
  account_detail: Account_detail

  @Column()
  email: string

  @Column({ select: false })
  password: string

  @Column()
  is_active: boolean

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date

  @DeleteDateColumn()
  deleted_at: Date
}
