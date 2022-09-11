const add = function(a,b) {
  return a+b;
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(array1) {
      let total = 0;
      getSum = (value, total) => total += value;
      return array1.reduce(getSum, 0);
};

const multiply = function(array) {
  let sum = 1;
  for (let i = 0; i < array.length; i++) {
      sum = sum * array[i];
  } 
  return sum;
}

const power = function(num, power) {
  let sum = 1;
  for (let i = 0; i < power; i++) {
      sum = sum * num;
  } 
  return sum;
};

const factorial = function(num) {
	let array = [];
  let sum = 1;
  for (num; num >= 1; num--){
    array.push(`${num}`);
  }
  for (let i = array.length-1; i >= 0; i--) {
      sum = sum * array[i];
      console.log(sum);
  } 
  return sum;
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
