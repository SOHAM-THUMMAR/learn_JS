const numbers = [10, 20, 30, 40, 50];

// Accessing elements
console.log(numbers[0]); // 10
console.log(numbers[2]); // 30

// Modifying elements
numbers[1] = 25;
console.log(numbers); // [10, 25, 30, 40, 50]

const fruits = ['apple', 'banana', 'cherry'];

const myArr = new Array(1, 2, 3, 4, 5);

// array methods

myArr.push(6); // adds 6 at the end
console.log(myArr); // [1, 2, 3, 4, 5, 6]
myArr.pop();
console.log(myArr); // [1, 2, 3, 4, 5, ]

myArr.unshift(0); // adds 0 at the beginning
console.log(myArr); // [0, 1, 2, 3, 4, 5]
myArr.shift(); // removes first element
console.log(myArr); // [1, 2, 3, 4, 5]

console.log(myArr.includes(3)); // true
console.log(myArr.indexOf(4)); // 3
console.log(myArr.indexOf(10)); // -1 (not found)

const superArr = myArr.join(); // "1,2,3,4,5" array to string
console.log(superArr);


console.log("A", myArr);

const slicedArr = myArr.slice(1, 4);
console.log("Sliced", slicedArr); // [2, 3, 4]
console.log("B", myArr); // [1, 2, 3, 4, 5] (original array unchanged)

const splicedArr = myArr.splice(1, 2); // removes 2 elements from index 1
console.log("Spliced", splicedArr); // [2, 3]
console.log("C", myArr); // [1, 4, 5] (original array modified)





















































