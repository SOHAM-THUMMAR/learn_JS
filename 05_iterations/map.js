const myNum = [1,2,3,4,5,6,7,8,9,10];

// do an increment in all the elements of the array by 10
const newNums = myNum.map((num) => num+10);
console.log(newNums);
console.log();


const newNumsV2 = myNum.map((num) => {return num+10});
console.log(newNumsV2);
console.log();

// map also hads the call back function 
// and it also returns the value according to your function defination

// same implementation in for-each loop
const newNumsV3 = [];
myNum.forEach((num) => {
  return newNumsV3.push(num + 10);
})
console.log(newNumsV3);
console.log();


// CHAINING

const newNumsV4 = myNum
        .map((num) => num *10) // num(2) => num(2 + 10) = num(12)
        .map((num) => num + 1) // num(12) => num(12 + 1) = num(13)
        .filter((num) => num >= 40); // only true values will be taken
console.log(newNumsV4);
console.log();































