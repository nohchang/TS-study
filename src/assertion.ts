// 타입 단언
// '단언' - 주저하지 아니하고 딱 잘라 말함

// 단언 키워드 - as
// Non-null 단언 연산자 - !

// 1)
const el = document.querySelector('body') as HTMLBodyElement
el.textContent = 'Hello World?!' 

const el2 = document.querySelector('body')
el2!.textContent = 'Hello World?!' 

// 2)
// 잘못된 타입 단언
function getNumber(x: number | null | undefined) {
  return Number((x as number).toFixed(2))
}
getNumber(3.1415926535)
getNumber(null)

function getNumber2(x: number | null | undefined) {
  return Number(x!.toFixed(2))
}
getNumber2(3.1415926535)
getNumber2(null)

// 3)
// 정상적인 타입 단언 코드
function getValue(x: string | number, isNumber: boolean) {
  if (isNumber) {
    return Number((x as number).toFixed(2))
  }
  return (x as string).toUpperCase()
}
getValue('hello world', false) // 'HELLO WORLD'
getValue(3.1415926535, true) // 3.14


// 할당 단언

let num2!: number
console.log(num2)

num2 = 123