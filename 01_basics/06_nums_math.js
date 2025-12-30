// const score = 100;
// const balance = new Number(5000);// you can also define a data type like this 

// console.log(score)
// console.log(balance);

// console.log(balance.toString().length); // "5000".log(typeof balance); // "object"
// console.log(balance.toFixed (2)); // "5000.00"


// const otherNumber = 123.4567;
// console.log(otherNumber.toFixed(3)); // "123.457"
// console.log(otherNumber.toPrecision(4)); // "123.5"


// const accountBalance = 10000000000;
// console.log(accountBalance.toLocaleString('en-IN')); 
// "10,00,00,00,000" (INDIAN NUMBERING FORMAT)

// ==================================== maths ===========================================

// console.log(Math);

// console.log(Math.abs(-500)); // 500
// console.log(Math.round(4.6)); // 5
// console.log(Math.floor(4.9)); // 4
// console.log(Math.ceil(4.1)); // 5
// console.log(Math.min(1, 5, -2, 0)); // -2
// console.log(Math.max(1, 5, -2, 0)); // 5
// console.log(Math.pow(2, 3)); // 8
// console.log(Math.sqrt(16)); // 4
console.log(Math.random()); // random number between 0 and 1
console.log((Math.random() * 10)+1); 
console.log(Math.floor(Math.random() * 10) + 1); // random number between 1 and 10

const min = 1;
const max = 100;
const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(randomNum); // random number between 1 and 100

console.log(Math.random() * (max - min + 1) + min);
console.log(Math.floor(Math.random() * (max - min + 1) + min));
// random number between 1 and 100
//(max - min + 1) + min) is done to include the max value in the range
//Math.floor(Math.random() * (max - min + 1) + min) is done to get an integer value




