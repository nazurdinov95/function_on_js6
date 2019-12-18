// first

const arr = [1, 2, 3, 4, 5];

const result = arr.reduce(function(sum, current) {
  return sum + current;
}, 0);
console.log( result );

//second
const array1 = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;
console.log(array1.reduce(reducer));

//third
let numbers =[1, 2, 3, 4, 5];

let sum =0;

numbers.forEach((num) => sum += num);

console.log(sum);
