import { LaureateOrg, LaureatePerson } from '@/types'

export const isPerson = (
  laureate: LaureatePerson | LaureateOrg
): laureate is LaureatePerson => {
  return (laureate as LaureatePerson).fullName !== undefined
}
