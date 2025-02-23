class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  area() {
    return this.width * this.height;
  }

  perimeter() {
    return 2 * (this.width + this.height);
  }
}

const rect = new Rectangle(10, 5);

console.log(`면적: ${rect.area()}`); // 면적: 50
console.log(`둘레: ${rect.perimeter()}`); // 둘레: 30
