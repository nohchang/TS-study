let hello: string = 'Hello World!'

hello = 'hello~'

console.log(hello)

// 타입 종류

/// 문자
/// : string

/// 숫자
/// : number

/// 불린
/// : boolean

/// Null/ Undefined
/// : null
/// : undefined

/// 배열
/// : string[]
/// : number[]
/// : (string|number)[]

/// 객체
/// : object - 객체, 배열, 함수 다 object로 인식해서 잘 사용하지 않음
/// : { name: string, age: number, isValid: boolean } → 재사용성을 위해서 인터페이스 사용

/// 함수
/// : (x: number, y: number) ⇒ number === function (x: number, y: number): number {}
/// : () ⇒ void === function (): void {}
/// → 인터페이스 호출 시그니처(call signature) 사용 가능

/// Any
/// : any → 어떤 타입이든 상관없음, 되도록 사용 안함

/// Unknown
/// : unknown → 어떤 타입이 할당될지 알 수 없음

/// Tuple
/// : [string, number, boolean] → [’a’, 1, false]
/// : [number, string, boolean][] → [1, ‘Neo’, true], [2, ‘Evan’, false], [3, Lewis, true]

/// Void
/// : void → return이 없는 함수

/// Never

/// Union
/// : string | number

/// Intersection
/// interface User { name: string, age: number }
/// interface Validation { isValid: boolean }
/// : User & Validation → 두 인터페이스 속성을 동시에 지녀야함