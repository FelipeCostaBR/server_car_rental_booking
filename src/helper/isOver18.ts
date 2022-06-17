import { faker } from '@faker-js/faker'

function isOver18(dateOfBirth: Date) {
  const date18YrsAgo = new Date()
  date18YrsAgo.setFullYear(date18YrsAgo.getFullYear() - 18)

  return dateOfBirth <= date18YrsAgo
}

export default function validate_dt_birth(date: Date): string {
  while (!isOver18(date)) {
    date = faker.date.past(70)
  }

  return date.toISOString()
}
