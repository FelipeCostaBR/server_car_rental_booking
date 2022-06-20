import { differenceInYears, parse } from 'date-fns'

const AGE_THRESHOLD = 21

export function isBelow21(dateOfBirth: string) {
  const date = parse(dateOfBirth, 'yyyy-mm-dd', new Date())
  const age = differenceInYears(new Date(), date)
  return age < AGE_THRESHOLD
}
