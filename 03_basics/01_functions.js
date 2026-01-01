// if someone says to write name in spacific formate 100 times 
// then doing this 100 times

// console.log("c");
// console.log("o");
// console.log("c");
// console.log("o");

// is not good practice 
// we can create a function and do this same thing in just word (name of the function) 

function sayMyName (){
  console.log("c");
  console.log("o");
  console.log("c");
  console.log("o");
}

// sayMyName();


function add2Numbers (number1,number2) {
  console.log(number1+ number2)
}

add2Numbers(2,3);// 5
add2Numbers('2',3); // 23
add2Numbers("a",3); // a3
add2Numbers(2, null); // 2

let result = add2Numbers(2,3);
// console.log(`result: ${result}`);

// in "result" we are getting undefined 
// because we are not returning any thingin function
//--------------------------------------------------------
// we are not focuing on logic right now 
//we are focusing on function

// <namings>

// function myFunction (<parameters>){

// }

// myFunction(<arguments>)
//--------------------------------------------------------

function add2NumbersV2 (number1,number2) {
  // let number3 = number1 + number2;
  // return number3;
  return number1 + number2;
  console.log(number3);
  // once js gets return statement in function it stops execution of the code 
  // so 'console.log(number3);' will ne=ver get executed
  //  because it is unreachable code
}
result = add2NumbersV2(2,3);
// console.log(`result: ${result}`);
// now we are getting the value in "result" 
// because we are returning the value

function loginUserMessage(username){
  return `${username} just logged in`;
}

// console.log(loginUserMessage("COCO"));
// COCO just logged in
// console.log(loginUserMessage(""));
//  just logged in
// console.log(loginUserMessage());
// undefined just logged in

function loginUserMessageV2(username){
  if(username === undefined){
    console.log("please enter a user name");
    return
  }
  return `${username} just logged in`;
}
// console.log(loginUserMessageV2("COCO"));
// COCO just logged in
// console.log(loginUserMessageV2(""));
//  just logged in
// console.log(loginUserMessageV2());
// please enter a user name
// undefined

// we can avoid this last problem which is empty arguments 
// by assigning the default values to parameter

function loginUserMessageV3(username ="user"){
  if(username === undefined){
    console.log("please enter a user name");
    return
  }
  return `${username} just logged in`;
}
// console.log(loginUserMessageV3("COCO"));
// COCO just logged in
// console.log(loginUserMessageV3(""));
//  just logged in
// console.log(loginUserMessageV3());
// user just logged in

// really good queation----------------------------------------
// shoing cart price does not have fix number of object 
// so how to find the total

function calculateCartPrice(num1){
  return num1;
}

// console.log(calculateCartPrice(2))// 2
// works fine
// console.log(calculateCartPrice(2,20,45,56,235,6788))
// will not work because we have only one parameter
// so we have to use the "rest" operator

function calculateCartPriceV2(...num1){
  return num1;
}

console.log(calculateCartPriceV2(2))
//  2 ]
console.log(calculateCartPriceV2(2,20,45,56,235,6788))
// [ 2, 20, 45, 56, 235, 6788 ]

//playing with objects ------------------------------------------
user = {
  name : "coco",
  email : "coco@gmail.com",
  isAlive : "not alive"
}

function handleObject(anyUser){
  console.log(`username is ${anyUser.name} and he is ${anyUser.isAlive}`)
}

handleObject(user);

handleObject({  
  name : "riven",
  isAlive : "alive",
})

// playing with array--------------------------------------------

const myNewArray = [10,100,20,300,40,50,200];

function return2ndValue(getArray){
  return getArray[1];
}

console.log(return2ndValue(myNewArray));
console.log(return2ndValue([12,32,5,4,6756,34,231,34,2354,6,5,666]))































