// 모듈 시스템 미니퀘스트 2번
import { add, subtract } from "./operations.js";
import User from "./userProfile.js";

const result1 = add(5, 3);
const result2 = subtract(10, 4);

console.log(`5 + 3 = ${result1}`);
console.log(`10 - 4 = ${result2}`);

const user = new User("Jane Doe", 25);
console.log(user.introduce());
