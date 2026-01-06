/*

for (let index = 0; index < array.length; index++){
  const element = array[index];
}

*/

for (let index = 0; index < 10; index++){
  const element = index;
  console.log(element);
}

/*

-> 1st 'index' will be initialized a
-> 2nd 'index' will be checked in condition and then
   it will execute the code block of the loop with the "index's" value then after that 
-> 3rd 'index' gets increment and then flows again goes to thre condition 
if the condition is true then again code bolck otherwice out of the loop

 */


for( let i = 0; i <= 10 ; i++){
  const element = i;
  console.log(element);
  if (element == 7){
    console.log("is the best number");
  }
}

// as you can see we can put conditional statements in code block of for loop

//nested for loop
for (let i = 1; i <= 10; i++) {
  // console.log(`outert loop value: ${i}`);
  for(let j = 1;j <= 10; j++){ //<= we can take 'i' but we should not take that because scope spling 
  // console.log(`inner loop value: ${j} and outer loop${i}`);
  console.log(` ${i} X ${j} = ${i*j}`);
  }
  console.log()
}

let myArray = ["flash","batman","superman"];
console.log(myArray.length)
for (let index = 0; index <= myArray.length; index++) {
  //'index++' is very very importent id you forget that then loop will run 'infinite time'
  //if the 'condition' is also difined in a way that it always gives 'true' value than also loop will run 'infinitly'
  // keep this in mind :)
  const element = myArray[index];
  console.log(element)
  
}

/*

java script does not have array out of bound exception
so at the place of ERROR it gives 'undefined'

so keep in mind that it should never apper in your output ;)

*/

// 'break' and 'continue'keyword

for (let index = 1; index < 21; index++) {
  if(index == 7){
    console.log(`7 is detected`);
    break
  }
  console.log(`values of ${index}`);
}
/*

'break' is used when the data is too long but you only want something in between 
and ater we got that data
we all can understand that we do not need to run the loop 
because there is no point to run the loop till the end 
so we can get out of the loop with the help of "break" keyword

*/


for (let index = 1; index < 21; index++) {
  if(index == 7){
    console.log(`7 is detected`);
    continue
  }
  console.log(`values of ${index}`);
}

/*

'continue' is used to skip that particular element or data 
and continue with the flow of the data

kind of hiding the error in the flow 
like taping the teared page to keep the page intact in its original shape

*/










































