// 제너릭(Generic)
/// 인터페이스, 제약 조건(Constraints)

interface MyData<T extends string | number> {
  name: string
  value: T
}
const dataA: MyData<string> = {
  name: 'Data A',
  value: 'Hello world'
}
const dataB: MyData<number> = {
  name: 'Data B',
  value: 1234
}
// extends 제약 조건을 사용하면 아래 사용 불가
// const dataC: MyData<boolean> = {
//   name: 'Data C',
//   value: true
// }
// const dataD: MyData<number[]> = {
//   name: 'Data D',
//   value: [1, 2, 3, 4]
// }