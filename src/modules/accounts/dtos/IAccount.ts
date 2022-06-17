interface IAccountDTO {
  id: number
  first_name: string
  last_name: string
  email: string
  gender: string
  date_birth: string
  phone: string
  address_line_1: string
  address_line_2: string
  city: string
  state: string
  country: string
  post_code: string
  is_active: boolean
  created_at: Date
  updated_at: Date
  deleted_at: Date
}

export { IAccountDTO }
