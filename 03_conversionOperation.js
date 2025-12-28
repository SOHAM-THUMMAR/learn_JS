let score = "33";

console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score);
console.log(valueInNumber);
console.log(typeof valueInNumber);

// NaN - Not a Number
//"33" => 33
//"33abc" => NaN
//true => 1
//false => 0
//null => 0
//undefined => NaN

let isLoggedIn = 1;

let booleanIsLoggedIn = Boolean(isLoggedIn); 
console.log(booleanIsLoggedIn);
console.log(typeof booleanIsLoggedIn);

isLoggedIn = "hello";

booleanIsLoggedIn = Boolean(isLoggedIn); 
console.log(booleanIsLoggedIn);
console.log(typeof booleanIsLoggedIn);

// 1 => true
// 0 => false
// "hello" => true
// "" => false
// null => false
// undefined => false


let someNumber = 33;

let stringNumber = String(someNumber);
console.log(stringNumber);
console.log(typeof stringNumber);

// 33 => "33"
// true => "true"
// false => "false"
// null => "null"
// undefined => "undefined"