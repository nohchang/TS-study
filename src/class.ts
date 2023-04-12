// 클래스

// 접근 제어자(Access Modifiers)
/// pubilc - 어디서나 자유롭게 접근 가능, 클래스 바디에서 생략 가능
/// protected - 나와 파생된 후손 클래스 내에서 접근 가능
/// private - 내 클래스에서만 접근 가능

class UserA1 {
  // public first: string = ''
  // public last: string = ''
  // public age: number = 0
  // constructor(first: string, last: string, age: number) {
  //   this.first = first
  //   this.last = last
  //   this.age = age
  // } // 아래와 같이 사용 가능
  constructor(
    public first: string = '',
    public last: string = '',
    public age: number = 0
  ) {
    // ...
  }
  protected getAge() {
    return `${this.first} ${this.last} is ${this.age}`
  }
}
class UserB1 extends UserA1 {
  getAge() {
    return `${this.first} ${this.last} is ${this.age}`
  }
}
class UserC1 extends UserB1 {
  getAge() {
    return `${this.first} ${this.last} is ${this.age}`
  }
}

const neo1 = new UserA1('Neo', 'Anderson', 102)
console.log(neo1.first)
console.log(neo1.last)
console.log(neo1.age)
// neo1.getAge()