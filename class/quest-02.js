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

// 정사각형 클래스 (Square) - Rectangle 확장
class Square extends Rectangle {
  constructor(side) {
    super(side, side);
  }

  isSquare() {
    return this.width === this.height;
  }
}

const square = new Square(10);
console.log(`면적: ${square.area()}`); // 면적: 100
console.log(`둘레: ${square.perimeter()}`); // 둘레: 40
console.log(`정사각형인가요? ${square.isSquare()}`); // true

const rect = new Rectangle(10, 5);
console.log(`정사각형인가요? ${rect.width === rect.height}`); // false
