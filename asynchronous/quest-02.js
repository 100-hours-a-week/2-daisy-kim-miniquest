// 자바스크립트의 비동기 처리 미니퀘스트 2번
async function waitForMessage() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Hello, Async/Await!");
    }, 1000);
  });
}

async function displayMessage() {
  const message = await waitForMessage();
  console.log(message);
}

displayMessage();
