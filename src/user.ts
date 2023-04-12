export interface User1234 {
  firstName: string
  lastName: string
  age: number
  isValid: boolean
}

export function getFullName(user: User1234) {
  return `${user.firstName} ${user.lastName}`
}