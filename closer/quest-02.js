function messageMaker(startMessage) {
  return function makeMessage(additionalMessage) {
    return `${startMessage} ${additionalMessage}`;
  };
}

const greetMessage = messageMaker("안녕하세요,");

console.log(greetMessage("환영합니다!")); // "안녕하세요, 환영합니다!"
console.log(greetMessage("좋은 하루 되세요!")); // "안녕하세요, 좋은 하루 되세요!"
