const myNums = [1,2,3,4];

// (basic function)
const myTotal = myNums.reduce(function (accumilator , currentValue) {
  console.log(`accumilator ${accumilator} and current value ${currentValue}`);
  console.log();
  return accumilator + currentValue;
},0)

console.log(myTotal);
console.log();

// (arrowFunction)
const myTotalV2 = myNums.reduce((acc,cur) => acc + cur,0);

console.log(myTotalV2);
console.log();
/*

array.reduce((accumulator, currentValue) => {
  return newAccumulator;
}, initialValue);

1st accumilator's value will be 'initialValue'
after that 'accumulator + currentValue'

accumulator	currentValue	accumulator + currentValue
0	          1	            1
1	          2	            3
3	          3	            6
6	          4	            10

*/

// same implementation with for-each loop
let myTotalV3 = 0;
myNums.forEach((num) => {
  return myTotalV3 = myTotalV3+ num;
})

console.log(myTotalV3);
console.log();

// example 
const shoppingCart = [
  {
    itemName : "js courese",
    price: 2999
  },
  {
    itemName : "py courese",
    price: 999
  },
  {
    itemName : "flutter courese",
    price: 3999
  },
  {
    itemName : "web-dev courese",
    price: 1999
  },
  {
    itemName : "ai/ml courese",
    price: 5999
  },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price,0);
console.log(priceToPay);
console.log();























