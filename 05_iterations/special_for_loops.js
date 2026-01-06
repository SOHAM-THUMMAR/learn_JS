// array specific loops

arr1 = [1,2,3,4,5]
for (const num of arr1) {
  console.log(num);
}

const greetings = "Hellow!";
for (const greet of greetings) {
  console.log(greet);
}

// Maps => same as array
/*

map ia an object holds key-value pair 
and remembers the original insertion order of the keys 
any values (both object and premitive values) may be used as either a key or a value
it does not have duplicate values
it only hold unique values

*/
const map = new Map();
map.set("IN","India");
map.set("USA","United States of America");
map.set("RUS","Russia");
map.set("IN","India");

//here we entered india 2 times but 
// if you see the output then it has only 3 values 
// there is no duplication

console.log(map);

for (const data of map) {
  console.log(data);// <= array
}

for (const [key, value]/*<= destructured*/ of map) {
  console.log(`${key} :- ${value}`);
}

const myObj = {
  "Game1" : "NFS",
  "Game2" : "Spyder-Man",
}

// for (const [key,value] of myObj) {
//   console.log(`${key} :- ${value}`);
// }

/*

for-of loop does not work on object 
it will give ERROR the object is not iteratable
for-of loop deos not work on objects

*/
























