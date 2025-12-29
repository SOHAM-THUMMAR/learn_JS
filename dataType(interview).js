// premitive data types
    // string, number, boolean, null, undefined, symbol, bigint

// reference (non-premitive data types)
    // object, array, function, date, regex


//IS JS DAYNAMIC TYPED LANGUAGE?
    // Yes, JavaScript is a dynamically typed language. This means that 
    // variables in JavaScript do not have a fixed data type, and the type of a variable can 
    // change at runtime based on the value assigned to it. 
    // For example, a variable can hold a number at one moment 
    // and then be reassigned to hold a string later on.

const id = Symbol("123");
console.log(typeof id); // "symbol"

const anotherId = Symbol("123");
console.log(id === anotherId); // false

// both symbols have the same description but are unique and not equal to each other

const bigIntNum = 9007199254740991n; // 'n' at the end denotes a BigInt

const heros = ["spiderman", "ironman", "thor"]; // array is a type of object in JavaScript

let person ={ //object literal
    name: "John",
    age: 30,
    isEmployed: true
}

// you can treate function as a data type
const myFunction = function() {
    console.log("Hellow!");
};

console.log(typeof myFunction); // "function"

console.log(typeof heros); // "object"

console.log(typeof person); // "object"

console.log(typeof bigIntNum); // "bigint"

console.log(typeof null); // "object" (this is a known quirk in JavaScript)


// all the non-premitive data type are objects in JavaScript

