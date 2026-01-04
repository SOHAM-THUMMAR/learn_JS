let score = "33";

console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score);
console.log(valueInNumber);
console.log(typeof valueInNumber);
/*

NaN - Not a Number
"33" => 33
"33abc" => NaN
true => 1
false => 0
null => 0
undefined => NaN

*/


let isLoggedIn = 1;

let booleanIsLoggedIn = Boolean(isLoggedIn); 
console.log(booleanIsLoggedIn);
console.log(typeof booleanIsLoggedIn);

isLoggedIn = "hello";

booleanIsLoggedIn = Boolean(isLoggedIn); 
console.log(booleanIsLoggedIn);
console.log(typeof booleanIsLoggedIn);

/*

1 => true
0 => false
"hello" => true
"" => false
null => false
undefined => false

*/



let someNumber = 33;

let stringNumber = String(someNumber);
console.log(stringNumber);
console.log(typeof stringNumber);

/*

33 => "33"
true => "true"
false => "false"
null => "null"
undefined => "undefined"

*/


//============================ Operations =============================

let val1 = "33";
let negVal1 = -val1;
console.log(val1)
console.log(negVal1);


// some time wasting in + operation
console.log(2+2); //add
console.log(2-2); //subtract
console.log(2*2); //multiply
console.log(2/2); //divide
console.log(2**2); //power
console.log(2%2); //modulo()


//concatenation
let str1 = "Hello ";
let str2 = "World";

let fullStr = str1 + str2;
console.log(fullStr);

console.log("1" + 2); // "12"
console.log(1 + "2"); // "12"
console.log("1" + 2 + 2); // "122" => STRING(1) + NUMBER(2) = STRING(12) + NUMBER(2) = STRING(122)
console.log(1 + 2 + "2"); // "32" => NUMBER(1) + NUMBER(2) = NUMBER(3) + STRING(2) = STRING(32)
console.log("1"+"2")// "12"

// WORST WAY TO WRITE CODE
//console.log(3+3-4-67/1*3**3);

// WRITE LIKE THIS INSTEAD
//console.log((3+(3-4)-(67/1)*3)**3);

console.log(3+true) // 4 => 3 + 1 => true is converted to 1
console.log(+true) // +true is converting true to intreger 1
console.log(+false) // +false is converting false to intreger 0

console.log(typeof (+"")); // 0 => "" is converted to 0

// worst way to declare multiple variables
let num1, num2,num3;
num1 = num2 = num3 = 2+2;


let gameCount = "100";
console.log(gameCount);

//postfix increment operator
gameCount++; // first use then increment
console.log(gameCount);

//prefix increment operator
++gameCount; // increment first then use
console.log(gameCount);