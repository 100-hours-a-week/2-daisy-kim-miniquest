// 함수형 패러다임 미니퀘스트 2번
const sumArray = (arr) => {
  let sum = 0;
  for (let num of arr) {
    sum += num;
  }
  return sum;
};

const total = sumArray([1, 2, 3, 4, 5]);
console.log(total);
