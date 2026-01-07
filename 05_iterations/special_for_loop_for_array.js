const programming = ["js", "rb", "python", "java", "cpp", "c#", "rust", "go"];

// (basic function)
programming.forEach( function(language) {
  console.log(language);
} )

//call back function does not have any name

// (arrow function)
programming.forEach( (i) => {
  console.log(i);
})


function printMe(item){
  console.log(item)
}

programming.forEach(printMe)//<= you can give function externally too


programming.forEach((item,index,arr) => {
  console.log(item,index,arr)
})


//======================================================
// VERY USEFUL IN REAL PROJECTS
// (data from database)

const myCoding = [
  {
    languageName: "java script",
    FileName: ".js",
  },
  {
    languageName: "python",
    FileName: ".py",
  },
  {
    languageName: "c++",
    FileName: ".cpp",
  }
]

myCoding.forEach((item)=> {
  console.log(item.languageName);
})
//========================================
const values = myCoding.forEach((item) => {
  return item;
});

console.log(values);// undefined

// as you can see that for-each has call back funtion 
// but it does not return any values














