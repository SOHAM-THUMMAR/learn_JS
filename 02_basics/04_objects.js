const tinderuser1 = new Object();//singleton object
//1 and 2 both are empty objects
const tinderuser2 = {};//non-singleton object


// console.log(tinderuser1);
// console.log(tinderuser2);


tinderuser1.id = 'tn1101001134';
tinderuser1.name = 'Renny';
tinderuser1.isLoggedIn = false;
// console.log(tinderuser1);


// nested objects
const regularUser = {
  email: "some@gmail.com",
  fullName : {
    userFullName : {
          firstName : "Shown",
    lastName: "Decard"

    }
  }
}
// accessing nested object's values
// console.log(regularUser.fullName.userFullName);
// console.log(regularUser.fullName.userFullName.firstName);

const obj1 = {1:"a",2:"b"};
const obj2 = {3:"a",4:"b"};

const obj3 = {obj1,obj2};
// console.log(obj3);

// good practice
// Object.assign({<TARGET>},<SOURCES>,...)
const obj4 = Object.assign ({},obj1,obj2)
// GIVES NEW OBJECT
// console.log(obj4)
// bad practice
const obj5 = Object.assign (obj1,obj2)
// ALL THE VALUES ARE GOING IN obj1
// console.log(obj5)

// what we will use this 90% of the time is sprade function
const mix = {...obj1,...obj2};
// simple and latest
// console.log(mix)

const Users = [
  {
    id: 1,
    email: "coco@gmail.com"
  },
    {
    id: 1,
    email: "coco@gmail.com"
  },
    {
    id: 1,
    email: "coco@gmail.com"
  },
];

Users[1].email;

console.log(tinderuser1);

console.log(Object.keys(tinderuser1));
//this will give the list of all the keys in "tindweruser1"
console.log(Object.values(tinderuser1));
//this will give the list of all the values in "tinderuser1"
console.log(Object.entries(tinderuser1))
// this will give all the key-value pair in lists


console.log(tinderuser1.hasOwnProperty('isLoggedIn'));
console.log(tinderuser1.hasOwnProperty('isLogged'));
// for chaking if that propertiy exist
// this will return boolean values
// and if we dont take care of this then sometimes projects gets crashed
// which is not in production work






































