// 인터페이스

// 선택적 속성 - ?
// 읽기전용 속성 - readonly

interface User {
  name: string
  readonly age: number
  isValid?: boolean
}
const heropy: User = {
  name: 'Heropy',
  age: 85,
  isValid: true
}
heropy.isValid = false
// heropy.age = 21
const neo: User = {
  name: 'Neo',
  age: 102
}

// 함수 타입 - 호출 시그니처(Call Signature)

interface GetName {
  (message: string): string
  // message -> param 으로 작성해도 문제 안됨
}
interface User2 {
  name: string
  age: number
  getName: GetName
  // 재사용이 아니라 한번만 사용될 경우
  // getName: (message: string) => string
  // message -> param 으로 작성해도 문제 안됨
}
const heropy2: User2 = {
  name: 'Heropy',
  age: 85,
  getName(message: string) {
    console.log(message)
    return this.name
  }
}
heropy2.getName('Hello~')

// 인덱스 가능 타입 - 인덱스 시그니처(Index Signature)

/// 배열
interface Fruits {
  [item: number]: string
}
const fruits: Fruits = ['Apple', 'Banana', 'Cherry']
console.log(fruits)

/// 객체
interface User3 {
  [key: string]: unknown
  name: string
  age: number
}
const heropy3: User3 = {
  name: 'Heropy',
  age: 85
}
heropy3['isValid'] = true
heropy3['emails'] = ['thesecon@gmail.com', 'test@gmail.com']
console.log(heropy3)

/// 예시
interface Payload {
  [key: string]: unknown
}
function logValues(payload: Payload) {
  for (const key in payload) {
    console.log(payload[key])
  }
}

interface User4 {
  [key: string]: unknown
  name: string
  age: number
  isValid: boolean
}
const heropy4: User4 = {
  name: 'Heropy',
  age: 85,
  isValid: true
}
logValues(heropy4)

// 확장(상속)

interface UserA {
  name: string
  age: number
}
interface UserB extends UserA {
  isValid: boolean
}

const heropy5: UserA = {
  name: 'Heropy',
  age: 85,
  // isValid: true
}
const neo2: UserB = {
  name: 'Neo',
  age: 102,
  isValid: true
}

/// 예시
interface FullName {
  firstName: string
  lastName: string
}
interface FullName {
  middleName: string
  // lastName: boolean
  // 기존에 존재하는 속성의 타입을 그대로 명시해줘야 함
  lastName: string
}
// 인터페이스 동일한 이름으로 지정 가능

const fullName: FullName = {
  firstName: 'Tomas',
  middleName: 'Sean',
  lastName: 'Connery'
}