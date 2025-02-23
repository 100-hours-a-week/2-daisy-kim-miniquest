const color = "blue"; // 전역 변수 color 선언

const firstLevel = () => {
  let color = "red"; // firstLevel 함수의 지역 변수 color 선언

  const secondLevel = () => {
    let color = "green"; // secondLevel 함수의 지역 변수 color 선언
    console.log(color); // (1) 'green' 출력 (자신의 스코프 내 color 사용)
  };

  secondLevel();
  console.log(color); // (2) 'red' 출력 (firstLevel 스코프의 color 사용)
};

firstLevel();
console.log(color); // (3) 'blue' 출력 (전역 스코프의 color 사용)
