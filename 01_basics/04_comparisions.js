// values are true or false

//console.log (2>1);
//console.log (2<1);
//console.log (2>=2);
//console.log (2<=2);
//console.log (2==2);
//console.log (2!=2);

// console.log("2" > 1); //string "2" is converted to number 2
// console.log("02" > 1);

/* we will try to avoid + operation for non-numbers */
console.log(null > 0);// false => null is converted to 0 
console.log(null == 0);// false => null is only equal to undefined
console.log(null >= 0);// true => null is converted to 0 

console.log(null == undefined);// true

console.log(undefined > 0);// false => undefined is converted to NaN
console.log(undefined < 0);// false => undefined is converted to NaN
console.log(undefined == 0);// false => undefined is only equal to null


// === (strict equality checks)
// == (loose equality checks)

console.log("2" === 2); // false

// === => WILL NOT ALLOW TYPE CONVERSION
// MEANS BOTH VALUE AND TYPE MUST BE SAME

