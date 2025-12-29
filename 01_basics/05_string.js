// 'hellow' and "hellow" are same no difference

const name = 'coco';
const repoCount = 12;

// old fasion and out dated way of string interpolation
const fullString = "Hello " + name + ", you have " + repoCount + " repositories";
console.log(fullString);

// modern way using template literals (backticks ``) interpolation
const fullString2 = `Hello ${name}, you have ${repoCount} repositories`;
console.log(fullString2);


const gameName = new String("Zelda"); // String object
console.log(typeof gameName); // "object"
console.log(gameName); // [String: 'Zelda']


console.log(gameName[0]); // 'Z'

console.log(gameName.__proto__); // String {...} prototype methods and properties

console.log(gameName.length); // 5
console.log(gameName.toUpperCase()); // 'ZELDA'
console.log(gameName.charAt(2)); // 'l'
console.log(gameName.indexOf('a')); // 3

const gameName2 = new String("farcry-6");
const newString = gameName2.substring(0, 7); // 'farcry'
console.log(newString);

const msg = "Hellow";
console.log(msg.slice(1,4)); // 'ell'
console.log(msg.slice(-4, -1)); // 'llo'
console.log(msg.slice(-4)); // 'ellow'

const anotherMsg = "   Hellow World   ";
console.log(anotherMsg.trim()); // "Hellow World"
console.log(anotherMsg.trimStart()); // "Hellow World   "
console.log(anotherMsg.trimEnd()); // "   Hellow World"

const sampleMsg = "Hellow Hellow Hellow";
console.log(sampleMsg.replace("Hellow", "Hi")); // "Hi Hellow Hellow"
console.log(sampleMsg.replaceAll("Hellow", "Hi")); // "Hi Hi Hi"

console.log(sampleMsg.includes("Hellow")); // true

console.log(sampleMsg.split(" ")); // ['Hellow', 'Hellow', 'Hellow'](ONLY SAPARATOR)
// split into array based on the separator
// {STRING}.SPLIT({SAPARATOR}, {LIMIT})
console



















