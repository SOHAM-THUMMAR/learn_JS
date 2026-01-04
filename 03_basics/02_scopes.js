// all the variable are defined in global scope
let a = 10;
var b = 20; 
const c = 30;
console.log(a);
console.log(b);
console.log(c);

/*

if () {} <= block scope

// while (){}<= block scope

// for(){}<= block scope

let user = {} <= Object

*/ 

// all the variable are defined in block scope
if(true){
  let a = 10;
  var b = 20; 
  const c = 30;
}
// console.log(a);// will give ERROR
console.log(b);
// console.log(c);// will give ERROR

/*

here "b" will create problem 
think like you are using 'var i' in 4 different loops then 
all the loop's "i" variable will comman 
and it loop1's i will be used in loop2's and others too 
so loops will not give the requaired and desired output 
which creates problem and thats why we don't use the "var" keyword to defined any variable
and problems of "var" keyword is not like it will stay only that particular file 
it will create problem in all those file too where this "var" keyword file is imported


the variables declared in global scope can be accessed in block scope 
but variacles declared in block scope should not be accessed out side of the block scope

*/

let a1 = 300;

if(true){
  let a1 = 3;
  console.log(`inner a1 :${a1}`);
}
/*

here both a1 has different values 
and both values are indepandent from each other
console.log(`outer a1: ${a1}`);

*/

//============================================================
function one (){
  const username = "coco";
  function two(){
    const website = "youtube";
    console.log(username);
  }
  // console.log(website);// can not access "website" => ERROR
  two();
}
one();

/*

think like 'function one' is father and 'function two' as son 
here son can snatch from father 
but father cannot snatch from the son 

'function two' can take value of username from 'function one'
but 'function one' cannot take value of website from 'function two' 
because we are trying access the website outside of its scope 
which we can not do that why we are gettig error

child function can access the variables of the parent function


*/

// -----------------------------------------------------------

// same thing can be applied in if statements too
if(true){
  const username = "coco";
  if(username === "coco"){
    const website = "youtube ";
    console.log(website + username);
  }
  // console.log(website); //<= will give ERROR
}
console.log(username);

//============================================================

// intresting+++++++++++++++++++++++++++++++++++++++++++++++++

// (basic function)

function addOne(num){
  return num + 1
}
console.log (addOne(5));

// (function also known as expresion)
const addTwo = function(num){
  return num + 2;
}
console.log(addTwo(5));
// there are 2 way to declare the function

// intresting+++++++++++++++++++++++++++++++++++++++++++++++++

console.log (addOne(5));
function addOne(num){
  return num + 1
}
// basic function can be executed normally 
// it does not haveany problem


console.log(addTwoV2(5));
const addTwoV2 = function(num){
  return num + 2;
}
/* 
this will give erro because we assinged the function to a variable 
and we are trying to access the variable before its initialization 
And that is the error
*/

//==================================
// this error is specially depends on the way of defining the function 
// we can avoid it easily
//==================================






































