// 프로그래밍 패러다임 미니퀘스트 2번
function sumArray(arr) {
  return arr.reduce((acc, curr) => acc + curr, 0);
}

const numbers = [1, 2, 3, 4, 5];
console.log(sumArray(numbers));
