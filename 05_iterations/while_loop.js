/*
let index = 0;
while (condition) {
  

  index++;
}

*/

let i = 0;
while(i <= 30){
  console.log(`value of i is ${i}`);
  i = i + 3;

}

/*

  you can also use i++ to increment and i-- to decrement
  i-- and i== only works when you want to move by only one value 
  if you want to move the more tha n one value then tou have to define it
  as shown in above loop


 */


let myArray =["flash", "batman", "superman"];

let arr = 0;

while (arr < myArray.length){
  console.log(`hero is ${myArray[arr]}`);
  arr++;
}

/*

do {
  
} while (condition);

*/

/*

in 'do-while' loop the code block will be executed first 
and than the condition will checked 


where in 'for' and 'while' loops 1st condition gets checked 
and then code block gets executed

*/

let score = 1;
do {
  console.log(`socre is : ${score}`);
  score++;
} while (score < 11);

// in below example you can see the specialness of the do-while loop
let scoreV2 = 11;
do {
  console.log(`socre is : ${scoreV2}`);
  scoreV2++;
} while (scoreV2 < 11);









































