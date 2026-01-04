const userName = "Luminous";//fatched from the database
// if string is empty then else block will be executed 

if(userName){//<= here we assumed that there will be some value 
  console.log(`hellow ${userName} !`)
}
else{
  console.log("username not found");
}

// if the userEmail = [] then it consider it as true value
const userEmail = [];
if (userEmail.length === 0){
  console.log(`array is empty`);
  console.log(`user email not found`);
}

// if the userData = {} then it consider it as true value
const userData = {}
if (Object.keys(userData).length === 0){
  console.log(`object is empty`);
  console.log(`user data not found`);
}

/*


// falsy values

false ,
0 ,
-0 <interview>, 
BigInt 0n,
"",
null,
undefined,
NaN


// thuthy values 

// see falsy values other then that are considered as truthy values
"0","false"," " // any thing in string is considared as truthy value
[],{},
functhin(){} <empty function>



*/

/*

REMEMBER

false == 0 
=> true

false == ""
=> ture

0 == ""
=> true


*/


// Nullish Coalescing Operator (??): null undefined

let val1;

val1 = 5 ?? 10;
console.log(val1);//5

val1 = null ?? 10;
console.log(val1);//10

val1 = undefined ?? 15;
console.log(val1);//15

val1 = null ?? 10 ?? 15;
console.log(val1); //10

// "??" asigns the 1st real value which appears to it
// "??" this is used in data base operation for null sefty

// "??" and turnary operator (?) is completely different from each other

// turnary operator 

// condition ? true : false

const iceTeaPrice = 100;
iceTeaPrice >= 80 ? console.log("higher than 80") : console.log("lower  than 80");




































