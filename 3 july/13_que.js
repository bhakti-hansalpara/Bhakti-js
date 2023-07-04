1
    // Write a code that adds new key in each object named 
//    output= full_name: first_name + last_name
// --------usinf find----------//
// const names = [
//     {first_name: "Handnm", last_name: "L demo"},
//     {first_name: "Q Wei", last_name: "Alxezx"},
//     {first_name: "Pqwern", last_name: "Ruse"},
//     {first_name: "Wiruyn", last_name: "Ruby"},
//     {first_name: "Erpso", last_name: "Loal"},
//     {first_name: "Demors", last_name: "Poet"},
//     {first_name: "Aleos", last_name: "Lkeu"},
// ];

// const fullName = names.find(name => {
//     return name.first_name + name.last_name;
// });

// console.log(fullName); // Output: { first_name: "Handnm", last_name: "L demo" }


// -----using findindex------//
// const names = [
//     {first_name: "Handnm", last_name: "L demo"},
//     {first_name: "Q Wei", last_name: "Alxezx"},
//     {first_name: "Pqwern", last_name: "Ruse"},
//     {first_name: "Wiruyn", last_name: "Ruby"},
//     {first_name: "Erpso", last_name: "Loal"},
//     {first_name: "Demors", last_name: "Poet"},
//     {first_name: "Aleos", last_name: "Lkeu"},
// ];

// const index = names.findIndex(name => {
//     return name.first_name + name.last_name;
// });

// if (index !== -1) {
//     const fullName = names[index];
//     console.log(fullName.first_name + " " + fullName.last_name); // Output: Handnm L demo
// } else {
//     console.log("Full name not found");
// }


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
  
//   users.forEach(user => {
//     const isMature = user.age >= 18; // Determine if the user is mature based on age
//     user.isMature = isMature; // Add the isMature key to the object
//     // console.log(isMature);
//   });
  
//   console.log(users);

//   3
//   let arr = [1,2,3,5]
// console.log(arr[-1]);

// 4
// const nestedArray = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
//   ];
  
//   nestedArray.forEach(subArray => {
//     subArray.forEach(item => {
//       console.log(item);
//     });
//   });

//  5
//  const nestedObject = {
//         name: "Vishal Kukreja",
//         age: 32,
//         address: {
//           street: "123 Mumbai fashion St",
//           city: "Midtown",
//           state: "MH",
//         },
//         hobbies: ["reading", "drawing", "gardening"],
//       };
      
//       function printItems(obj) {
//         Object.values(obj).forEach(value => {
//           if (typeof value === "object" && !Array.isArray(value)) {
//             printItems(value);
//           } else {
//             console.log(value);
//           }
//         });
//       }
//          printItems(nestedObject);

// 6
// // it is not use find method

// 7
// // -----using for each------//
// const numbers = [1, 2, 3, 4];
// const stringNumbers = [];

// numbers.forEach(number => {
//   stringNumbers.push(number.toString());
// });

// console.log(stringNumbers);

// 8
// const numbers = [1, 2, 3, 4];
// const doubled = numbers.map((num, index, array) => {
//   array.push(num * 2);
//   return num * 2;
// });
// console.log(numbers, doubled);
//it print new array

// 9
// //1st   filter donuts based on which have topping  Chocolate
// const donuts = [
//     {
//       "id": "0001",
//       "type": "donut",
//       "name": "Cake",
//       "ppu": 0.55,
//       "batters": {
//         "batter": [
//           { "id": "1001", "type": "Regular" },
//           { "id": "1002", "type": "Chocolate" },
//           { "id": "1003", "type": "Blueberry" },
//           { "id": "1004", "type": "Devil's Food" }
//         ]
//       },
//       "topping": [
//         { "id": "5001", "type": "None" },
//         { "id": "5002", "type": "Glazed" },
//         { "id": "5005", "type": "Sugar" },
//         { "id": "5007", "type": "Powdered Sugar" },
//         { "id": "5006", "type": "Chocolate with Sprinkles" },
//         { "id": "5003", "type": "Chocolate" },
//         { "id": "5004", "type": "Maple" }
//       ]
//     },
//     // Rest of the donuts
//   ];
  
//   const donutIndex = donuts.findIndex(donut => {
//     return donut.topping.find(topping => topping.type === "Chocolate");
//   });
  
//   const donutWithChocolateTopping = donuts[donutIndex];
  
//   console.log(donutWithChocolateTopping);
  
// 2nd
// 9-b
// const A = donuts.find(donut => {
//     const hasRegularBatter = donut.batters.batter.find(batter => batter.type === "Regular");
//     const hasChocolateTopping = donut.topping.find(topping => topping.type === "Chocolate");
//     return hasRegularBatter && hasChocolateTopping;
//   });
//   console.log(A);

  or// const filter = donut.filter(donut => {
    //     const a = donut.batters.batter.find(batter => batter.type === "Regular");
    //     const b = donut.topping.find(topping => topping.type === "Chocolate");
    //     return a && b;
    //   });
      
    //   console.log(filter)

// 9-d
// const result = donuts.filter(donut => donut.ppu > 0.5);

// 9-e
// const result = [].concat(...donuts.filter(donut => donut.batters.batter));

// 9-f
// const result = donuts.filter(donut => donut.batters.batter.length >= 2);
// console.log(result);
  
//  -------using find-------//
//1
// const chocolateDonuts = donut.filter(donut => {
//     return donut.topping.find(topping => topping.type === "Chocolate");
//   });
  
//   console.log(chocolateDonuts);

//2
// const filter = donut.filter(donut => {
//     const a = donut.batters.batter.find(batter => batter.type === "Regular");
//     const b = donut.topping.find(topping => topping.type === "Chocolate");
//     return a && b;
//   });
  
//   console.log(filter)

// 3
// const filter = donut.filter(donut => {
//     const a = donut.topping.find(topping => topping.type === "Chocolate");
//     const b = donut.topping.find(topping => topping.type === "Sugar");
//     return a && b;
//   });
  
//   console.log(filter);

// 10
// // Function to get name initials
// function getNameInitials(name) {
//     const words = name.split(" ");
  
//     // Find the index of the first word that starts with a capital letter
//     const startIndex = words.findIndex(word => /[A-Z]/.test(word[0]));
  
//     if (startIndex === -1) {
//       return ""; // Return an empty string if no word starts with a capital letter
//     }
  
//     // Find the initials using the first character of each word starting from the startIndex

//     const initials = words.slice(startIndex).map(word => word[0].toUpperCase());
  
//     return initials.join("");
//   }
  
//   // Example usage
//   const name1 = "George Raymond Richard Martin";
//   console.log(getNameInitials(name1)); // Output: "GRRM"
  
//   const name2 = "george raymond Richard Martin";
//   console.log(getNameInitials(name2)); // Output: "GRRM"

//   11
//   const products = [
//     { name: "Product 1", price: 20, category: "Electronics" },
//     { name: "Product 2", price: 30, category: "Clothes" },
//     { name: "Product 3", price: 40, category: "Electronics" },
//     { name: "Product 4", price: 50, category: "Clothes" },
//     { name: "Product 5", price: 60, category: "Clothes" },
//     { name: "Product 5", price: 60, category: "Clothes" },
//     { name: "Product 5", price: 60, category: "Clothes" },
//     { name: "Product 6", price: 70, category: "Electronics" },
//     { name: "Product 7", price: 80, category: "Clothes" },
//     { name: "Product 8", price: 90, category: "Electronics" },
//   ];
  
//   function countCategories(products) {
//     const categoryCount = {};
  
//     products.forEach((product) => {
//       const { category } = product;
//       const categoryIndex = Object.keys(categoryCount).findIndex(
//         (key) => key === category
//       );
  
//       if (categoryIndex === -1) {
//         categoryCount[category] = 1;
//       } else {
//         categoryCount[category] += 1;
//       }
//     });
  
//     return categoryCount;
//   }
  
//   const output = countCategories(products);
//   console.log(output);
  


//   // ----Q-12----//

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
  
//   function makeNewObject(arrayName) {
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

// // ----using foreach-----//
// const categoryCount = {};

// products.forEach((product) => {
//   const category = product.category;
//   if (!categoryCount[category]) {
//     categoryCount[category] = 0;
//   }
//   categoryCount[category]++;
// });

// console.log(categoryCount);

// 12-2
// const categoryAverage = {};

// const categoryCount = {};
// const categoryTotal = {};

// products.forEach((product) => {
//   const category = product.category;
//   const price = product.price;
  
//   if (!categoryCount[category]) {
//     categoryCount[category] = 0;
//     categoryTotal[category] = 0;
//   }
  
//   categoryCount[category]++;
//   categoryTotal[category] += price;
// });

// for (const category in categoryCount) {
//   const count = categoryCount[category];
//   const total = categoryTotal[category];
//   const average = total / count;
//   categoryAverage[category] = average;
// }

// console.log(categoryAverage);

//   13
//   // 13
// const employees = [
//   { name: "John", salary: 50000, department: "IT" },
//   { name: "Jane", salary: 60000, department: "HR" },
//   { name: "Bob", salary: 55000, department: "IT" },
//   { name: "Sophie", salary: 75000, department: "HR" },
//   { name: "Mike", salary: 65000, department: "IT" },
//   { name: "Emily", salary: 80000, department: "HR" },
//   { name: "David", salary: 70000, department: "IT" },
// ];
//1

// // count the average salary of each department
// function averagePrice(employees) {
//       let a = 0;
//       let b = 0;
//       let c = 0;
//       let d = 0;
//       for (let i = 0; i < employees.length; i++) {
//           if (employees[i].department == "IT") {
//               a += employees[i].salary;
//               b++;
//               // console.log(a);
//           } else if (employees[i].department == "HR") {
//               c += employees[i].salary;
//               d++;
//               // console.log(c);
//           }
//       }
//       return { IT: a / b, HR: c / d }
//   }
//   let aveObject = averagePrice(employees);
//   console.log(aveObject);

// // 2
// function propertyCounter(arrayName) {
//       let newObject = {};
//       let IT = arrayName.filter(value => value.department == "IT");
//       let HR = arrayName.filter(value => value.department == "HR");
//       let a = arrayName.salary;
//       let b = arrayName.salary;
//       newObject.IT = a;
//       newObject.HR = b;
//       return newObject 
//   }
//   console.log(propertyCounter(employees));

// function departWiseSalary(arr) {
//   let a = arr.filter(val => val.department === "IT").map(val => val.salary)
//   let b = arr.filter(val => val.department === "HR").map(val => val.salary)
//   let c = {IT:a,HR:b};
//   return c
// }
// console.log(departWiseSalary(employees));



// -for practice-//
// const names = ["bhakti", "amit", "krishna", "jeel","amisha", "zinkal", "hiral"];

// const sortedNames = names.sort();

// const result = {};

// for (let i = 0; i < sortedNames.length; i++) {
//   const name = sortedNames[i];
//   const key = name[0].toLowerCase();

//   if (!result[key]) {
//     result[key] = name;
//   } else {
//     result[key] = `${result[key]}, ${name}`;
//   }
// }

// console.log(result);

// // 14
// function groupDataByFirstLetter(strings) {
//     const groupedData = {};
  
//     strings.forEach((str1) => {
//       const firstLetter = str1.charAt(0).toUpperCase();
//       if (groupedData[firstLetter]) {
//         groupedData[firstLetter].push(str1);
//       } else {
//         groupedData[firstLetter] = [str1];
//       }
//     });
  
//     return groupedData;
//   }
  
//   const strings = [
//     "Jeel",   "Prakhar", "Bhakti",  "Vansh", "Meghna",  "Bhaumik",   "Pujan", "Rudra","Sachin","Dhruval",
//   ];
//   const groupedData = groupDataByFirstLetter(strings);
  
//   console.log(groupedData);

// //   15
// function flat(arr) {
//     const flattened = [];
  
//     arr.forEach((item) => {
//       if (Array.isArray(item)) {
//         flattened.push(...flat(item));
//       } else {
//         flattened.push(item);
//       }
//     });
  
//     return flattened;
//   }
  
//   const nestedArray = [1, [2, [3, [4, 5], 6], 7], 8, [9, 10]];
//   const flattenedArray = flat(nestedArray);
  
//   console.log(flattenedArray);

// //   ----with depth----//
// function flat(arr, depth = 1) {
//     const flattened = [];
  
//     arr.forEach((item) => {
//       if (Array.isArray(item) && depth > 0) {
//         flattened.push(...flat(item, depth - 1));
//       } else {
//         flattened.push(item);
//       }
//     });
  
//     return flattened;
//   }
  
//   const nestedArray = [1, [2, [3, [4, 5], 6], 7], 8, [9, 10]];
//   const flattenedArray = flat(nestedArray, 2);
  
//   console.log(flattenedArray);

  
//   16
// //   ----filter-----//
// function myFilter(condition, array) {
//     const filteredArray = [];
//     for (let i = 0; i < array.length; i++) {
//       if (condition(array[i])) {
//         filteredArray.push(array[i]);
//       }
//     }
//     return filteredArray;
//   }

// //   for ex=
// const numbers = [1, 2, 3, 4, 5, 6];

// // Filter even numbers
// const filteredNumbers = myFilter((x) => x % 2 === 0, numbers);
// console.log(filteredNumbers);  // Output: [2, 4, 6]

// // Filter odd numbers
// const filteredNumbers = myFilter((x) => x % 2 !== 0, numbers);
// console.log(filteredNumbers);  // Output: [1, 3, 5]

// 17
// // ----map----//
// function myMap(transform, array) {
//     const mappedArray = [];
//     for (let i = 0; i < array.length; i++) {
//       mappedArray.push(transform(array[i]));
//     }
//     return mappedArray;
//   }

// //   for ex=
// const numbers = [1, 2, 3, 4, 5];

// // Double each number
// const doubledNumbers = myMap((x) => x * 2, numbers);
// console.log(doubledNumbers);  // Output: [2, 4, 6, 8, 10]

// // Square each number
// const squaredNumbers = myMap((x) => x * x, numbers);
// console.log(squaredNumbers);  // Output: [1, 4, 9, 16, 25]

// 18
// const input = [
//     { name: "John", salary: 50000, department: "IT" },
//     { name: "Jane", salary: 60000, department: "HR" },
//     { name: "Bob", salary: 55000, department: "IT" },
//     { name: "Bbhakti", salary: 55000, department: "IT" },
//     { name: "Sophie", salary: 75000, department: "HR" },
//     { name: "Mike", salary: 65000, department: "IT" },
//     { name: "Emily", salary: 80000, department: "HR" },
//     { name: "David", salary: 70000, department: "IT" },
//   ];
  
//   const groupedData = {};
  
//   input.forEach((item) => {
//     const firstLetter = item.name.charAt(0).toUpperCase();
//     if (!groupedData[firstLetter]) {
//       groupedData[firstLetter] = [];
//     }
//     groupedData[firstLetter].push(item);
//   });
  
//   console.log(groupedData);
  
// 18-2
// const groupedData = {};

// input.forEach((item) => {
//   const department = item.department;
//   if (!groupedData[department]) {
//     groupedData[department] = [];
//   }
//   groupedData[department].push(item);
// });

// console.log(groupedData);  

