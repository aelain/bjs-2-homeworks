function parseCount(number) {
  const conversionInNumber = parseFloat(number);
  if (Number.isNaN(conversionInNumber)) {
    throw new Error('Невалидное значение');
  }
  return conversionInNumber;
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

    if (sideA + sideB < sideC || sideB + sideC < sideA || sideA + sideC < sideB) {
      throw new Error('Треугольник с такими сторонами не существует');
    }
  }

  get perimeter() {
    return this.sideA + this.sideB + this.sideC;
  }

  get area() {
    const halfPerimeter = this.perimeter / 2;
    return parseFloat(Math.sqrt(halfPerimeter * (halfPerimeter - this.sideA) * (halfPerimeter - this.sideB) * (halfPerimeter - this.sideC)).toFixed(3));
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