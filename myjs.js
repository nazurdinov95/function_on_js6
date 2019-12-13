// first
const summar = [1, 2, 5, 2];

const numberSum =(arr) => {
  let arrSum = 0;
  for (let i = 0; i < arr.length; ++i) {
    arrSum += arr[i];
  }
  console.log(numberSum(summar));
};
//second
const arr = [1, 2, 3, 4, 5];

const result = arr.reduce(function(sum, current) {
  return sum + current;
}, 0);
console.log( result );

//third
const array1 = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;
console.log(array1.reduce(reducer));

//fourth
let numbers =[1, 2, 3, 4, 5];

let sum =0;

numbers.forEach((num) => sum += num);

console.log(sum);