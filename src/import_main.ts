import { getFullName, User1234 } from './user'

const heropy8: User1234 = {
  firstName: 'Heropy',
  lastName: 'Park',
  age: 85,
  isValid: true
}
const fullName = getFullName(heropy8)

console.log(fullName)
console.log(heropy8.isValid)