let myDate = new Date();

console.log(typeof myDate); // "object"

console.log(myDate.toString()); // full date string
console.log(myDate.toDateString()); // date string
console.log(myDate.toTimeString()); // time string
console.log(myDate.toISOString()); // ISO string
console.log(myDate.toJSON()); // JSON string

console.log(myDate.getFullYear()); // year
console.log(myDate.getMonth()); // month (0-11)
console.log(myDate.getDate()); // day of month (1-31)
console.log(myDate.getDay()); // day of week (0-6)
console.log(myDate.getHours()); // hours (0-23)
console.log(myDate.getMinutes()); // minutes (0-59)
console.log(myDate.getSeconds()); // seconds (0-59)

let specificDate = new Date(2023,0,23);
console.log(specificDate.toString()); // "Mon Jan 23 2023 ..."

let anotherDate = new Date("2023-01-23");
console.log(anotherDate.toLocaleDateString()); // "1/23/2023" (format may vary based on locale)

let myTimeStamp = Date.now();
console.log(myTimeStamp); // current timestamp in milliseconds

console.log(anotherDate.getTime()); // timestamp of anotherDate in milliseconds

console.log(Math.floor(Date.now() / 1000)); // current timestamp in seconds


let newDate = new Date();

newDate.toLocaleString('default', { weekday: 'long'} ); // "Monday"























