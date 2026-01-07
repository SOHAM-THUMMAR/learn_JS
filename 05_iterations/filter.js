/* 

WE HAD A PROBLEM IN FOR-EACH LOOP THAT IT DOES NOT RETURN ANY VALUE 
//to solve that we have some property

const values = myCoding.forEach((item) => {
  return item;
});

console.log(values);// undefined

// as you can see that for-each has call back funtion 
// but it does not return any values
*/

const myNums = [1,2,3,4,5,6,7,8,9,0];

const newNums = myNums.filter((num) => num > 4);// implesite return
console.log(newNums);

// another way to write the function in filter
const newNumsV2 = myNums.filter((num) => {// <= here we started scope 
// and if we start the scope then we have to return the value 
  return num > 4;//<= thats why
})
console.log(newNumsV2);

// as you can see that filter is returning the value 
// and it is the solving the problem which we had in for-each loop


// same filter operation with the for-each loop
const nums = [];
myNums.forEach((num) => {
  if (num > 4){
    nums.push(num);
  }
})
console.log(nums);

// example of filers

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  // where genre is history
const userBook = books.filter( (book) => book.genre ==="History");
console.log(userBook);

console.log()
// where published year >= 2000
const userBookV2 = books.filter( (book) => { return book.publish >= 2000});
console.log(userBookV2);

console.log()
// where book is published after 1995 and genre is history
const userBookV3 = books.filter( (book) => { return book.publish >= 1995 && book.genre === "History"});
console.log(userBookV3);



















