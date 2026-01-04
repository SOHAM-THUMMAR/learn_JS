// if

const isLoggedIn = true;

if (isLoggedIn){

}

// <,>,<=,>=, ==, !=, 
// ===,!==    {these tow also checks datatype}

// java script has this problem

if (2 == "2"){
  console.log("executed");
}
// and thats why we needed "===" <struict equal> to check the value and the datatype
// if you want to do inverse of that then there is "!=="

let temperature = 29;

if(temperature < 30){
  console.log("temperature is below 30");//either tis will get  executed
}
else{
  console.log("temperature is above 30");// or this will be executed
}
console.log("hellow");// this will always get executed


const score = 200;//<=outer scope
// "var" has the completely global scope 
// and it can be accessed any where outer as wall as inner scope
if (score > 100){
  const power = "fly";//<= inner scope
  console.log(`power : ${power}`);
}
// console.log(`power : ${power}`); //<= ERROR
// // not defined in global scope that why we will get error


//=======================================================================
// short hand notation

const balance = 1000;

if(balance > 500) console.log("true");//<= we did not used scope here 
/*

actually we have scope there and that is known as implicit scope
this shourt hand notation gets executed in one line only 
and it requaired {;} at the end of it


*/

// we can put multiple lines here to execute together by placing (,) between the lines
if(balance > 500) console.log("true"), console.log('balance is higher than 500');

//=======================================================================

if (balance < 500){
  console.log("less than 500");
}else if(balance < 750){
  console.log("less than 750");
} else if (balance < 900){
  console.log("less than 900");
} else {
  console.log("less than 1200")
}

//=================================================================================
const loggedIn = true;
const debitCard = true;
const loggeedInFromGoogle = false;
const loggeedInFromEmail = true;

if (loggedIn && debitCard){//<= both must be true 
  console.log("allowed to buy the courses");
} 

if (loggeedInFromEmail || loggeedInFromGoogle){//any one must be true 
  console.log("user logged in")
}
// we can check more then 2 condition by this way 
//=================================================================================

// turnary operator 
// condition ? true : false

const iceTeaPrice = 100;
iceTeaPrice >= 80 ? console.log("higher than 80") : console.log("lower  than 80");





































