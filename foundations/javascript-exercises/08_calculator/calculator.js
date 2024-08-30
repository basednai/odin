const add = function (...arr) {
  const sum = arr.reduce((sum, value) => sum + value)
  return sum;
};

const subtract = function (...arr) {
  const difference = arr.reduce((diff, value) => diff - value)
  return difference;
};

const sum = function (arr) {
  const sum = arr.reduce((sum, value) => sum + value, 0)
  return sum;
};

const multiply = function (arr) {
  const product = arr.reduce((product, value) => product * value)
  return product;
};


const power = function (num, power) {
  return num ** power
};

const factorial = function (num) {
  if (num == 0) return 1;
  const arr = [...Array(num).keys()].map((val) => val + 1)
  return multiply(arr)
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
