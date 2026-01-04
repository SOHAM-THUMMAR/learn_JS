let Arr1 = [1, 2, 3, 4, 5];
const Arr2 = [6, 7, 8, 9, 10];

Arr1.push(Arr2); // adds Arr2 as a single element
console.log(Arr1); // [1, 2, 3, 4, 5, [6, 7, 8, 9, 10]]
console.log(Arr1[5][2]); // 8

Arr1 = [1, 2, 3, 4, 5]; // reset Arr1
Arr3 = Arr1.concat(Arr2); // merges Arr1 and Arr2
console.log(Arr3); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// concat creates has limitation in merging arrays
// limitation: concat does not work deeply for nested arrays


const all = [...Arr1, ...Arr2]; // spread operator to merge arrays
console.log(all); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] 
// works deeply for nested arrays and other iterables too
// new and cleaner syntax and better performance

const Arr69 = [1, 2, 3, 4, 5,[1,4,6,[7,8,9]],[5,7,6]];

const flatArr = Arr69.flat(2); // flattens array up to depth 2
console.log(flatArr); // [1, 2, 3, 4, 5, 1, 4, 6, 7, 8, 9, 5, 7, 6]
// useful for nested arrays 
// depth parameter specifies how deep to flatten
// default is 1
// can be Infinity to flatten all levels

console.log(Array.isArray(Arr1)); // true
// checks if variable is an array


const yourArr = Array.of(11, 12, 13, 14, 15);
console.log(yourArr); // [11, 12, 13, 14, 15]
// creates array from given elements

const theirArr = Array.from("hello");
console.log(theirArr); // ['h', 'e', 'l', 'l', 'o']
// creates array from iterable or array-like object


console.log(Array.from({name: "John"})); // []
// interview question
// creates array from array-like object
// but object has no indexed elements or length property
// so results in empty array

let score1 = 100;
let score2 = 200;
let score3 = 300;

const scoresArr = Array.of(score1, score2, score3);
console.log(scoresArr); // [100, 200, 300]
// creates array from variables













































