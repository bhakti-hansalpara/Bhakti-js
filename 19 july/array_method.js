let a=[{id:1}, {id:2}]
let b=[
    {id:1, name:"hii"},
    {id:2, name:"hii"},
    {id:3, name:"hii"},
    {id:4, name:" "},

]

function findObject(arrA, arrB) {
  return arrB.filter((objB) => !arrA.some((objA) => objA.id === objB.id));
}
let result = findObject(a, b);
console.log(result);

// ------------array doc question------------//
//1
// const names  = [
//     {first_name: "Handnm", last_name: "L demo"},
//     {first_name: "Q Wei", last_name: "Alxezx"},
//     {first_name: "Pqwern", last_name: "Ruse"},
//     {first_name: "Wiruyn", last_name: "Ruby"},
//     {first_name: "Erpso", last_name: "Loal"},
//     {first_name: "Demors", last_name: "Poet"},
//     {first_name: "Aleos", last_name: "Lkeu"},
    // ]
    // Write a code that adds new key in each object named 
    // full_name: first_name + last_name

//     const newNames=names.map((person)=>{
//         return {...person, full_name:`${person.first_name} ${person.last_name}`}
//     })
//    console.log(newNames)

//2
// const users  = [
//     {first_name: "Handnm", last_name: "L demo", age: 17},
//     {first_name: "Q Wei", last_name: "Alxezx", age: 30},
//     {first_name: "Pdeq Twern", last_name: "Ruse", age: 22},
//     {first_name: "Widfruyn", last_name: "Ruby", age: 11},
//     {first_name: "Erdfg Pso", last_name: "Loal", age: 34},
//     {first_name: "Dedfgmors", last_name: "Poet", age: 60},
//     {first_name: "Ale4tos", last_name: "Lkeu", age: 16},
//    ]
// //    Write a code that adds new key in each object named : isMature
    

// const newUsers = users.map((person) => {
//     if (person.age > 18) {
//       person.isMature=' true '
//     } else {
//         person.isMature = 'false '
//     }
//     return person
//   });
  
//   console.log(newUsers);

//03
// let arr = [1,2,3,5]
// console.log(arr[-1]); //undefined
// array has not have -1 index

//04

// const nestedArray = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
//   ];
// //   => print all items of nested array
// for(const row of nestedArray){
//     for(const item of row){
//         console.log(item);
// //     }
// // }
// const nestedArray = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
//   ];
//   //   => print all items of nested array
//   for (const row of nestedArray) {
//     console.log(row);
//     for (const item of row) {
//       console.log(item);
//     }
//   }
  
// //05
// const nestedObject = {
//     name: "Vishal Kukreja",
//     age: 32,
//     address: {
//       street: "123 Mumbai fashion St",
//       city: "Midtown",
//       state: "MH",
//     },
//     hobbies: ["reading", "drawing", "gardening"],
//   };

//  for (const keys in nestedObject) 
//   if (typeof nestedObject[keys] === "object") {
//     for (objKey in nestedObject[keys]) {
//       console.log(nestedObject[keys][objKey]);
//     }
//   } else {
//     console.log(nestedObject[keys]);
//   }

//  => print all items of this object in line 
 //Output:
//  Vishal Kukreja
//  32
//  123 Mumbai fashion St
//  Midtown
//  MH
//  reading
//  drawing
//  gardening

//06
// Write a program to check if an array contains any number (strictly) or not.
// Input:  [1,2,3] => true
// [“1”, “a”, “h”] => false
// [“a”, 3, “gh”] => true
// [“a”, ‘3df’, “gh”] => false

// function nestedArrayumber(arr) {
//     return arr.some((item) => typeof item === "number" && !isNaN(item));
//   }
  
//   // Test cases
//   console.log(nestedArrayumber([1, 2, 3]));        // true
//   console.log(nestedArrayumber(["1", "a", "h"]));  // false
//   console.log(nestedArrayumber(["a", 3, "gh"]));   // true
//   console.log(nestedArrayumber(["a", '3df', "gh"])); // false
  
//07
// const numbers = [1, 2, 3, 4];
// 	// => convert all number to string in given array
// const numbers = [1, 2, 3, 4];
// const strings = numbers.map((num) => num.toString());
// console.log(strings);

//08
// const numbers = [1, 2, 3, 4];
// const doubled = numbers.map((num, index, array) => {
//   array.push(num * 2);
//   return num * 2;
// });
// console.log(numbers, doubled);
// //[
//     1, 2, 3, 4,
//     2, 4, 6, 8
//   ] [ 2, 4, 6, 8 ]

//10
// Get name initials
// input = "George Raymond Richard Martin"; Output: “GRRM”
// input = “george raymond Richard Martin”; Output: “ GRRM”

// function generateInitials(name) {
//     const words = name.split(" ");
//     const initials = words.map(word => word[0].toUpperCase()).join("");
//     return initials;
//   }
//   const name2 = "george raymond Richard Martin";
//   const initials2 = generateInitials(name2);
//   console.log(initials2); // Output: " GRRM"

//11

// function convertToNumbers(sentence) {
//     const words = sentence.split(" ");
//     const convertedWords = words.map(word => {
//       if (word.length <= 2) {
//         return word; // Do not convert if word has 2 or fewer characters
//       } else {
//         const firstChar = word[0];
//         const lastChar = word[word.length - 1];
//         const middleChars = (word.length - 2).toString();
//         return `${firstChar}${middleChars}${lastChar}`;
//       }
//     });
//     return convertedWords.join(" ");
//   }

//12

// const products = [
//     { name: "Product 1", price: 20, category: "Electronics" },
//     { name: "Product 2", price: 30, category: "Clothes" },
//     { name: "Product 3", price: 40, category: "Electronics" },
//     { name: "Product 4", price: 50, category: "Clothes" },
//     { name: "Product 5", price: 60, category: "Clothes" },
//     { name: "Product 6", price: 70, category: "Electronics" },
//     { name: "Product 7", price: 80, category: "Clothes" },
//     { name: "Product 8", price: 90, category: "Electronics" },
//   ];
  
// function makeNewObject(arrayName) {
//     let newObject = {};
//     let Clothes = arrayName.filter(value => value.category == "Clothes");
//     let Electronics = arrayName.filter(value => value.category == "Electronics");
//     let a = Clothes.length;
//     let b = Electronics.length;
//     newObject.Clothes = a;
//     newObject.Electronics = b;
//     return newObject;
// }
// let newObj = makeNewObject(products);
// console.log(newObj);

//13
const employees = [
    { name: "John", salary: 50000, department: "IT" },
    { name: "Jane", salary: 60000, department: "HR" },
    { name: "Bob", salary: 55000, department: "IT" },
    { name: "Sophie", salary: 75000, department: "HR" },
    { name: "Mike", salary: 65000, department: "IT" },
    { name: "Emily", salary: 80000, department: "HR" },
    { name: "David", salary: 70000, department: "IT" },
  ];
  
function departWiseSalary(arr) {
    let a = arr.filter(val => val.department === "IT").map(val => val.salary)
    let b = arr.filter(val => val.department === "HR").map(val => val.salary)
    let c = {IT:a,HR:b};
    return c
  }
  console.log(departWiseSalary(employees));

  //14



 