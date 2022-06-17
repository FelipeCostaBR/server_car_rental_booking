import { IAccountDTO } from '../modules/accounts/dtos/IAccount'
import { Account } from '../modules/accounts/entities/Account'

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
