'use strict';

function solveEquation(a, b, c) {
  const roots = [];
  const discriminant = b ** 2 - 4 * a * c;

  if (discriminant === 0) {
    roots.push(-b / (2 * a));
  } else if (discriminant > 0) {
    roots.push((-b + Math.sqrt(discriminant)) / (2 * a), (-b - Math.sqrt(discriminant)) / (2 * a));
  }

  return roots;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  const monthlyInterest = percent / 100 / 12;
  const remainingAmount = amount - contribution;
  const monthlyPayment = remainingAmount * (monthlyInterest + (monthlyInterest / (((1 + monthlyInterest) ** countMonths) - 1)));
  return parseFloat((monthlyPayment * countMonths).toFixed(2));
}