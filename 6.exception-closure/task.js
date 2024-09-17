function parseCount(number) {
  if (Number.isNaN(parseFloat(number))) {
    throw new Error('Невалидное значение');
  }
  return parseFloat(number);
}

function validateCount(number) {
  try {
    return parseCount(number);
  } catch (error) {
    return error;
  }
}

class Triangle {
  constructor(sideA, sideB, sideC) {
    this.sideA = sideA;
    this.sideB = sideB;
    this.sideC = sideC;

    if (this.sideA + this.sideB < this.sideC || this.sideB + this.sideC < this.sideA || this.sideA + this.sideC < this.sideB) {
      throw new Error('Треугольник с такими сторонами не существует');
    }
  }

  get perimeter() {
    return this.sideA + this.sideB + this.sideC;
  }

  get area() {
    return parseFloat(Math.sqrt(this.perimeter / 2 * (this.perimeter / 2 - this.sideA) * (this.perimeter / 2 - this.sideB) * (this.perimeter / 2 - this.sideC)).toFixed(3));
  }
}

function getTriangle(sideA, sideB, sideC) {
  try {
    return new Triangle(sideA, sideB, sideC);
  } catch (error) {
    return { 
      get perimeter() {
        return 'Ошибка! Треугольник не существует';
      },

      get area() {
        return 'Ошибка! Треугольник не существует';
      }
    };
  }
}