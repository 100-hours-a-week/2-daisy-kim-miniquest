// 자바스크립트의 비동기 처리 미니퀘스트 1번
const myFirstPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Hello, Promise!");
  }, 1000);
});

myFirstPromise.then((message) => {
  console.log(message);
});
