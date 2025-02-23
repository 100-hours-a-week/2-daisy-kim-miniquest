function createCounter() {
  // 클로저가 유지할 값
  let count = 0;

  return {
    increment: () => {
      count++;
    },

    decrement: () => {
      count--;
    },

    getCount: () => count,
  };
}

const counter = createCounter();

counter.increment();
counter.increment();
console.log(counter.getCount()); // 2

counter.decrement();
console.log(counter.getCount()); // 1
