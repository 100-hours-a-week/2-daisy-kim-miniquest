// ✅ 1. let을 사용한 변수 재할당
let temperature = 25; // 초기 값 할당
temperature = 30; // 값 변경 가능
console.log(temperature); // 30 출력 (정상 작동)

// ✅ 2. const를 사용한 변수 재할당 시도
const MAX_TEMPERATURE = 35; // 초기 값 할당
MAX_TEMPERATURE = 40; // 오류 발생: Assignment to constant variable
console.log(MAX_TEMPERATURE);

/*
📌 let vs const의 재할당 차이점

1️⃣ let → 재할당 가능
   - let으로 선언된 변수는 값을 변경할 수 있음.
   - temperature = 30; 처럼 새로운 값을 할당하는 것이 가능.

2️⃣ const → 재할당 불가능
   - const로 선언된 변수는 초기 값이 변경될 수 없음.
   - MAX_TEMPERATURE = 40; 을 시도하면 "Assignment to constant variable" 오류 발생.

🚨 주의: const로 객체나 배열을 선언하면 내부 값 수정은 가능하지만,
         변수 자체를 다른 값으로 재할당하는 것은 불가능.
*/
