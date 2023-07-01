// 1
// const names = [
//   { first_name: "Handnm", last_name: "L demo" },
//   { first_name: "Q Wei", last_name: "Alxezx" },
//   { first_name: "Pqwern", last_name: "Ruse" },
//   { first_name: "Wiruyn", last_name: "Ruby" },
//   { first_name: "Erpso", last_name: "Loal" },
//   { first_name: "Demors", last_name: "Poet" },
//   { first_name: "Aleos", last_name: "Lkeu" },
// ];

// const updatedNames = names.map((name) => {
// //   return { ...name, full_name: name.first_name + " " + name.last_name };
//   return { ...name, age:name.city="rajkot" };
// });

// console.log(updatedNames);


// 2
// const users = [
//     { first_name: "Handnm", last_name: "L demo", age: 17 },
//     { first_name: "Q Wei", last_name: "Alxezx", age: 30 },
//     { first_name: "Pdeq Twern", last_name: "Ruse", age: 22 },
//     { first_name: "Widfruyn", last_name: "Ruby", age: 11 },
//     { first_name: "Erdfg Pso", last_name: "Loal", age: 34 },
//     { first_name: "Dedfgmors", last_name: "Poet", age: 60 },
//     { first_name: "Ale4tos", last_name: "Lkeu", age: 16 },
//   ];
  
//   const updatedUsers = users.map((user) => {
//     return{...user, isMature:"rajkot"}
//   });
  
//   console.log(updatedUsers);

// 3
// let arr = [1,2,3,5]
// console.log(arr[-1]);

// 4
// const nestedArray = [
//     [1, 2, 3],[]
//     [4, 5, 6],
//     [7, 8, 9],
//   ];
//  //using normal for loop 
//   for (let i = 0; i < nestedArray.length; i++) {
//     for (let j = 0; j < nestedArray[i].length; j++) {
//       console.log(nestedArray[i][j]);
//     }
//   }

// //for-each loop
// const nestedArray = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
//   ];
  
//   nestedArray.forEach((row) => {
//     row.forEach((item) => {
//       console.log(item);
//     });
//   });

// //for of loop
// const nestedArray = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
//   ];
  
//   for (const row of nestedArray) {
//     for (const item of row) {
//       console.log(item);
//     }
//   }


//   5
// // using JSON stingifly
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
  
//   console.log(JSON.stringify(nestedObject));
//   //it is not work

// //using  for in loop and if loop
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
  
//   function printItems(obj) {
//     let result = "";
    
//     for (let key in obj) {
//       if (typeof obj[key] === "object" && !Array.isArray(obj[key])) { //(!Array.isArray(obj[key])==>when it array then give true other it gives false
//         result += printItems(obj[key]);
//       } else {
//         result += obj[key] + "\n";
//       }
//     }
  
//     return result;
//   }
  
//   console.log(printItems(nestedObject));
  
// //foreach loop
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
  
//   function printItems(obj) {
//     Object.values(obj).forEach(value => {
//       if (typeof value === "object" && !Array.isArray(value)) {
//         printItems(value);
//       } else {
//         console.log(value);
//       }
//     });
//   }
  
//   printItems(nestedObject);
  
//  6
//  function containsNumbers(array) {
//     for (let i = 0; i < array.length; i++) {
//       if (typeof array[i] === "number" && !isNaN(array[i])) {
//         return true;
//       }
//     }
//     return false;
//   }
  
//   // Test cases
//   console.log(containsNumbers([1, 2, 3]));            // true
//   console.log(containsNumbers(["1", "a", "h"]));      // false
//   console.log(containsNumbers(["a", 3, "gh"]));       // true
//   console.log(containsNumbers(["a", '3df', "gh"]));   // false

  
//   //arrow function
//   function containsNumbers(array) {
//     return array.some(item => typeof item === "number" && !isNaN(item));
//   }
  
//   // Test cases
//   console.log(containsNumbers([1, 2, 3]));            // true
//   console.log(containsNumbers(["1", "a", "h"]));      // false
//   console.log(containsNumbers(["a", 3, "gh"]));       // true
//   console.log(containsNumbers(["a", '3df', "gh"]));   // false
  
//  9
// //  filter donuts based on which have topping  Chocolate


// filtered_donuts = [donut for donut in donuts if any(topping["type"] == "Chocolate" for topping in donut["topping"])]

// print(filtered_donuts) 













  
  

  

  