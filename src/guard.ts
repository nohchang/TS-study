// 타입 가드

// 1)
function logText(el: Element) {
  console.log(el.textContent)
}

// 타입 단언으로 해결 : 잘못된 코드
const h1El = document.querySelector('h1') as HTMLHeadingElement
logText(h1El)

// 타입 가드로 해결 - instanceof 부분은 없어도 됨
const h1El2 = document.querySelector('h1')
if (h1El2 instanceof HTMLHeadingElement) {
  logText(h1El2)
}

// 2)
function add2(val: string | number) {
  let res = 'Result => '
  if (typeof val === 'number') {
    res += val.toFixed(2)
  } else {
    res += val.toUpperCase()
  }
  console.log(res)
}
add2(3.141592)
add2('hello world')

