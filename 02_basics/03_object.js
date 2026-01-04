// singleton

//object literal syntax
const user = {
  name: "shown",
  age: 30,
  isAdmin: true, 
  location: "USA",
  lastLoginDays :["Monday", "Wednesday", "Friday"]
};
console.log(user);
console.log(user.name); // shown
console.log(user["name"]); // shown
console.log(user.age); // 30
console.log(user["age"]); // 30

// if you write key of the key-value pair in quotes,
// you must use bracket notation to access its value
const user1 = {
  "name": "shown",
  age: 30,
  isAdmin: true, 
  location: "USA",
  lastLoginDays :["Monday", "Wednesday", "Friday"]
};
console.log(user1.name); 
console.log(user1["name"]); 

// INTERVIEW QURATION 
const mySym = Symbol("key1");
const user2 = {
  name: "shown",
  age: 30,
  isAdmin: true, 
  location: "USA",
  lastLoginDays :["Monday", "Wednesday", "Friday"],
  [mySym] : "value1",
  mySym: "value2"
};
console.log(user2.mySym); // value2
console.log(user2[mySym]); // value1
console.log(typeof mySym); // symbol

// [{KEY_SYMBOL}] : "value" "syntex"  just follow that <ALLOCATION>
// {OBJECT_NAME}[{KEY_SYMBOL}] <ACCESS>

user2.mySym = "hellow"; // changing value
console.log(user2)

Object.freeze(user2)

user2.mySym = "bye"; // changing value again
console.log(user2) // change will not propogate because user2 is freezed

user2.greeting = function(){
  console.log(`hellow ${this.name}`)
}

console.log(user2.greeting()); 


// alway try to use with (.) if possible 
// if you have to use another method there is no other way 
// then you cna use [KEY_NAME] method to access the value form ther object 















































