// immediately invoked function expression
// {basic function}
(function oi(){
  // named IIFE
  console.log("oi");
})(); //<= this (;) is really importent in this function to stop the IIFE

//(dunction define)()<= execution call
// (interview queation "why we use IIFE ?")
// the pollutions og the global scope can create problen in function 
// to prevent that we are using IIFE

// {arrow function}
( () => {
  // un-named IIFE
  console.log(`oi oi`);
})();

//parameterized arrow
( (word) => {
  console.log(`oi ${word}`);
})("hellow");




