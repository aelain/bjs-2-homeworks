function getArrayParams(...array) {
  const sum = array.reduce((currentSum, currentValue) => currentSum + currentValue, 0);
  const min = Math.min(...array);
  const max = Math.max(...array);
  return {
    min, 
    max, 
    avg: parseFloat((sum / array.length).toFixed(2))
  };
}

function summElementsWorker(...array) {
  return array.reduce((currentSum, currentValue) => currentSum + currentValue, 0);
}

function differenceMaxMinWorker(...array) {
  if (!array.length) {
    return 0;
  } else {
    return Math.max(...array) - Math.min(...array);
  }
}

function differenceEvenOddWorker(...array) {
  let sumEvenElement = 0;
  let sumOddElement = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2) {
      sumOddElement += array[i];
    } else {
      sumEvenElement += array[i];
    }
  }

  return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...array) {
  if (!array.length) {
    return 0;
  }

  let sumEvenElement = 0;
  let countEvenElement = 0;

  for (let i = 0; i < array.length; i++) {
    if (!(array[i] % 2)) {
      sumEvenElement += array[i];
      countEvenElement++;
    }
  }

  return sumEvenElement / countEvenElement;
}

function makeWork (arrOfArr, func) {
  let maxWorkerResult = func(...arrOfArr[0]);

  for (let i = 0; i < arrOfArr.length; i++) {
    const currentResult = func(...arrOfArr[i]);
    if (currentResult > maxWorkerResult) {
      maxWorkerResult = currentResult;
    }
  }

  return maxWorkerResult;
}