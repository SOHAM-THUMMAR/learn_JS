/* 

WE HAD A PROBLEM IN FOR-EACH LOOP THAT IT DOES NOT RETURN ANY VALUE 
//to solve that we have some property

const values = myCoding.forEach((item) => {
  return item;
});

console.log(values);// undefined

// as you can see that for-each has call back funtion 
// but it does not return any values
*/

const myNums = [1,2,3,4,5,6,7,8,9,0];

const newNums = myNums.filter((num) => num > 4);// implesite return
console.log(newNums);

// another way to write the function in filter
const newNumsV2 = myNums.filter((num) => {// <= here we started scope 
// and if we start the scope then we have to return the value 
  return num > 4;//<= thats why
})
console.log(newNumsV2);

// as you can see that filter is returning the value 
// and it is the solving the problem which we had in for-each loop


// same filter operation with the for-each loop
const nums = [];
myNums.forEach((num) => {
  if (num > 4){
    nums.push(num);
  }
})
console.log(nums);





















