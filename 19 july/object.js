// // singleton
// // Object.create
// // object literals

// const mySym = Symbol("key1")


// const JsUser = {
//     name: "Hitesh",
//     "full name": "Bhakti Patle",
//     [mySym]: "mykey1",
//     age: 18,
//     location: "Jaipur",
//     email: "iteh@google.com",
//     isLoggedIn: false,
//     lastLoginDays: ["Monday", "Saturday"]
// }

// // console.log(JsUser.email)
// // console.log(JsUser["email"])
// // console.log(JsUser["full name"])
// // console.log(JsUser[mySym])

// JsUser.email = "higdkesh@chatgpt.com"
// // Object.freeze(JsUser)
// JsUser.email = "hima@microsoft.com"
// // console.log(JsUser);

// JsUser.greeting = function(){
//     console.log("Hello JS user");
// }
// JsUser.greetingTwo = function(){
//     console.log(`Hello JS user, ${this.name}`);
// }

// console.log(JsUser.greeting());
// console.log(JsUser.greetingTwo());

// // const tinderUser = new Object()
// const tinderUser = {}

// tinderUser.id = "123abc"
// tinderUser.name = "Sammy"
// tinderUser.isLoggedIn = false

// // console.log(tinderUser);

// const regularUser = {
//     email: "some@gmail.com",
//     fullname: {
//         userfullname: {
//             firstname: "Richa",
//             lastname: "choudhary"
//         }
//     }
// }

// // console.log(regularUser.fullname.userfullname.firstname);

// const obj1 = {1: "a", 2: "b"}
// const obj2 = {3: "a", 4: "b"}
// const obj4 = {5: "a", 6: "b"}

// // const obj3 = { obj1, obj2 }
// // const obj3 = Object.assign({}, obj1, obj2, obj4)

// const obj3 = {...obj1, ...obj2}
// // console.log(obj3);


// const users = [
//     {
//         id: 1,
//         email: "b@gmail.com"
//     },
//     {
//         id: 1,
//         email: "b@gmail.com"
//     },
//     {
//         id: 1,
//         email: "b@gmail.com"
//     },
// ]

// users[1].email
// // console.log(tinderUser);

// // console.log(Object.keys(tinderUser));
// // console.log(Object.values(tinderUser));
// // console.log(Object.entries(tinderUser));

// // console.log(tinderUser.hasOwnProperty('isLoggedIn'));


// const course = {
//     coursename: "js in hindi",
//     price: "999",
//     courseInstructor: "bhakti"
// }

// // course.courseInstructor

// const {courseInstructor: instructor} = course

// // console.log(courseInstructor);
// console.log(instructor);

// // {
// //     "name": "Bhakti",
// //     "coursename": "js in hindi",
// //     "price": "free"
// // }

// [
//     {},
//     {},
//     {}
// ]

// -----------object question------------//
JS - Object

Questions:
// const source = { a: 1 };
// const target = { b: 2 };
// Object.assign(target, source);
// console.log(target);//{b:2, a:1}

// const obj1 = { a: 12, b: 23 };
// const obj2 = obj1;
// const obj3 = { ...obj1 };
// obj1.c = 23;
// console.log(obj1.c, obj2.c, obj3.c);//23,23.undefined

// const obj1 = { a: 12, b: 23 };
// const obj2 = { a: 44, b: 45 };
// const obj3 = Object.assign(obj1, obj2);
// obj2.a = 22;
// console.log(obj1, obj2, obj3);//44 22 44

// const obj1 = { a: 77, b: 67 };
// const obj2 = { a: 90, b: 34 };
// const obj3 = Object.assign(obj1, obj2);
// obj1.a = 22;
// console.log(obj3);//{ a: 90, b: 34 }

// const obj1 = { a: 77, b: 67 };
// const obj2 = { a: 90, b: 34 };
// const obj3 = Object.assign({}, obj1, obj2);
// console.log(obj3);//90 34
// obj1.a = 22;
// console.log(obj3);//90 34

// const source = { a: { b: 1 } };
// const target = {};
// Object.assign(target, source);
// console.log(target);//{ a: { b: 1 } }



// const source = { a: { b: 1 } };
// const target = {};
// Object.assign(target, JSON.parse(JSON.stringify(source)));
// source.a.b = 2;
// console.log(target);//{ a: { b: 1 } } in nested object use json stringify

// const source = { a: 1 };
// const target = Object.assign({}, source);
// delete target.a;
// console.log(source);//{a:1}

// const target = { a: 1 };
// const source = { b: 2 };
// const result = Object.assign(target, source);
// console.log(result === source);//false
// console.log(result===target);//true

// const target = { a: 1 };
// const source = { b: 2 };
// const result = Object.assign(target, source);
// console.log(result === { a: 1, b: 2 });//false

// const target = { a: 1 };
// const source = { b: 2 };
// Object.assign(target, source);
// target.b = 234;
// console.log(source);//b:2

// const target = {};
// const source = { a: 1 };
// const result = Object.assign(target, source);
// source.a = 2;
// console.log(target);//a:1

// const target = {};
// const source = { a: { b: 1 } };
// const result = Object.assign(target, source);
// result.a.b = 2;
// console.log(source);

// const target = {};
// const source = {  b: 1 };
// const result = Object.assign(target, source);
// result.b = 2;
// console.log(source);//b:1


// const target = { c: { b: 1 } };
// const source = { a: [2, 3, 4] };
// const result = Object.assign(target, source);
// console.log(result);//{ a: [ 2, 3, 4 ] }  //if i change target a to c then give both bcz now both are not a

// const target = { a: { b: 1 } };
// const source = { a: [2, 3, 4] };
// const result = Object.assign(target, source);
// target.a[2] = 90;
// console.log(result);//{ a: [ 2, 3, 90 ] }


// const target = { a: { b: { c: 1 } } };
// const source = { a: { b: { d: 2 } } };
// const result = Object.assign(target, source);
// result.a.b.d = 3;
// console.log(target);//{ a: { b: { d: 3 } } }

//  Write a JavaScript program to list the properties of a JavaScript object.
// Sample object:
// var student = {
// name : "David Rayy",
// sclass : "VI",
// rollno : 12 
// };
  
//   function listObjectProperties(obj) {
//     var properties = Object.keys(obj);
//     console.log(properties);
//   }
  
//   listObjectProperties(student);//using key property=>[ 'name', 'sclass', 'rollno' ] 

//   function listObjectProperties(obj){
//     for(var propety in obj){
//         console.log(propety);
//     }
//   }
//   listObjectProperties(student)//using for in=>name
//                                              //sclass
//                                              //rollno
  

// Write a JavaScript program to delete the rollno property from the following object. Also print the object before or after deleting the property.
// Sample object:
// var student = {
// name : "David Rayy",
// sclass : "VI",
// rollno : 12 
// };

// //only dlete rollnumber
// var student = {
//     name: "David Rayy",
//     sclass: "VI",
//     rollno: 12
//   };
  
//   delete student.rollno;
  
//   console.log(student);
  
// //before after both
// var student = {
//     name: "David Rayy",
//     sclass: "VI",
//     rollno: 12
//   };
  
//   function deleteAndPrint(obj, property) {
//     console.log("Before deletion:");
//     console.log(obj);
  
//     if (property in obj) {
//       delete obj[property];
//       console.log("After deletion:");
//       console.log(obj);
//     } else {
//       console.log("Property not found. Object remains unchanged.");
//     }
//   }
  
//   deleteAndPrint(student, "rollno");
  

// function operationObj(obj) {
//   obj.p = {...obj, c: 12}
// }
// let a = {  x: 34,  y: 56 }
// operationObj(a);
// console.log(a);//{ x: 34, y: 56, p: { x: 34, y: 56, c: 12 } }

// function operationObj(obj) {
//   obj.z = {...obj, c: 12}
// }
// let a = {
//   x: 34,
//   y: 56
// }
// operationObj(a);
// console.log(a);//{ x: 34, y: 56, z: { x: 34, y: 56, c: 12 } }

// const target = { a: { b: { c: 1 } } };
// const source = { a: { b: { d: 2 } } };
// const result = Object.assign(target, source);//d=3
// //  const result=Object.assign(target, JSON.parse(JSON.stringify(source)));//d=2
// result.a.b.d = 3;
// console.log(source);

function myAssign(target, source) {
    Object.entries(source).forEach(([key, value]) => {
      target[key] = value;
    });
    return target;
  }
  
  // Example usage:
  const obj1 = { a: 1, b: 2 };
  const obj2 = { b: 3, c: 4 };
  
  const result = myAssign(obj1, obj2);
  
  console.log(result); // Output: { a: 1, b: 3, c: 4 }
  

// function myAssign(target, source) {
//     for (let key in source) {
//       if (source.hasOwnProperty(key)) {
//         target[key] = source[key];
//       }
//     }
//     return target;
//   }
  
//   // Example usage:
//   const obj1 = { a: 1, b: 2 };
//   const obj2 = { b: 3, c: 4 };
  
//   const result = myAssign(obj1, obj2);
  
//   console.log(result); // Output: { a: 1, b: 3, c: 4 }
  

// -----array question------//
Write a visualization notes on given examples
let obj1 = { a: 23, b: 45 };
let arr1 = [{ ...obj1 }];
let arr2 = arr1;
arr2[0].c = 5;
console.log(arr1)

let obj1 = { a: 23, b: 45, c: { f: 990 } };
let arr1 = [{ ...obj1 }];
let arr2 = arr1;
arr2[0].c = 5;
obj1.c.f = 30;
console.log(arr1); 

let obj1 = { a: 23, b: 45, c: { f: 990 } };
let arr1 = [{ ...obj1 }];
let arr2 = arr1;
obj1.c.f = 30;
console.log(arr1); 



let obj1 = { a: 23, b: 45 };
let arr1 = Object.assign([], [{ ...obj1 }]);
let arr2 = arr1;
arr2[0].c = 5;
console.log(arr1); 

let obj1 = { a: 23, b: 45 };
let arr1 = [{ ...obj1 }];
let arr2 = Object.assign([], arr1);
arr2[0].c = 5;
console.log(arr1); 

let obj1 = { a: 23, b: 45 };
let arr1 = [{ ...obj1 }];
let arr2 = Object.assign([], [{...arr1[0]}]);
arr2[0].c = 5;
console.log(arr1); 

let obj1 = { a: 34, b: 56, c: { h: 77, j: 90 } };
let obj2 = Object.assign({}, obj1);
let obj3 = Object.assign({ ...obj2 }, { c: { k: 44 } });
obj2.c.h = 67;
console.log(obj1, obj2, obj3);


// function f() {
//     console.log(arguments.join());
// }

// f(10, 20, 30);
// function f() {
//     console.log([].join.call(arguments));
// }

// f(10, 20, 30);
// function f() {
//     console.log(arguments.call.join(arguments));
// }

// f(10, 20, 30);

// --------new question------//
// const obj1 = { a: 12, b: 23 };
// const obj2 = obj1;
// const obj3 = { ...obj1 };
// obj1.c = 23;
// console.log(obj1.c, obj2.c, obj3.c);
const target={a:1}
const source={b:2}
const result=Object.assign(target,source)
console.log(target);
console.log(result===target);







