const message = "Hello, JavaScript!";

const showMessage = () => {
  console.log(message); // A
  let message = "Hello, ES6!";
  console.log(message); // B
};

showMessage();

/*
🚀 실행 흐름

1. 전역 변수 선언 및 초기화
const message = 'Hello, JavaScript!';
message라는 전역 변수가 선언되고, 'Hello, JavaScript!'로 초기화됨.

2. showMessage 함수 실행
함수 내부에서 변수 message를 let으로 다시 선언하고 있음.
하지만, 함수 블록 {} 안에서 let message가 존재하므로 블록 스코프가 적용됨.
console.log(message); // A 실행 시, 블록 내부에서 message를 찾음.
하지만 let message는 **TDZ(Temporal Dead Zone)**에 걸려 초기화되기 전이므로 ReferenceError 발생!
*/
