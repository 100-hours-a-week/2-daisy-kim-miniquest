// 블록 스코프 내의 let 변수 접근하기

if (true) {
  let isRaining = true; // 블록 스코프 내에서 선언
  console.log(isRaining); // ✅ true 출력 (정상 접근)
}

console.log(isRaining); // ❌ 오류 발생: isRaining is not defined

/*
  📌 문제: 블록 스코프 내의 let 변수 접근
  
  1️⃣ let으로 선언된 변수는 블록 스코프({ })를 가짐.
     - if 문 내부에서 선언된 변수 isRaining은 해당 블록 안에서만 접근 가능.
     - 블록을 벗어나면 isRaining은 존재하지 않음 → "isRaining is not defined" 오류 발생.
  
  🚀 해결 방법: 변수를 if 문 외부에서 선언하여 스코프를 확장하기
  */

// let isRaining; // ✅ 블록 밖에서 선언 (전역 변수처럼 활용 가능)

// if (true) {
//   isRaining = true; // 블록 내부에서 값 할당
// }

// console.log(isRaining); // ✅ true 출력 (정상 접근 가능)
