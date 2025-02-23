// 자바스크립트 객체 미니퀘스트 2번
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(
      `Hello, my name is ${this.name} and I am ${this.age} years old.`
    );
  }
}

const person = new Person("Jane Doe", 25);
person.greet();
