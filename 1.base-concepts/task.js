'use strict';

function solveEquation(a, b, c) {
  let arr = [];
  let d = b ** 2 - 4 * a * c;

  if (d === 0) {
    arr.push(-b / (2 * a));
  } else if (d > 0) {
    arr.push((-b + Math.sqrt(d)) / (2 * a), (-b - Math.sqrt(d)) / (2 * a));
  }

  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let monthlyInterest = percent / 100 / 12;
  let remainingAmount = amount - contribution;
  let monthlyPayment = remainingAmount * (monthlyInterest + (monthlyInterest / (((1 + monthlyInterest) ** countMonths) - 1)));
  return parseFloat((monthlyPayment * countMonths).toFixed(2));
}