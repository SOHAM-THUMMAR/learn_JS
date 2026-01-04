const tinderuser1 = new Object();//singleton object
//1 and 2 both are empty objects
const tinderuser2 = {};//non-singleton object


console.log(tinderuser1);
console.log(tinderuser2);


tinderuser1.id = 'tn1101001134';
tinderuser1.name = 'Renny';
tinderuser1.isLoggedIn = false;
console.log(tinderuser1);


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

// console.log(tinderuser1);

// console.log(Object.keys(tinderuser1));
// //this will give the list of all the keys in "tindweruser1"
// console.log(Object.values(tinderuser1));
// //this will give the list of all the values in "tinderuser1"
// console.log(Object.entries(tinderuser1))
// //this will give all the key-value pair in lists


// console.log(tinderuser1.hasOwnProperty('isLoggedIn'));
// console.log(tinderuser1.hasOwnProperty('isLogged'));
// for chaking if that propertiy exist
// this will return boolean values
// and if we dont take care of this then sometimes projects gets crashed
// which is not in production work


// DESTRUCTURING ---------------------------------------------------------------------
// (objects)
let course = {
  courseName : "java script",
  price:"10000",
  courseInsructor : "aarzoo sir"
}

// console.log(course.courseInsructor);
// if we have to use this data multiple time and it is in deep nested object 
// then we get too long address which is too confusing and sometimes we get error because of some little mistakes 
// but we can avoide that by extracting that data from the object like given below

let {courseInsructor} = course;
console.log(courseInsructor);
// we dont need to write long long address of the data 
let {courseInsructor: faculty} = course;
console.log(faculty);

/* 

JSON API ---------------------------------------------------------------------------


(json api type 1)
================================================
{
  "name" : "coco",
  "email": "coco@gmail.com",
  "work" : "study",
}
================================================
(json api type 2)
================================================
{
  "results": [
    {
      "gender": "female",
      "name": {
        "title": "Miss",
        "first": "Jennie",
        "last": "Nichols"
      },
      "location": {
        "street": {
          "number": 8929,
          "name": "Valwood Pkwy",
        },
        "city": "Billings",
        "state": "Michigan",
        "country": "United States",
        "postcode": "63104",
        "coordinates": {
          "latitude": "-69.8246",
          "longitude": "134.8719"
        },
        "timezone": {
          "offset": "+9:30",
          "description": "Adelaide, Darwin"
        }
      },
      "email": "jennie.nichols@example.com",
      "login": {
        "uuid": "7a0eed16-9430-4d68-901f-c0d4c1c3bf00",
        "username": "yellowpeacock117",
        "password": "addison",
        "salt": "sld1yGtd",
        "md5": "ab54ac4c0be9480ae8fa5e9e2a5196a3",
        "sha1": "edcf2ce613cbdea349133c52dc2f3b83168dc51b",
        "sha256": "48df5229235ada28389b91e60a935e4f9b73eb4bdb855ef9258a1751f10bdc5d"
      },
      "dob": {
        "date": "1992-03-08T15:13:16.688Z",
        "age": 30
      },
      "registered": {
        "date": "2007-07-09T05:51:59.390Z",
        "age": 14
      },
      "phone": "(272) 790-0888",
      "cell": "(489) 330-2385",
      "id": {
        "name": "SSN",
        "value": "405-88-3636"
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/men/75.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/75.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/75.jpg"
      },
      "nat": "US"
    }
  ],
  "info": {
    "seed": "56d27f4a53bd5441",
    "results": 1,
    "page": 1,
    "version": "1.4"
  }
}

tools to understand the apis =============================

https://jsonformatter.org/

*/
































