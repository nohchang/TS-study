// 제너릭(Generic)
/// 함수

interface Obj {
  x: number
}
type Arr = [number, number]

// 함수 오버로딩
// function toArray(a: string, b: string): string[]
// function toArray(a: number, b: number): number[]
// function toArray(a: boolean, b: boolean): boolean[]
// function toArray(a: Obj, b: Obj): Obj[]
// function toArray(a: Arr, b: Arr): Arr[]
// function toArray(a: any, b: any) {
//   return [a, b]
// }

// 제너릭 문법
function toArray<T>(a: T, b: T) {
  return [a, b]
}

console.log(
  // <> 해주지 않아도 타입 추론을 통해 첫번째 열의 타입으로 사용 가능, 타입 추론 적극 사용 권장
  toArray<string>('Neo', 'Anderson'),
  toArray(1, 2),
  toArray(true, false),
  toArray({ x: 1 }, { x: 2 }),
  // toArray([1, 2], [3, 4, 5]) // number[]
  toArray<Arr>([1, 2], [3, 4])
)