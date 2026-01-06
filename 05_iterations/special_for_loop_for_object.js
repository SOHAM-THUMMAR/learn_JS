const language = {
  js: 'java sctipt',
  py: "python",
  cpp: "c++",
  c: "c language"
}

for (const key in language) {
  console.log(`${key} is the short form of ${language[key]}`);
}

const programming = ["js", "rb", "py", "java", "cpp"];

for (const key in programming) {
  console.log(key);// array's key is index
  console.log(programming[key]);
}

/*
as you can see for-in and for-of loop works completly different for array
 */

const map = new Map();
map.set("IN","India");
map.set("USA","United States of America");
map.set("RUS","Russia");
map.set("IN","India");

for (const key in map) {
  console.log(key);// will not give any output
}
// map is not iteratable ans that why for-in loop does not work on Map