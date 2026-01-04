/* 

switch (key) {
  case value:
    
    break;

  default:
    break;
}

*/


let month = 3;
// we can take string in the key or as input not only Number
let month2 = "sep";
// to execute it shoul match with the case value


switch (month) {
  case 1:
    console.log("january");
    break;
/*

  'break' is very importent here 
  if you fore get to add "break" statement 
  then all the cases after true case will be executed
  except default

*/
  case 2:
    console.log("February");
    break;
  case 3:
    console.log("March");
    break;
  case 4:
    console.log("April");
    break;
  case 5:
    console.log("May");
    break;
  case 6:
    console.log("June");
    break;
  case 7:
    console.log("July");
    break;
  case 8:
    console.log("August");
    break;
  case 9:
    console.log("September");
    break;
  case 10:
    console.log("October");
    break;
  case 11:
    console.log("November");
    break;
  case 12:
    console.log("December");
    break;
  default:
    console.log("invalid month");
    break;
}


