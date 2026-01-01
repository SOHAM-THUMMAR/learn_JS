const user = {
  username: "coco",
  email: "coco@gmail.com",
  welcomeMessage: function(){
    console.log(`${this.username} , welcome to github`);
    console.log(this);
  }
}
// "this" keyword is used to get the current context
// accessing from the existing and available scope
// inside function {} <= scope and outside function {} => scope has different current context 
// keep this in mind

// user.welcomeMessage();
// user.username = "riven";
// user.welcomeMessage();
// console.log(this);

// importent ==============================
// console.log (this);
// in global scope is different in node envirenment and browser console
// node environment => {}
// browser console => Window {0: Window, 1: Window, window: Window, self: Window, document: document, name: '', location: Location, …}
// ========================================

// function one (){
//   let username = "coco";
//   console.log(this);
// }
// one();

function oneV2 (){
  let username = "coco";
  console.log(this.username);//undefined
}
// oneV2();
// 'this' only used in object not every where

// arrow function ----------------------------------------------

//(basic function)
// function one (){
//   let username = "coco";
//   console.log(this);
// }
// one();

//(arrow function)
// const one = () => {
//   let username = "coco";
//   console.log(username);
// }
// one()

// const oneThis = () => {
//   let username = "coco";
//   console.log(this);
// }
// oneThis()
//===================================================================
// // (basic arrow function)
// (explisite return)
// const addTwo = (num1, num2) => {
//   return num1 + num2;
// }

// (implesite return)
// const addTwo = (num1, num2) =>  num1 + num2;

const addTwo = (num1, num2) =>  (num1 + num2);

console.log(addTwo(2,3));
//----------------------------------------------
// if you are using {} you have to use return statement 
// but if you are using () then you do not need to use return statement
//----------------------------------------------
// you may think what about object
const getUser = (name) => {username : "coco"};
console.log(getUser(2,4));// undefined

const getUserV2 = (name) => ({username : "coco"});
console.log(getUserV2(2,4));









































