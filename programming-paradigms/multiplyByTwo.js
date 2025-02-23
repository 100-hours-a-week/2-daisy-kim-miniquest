// 프로그래밍 패러다임 미니퀘스트 1번
function multiplyByTwo(arr) {
  return arr.map((num) => num * 2);
}

const numbers = [1, 2, 3, 4, 5];
const doubleNumbers = multiplyByTwo(numbers);

console.log(doubleNumbers);
