// 1. let 키워드를 사용한 변수의 호이스팅 확인하기
console.log(messageLet);
let messageLet = "Hello with let!";
// let 키워드는 호이스팅은 되지만 초기화되지 않아서 사용할 수 없다! TDZ 발생

// 2. const 키워드를 사용한 변수의 호이스팅 확인하기
console.log(messageConst);
const messageConst = "Hello with const!";
// const도 let과 동일하게 호이스팅은 되지만, 초기화되지 않아 TDZ 에러 발생!

// 3. 화살표 함수의 호이스팅 확인하기
console.log(greet());
const greet = () => "Hello, Arrow Function!";
// const greet는 변수에 화살표 함수를 할당한 것이므로, 변수 자체가 TDZ에 걸려 있어서
// console.log(greet()) 실행 시 greet은 아직 undefined 상태이므로 TypeError 발생!
