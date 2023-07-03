
    // Write a code that adds new key in each object named 
//    output= full_name: first_name + last_name
// --------usinf find----------//
const names = [
    {first_name: "Handnm", last_name: "L demo"},
    {first_name: "Q Wei", last_name: "Alxezx"},
    {first_name: "Pqwern", last_name: "Ruse"},
    {first_name: "Wiruyn", last_name: "Ruby"},
    {first_name: "Erpso", last_name: "Loal"},
    {first_name: "Demors", last_name: "Poet"},
    {first_name: "Aleos", last_name: "Lkeu"},
];

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

const index = names.findIndex(name => {
    return name.first_name + name.last_name;
});

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

9
//1st   filter donuts based on which have topping  Chocolate
const donuts = [
    {
      "id": "0001",
      "type": "donut",
      "name": "Cake",
      "ppu": 0.55,
      "batters": {
        "batter": [
          { "id": "1001", "type": "Regular" },
          { "id": "1002", "type": "Chocolate" },
          { "id": "1003", "type": "Blueberry" },
          { "id": "1004", "type": "Devil's Food" }
        ]
      },
      "topping": [
        { "id": "5001", "type": "None" },
        { "id": "5002", "type": "Glazed" },
        { "id": "5005", "type": "Sugar" },
        { "id": "5007", "type": "Powdered Sugar" },
        { "id": "5006", "type": "Chocolate with Sprinkles" },
        { "id": "5003", "type": "Chocolate" },
        { "id": "5004", "type": "Maple" }
      ]
    },
    // Rest of the donuts
  ];
  
//   const donutIndex = donuts.findIndex(donut => {
//     return donut.topping.find(topping => topping.type === "Chocolate");
//   });
  
//   const donutWithChocolateTopping = donuts[donutIndex];
  
//   console.log(donutWithChocolateTopping);
  
// 2nd
9-b
const A = donuts.find(donut => {
    const hasRegularBatter = donut.batters.batter.some(batter => batter.type === "Regular");
    const hasChocolateTopping = donut.topping.some(topping => topping.type === "Chocolate");
    return hasRegularBatter && hasChocolateTopping;
  });
  console.log(A);

  or// const filter = donut.filter(donut => {
    //     const a = donut.batters.batter.find(batter => batter.type === "Regular");
    //     const b = donut.topping.find(topping => topping.type === "Chocolate");
    //     return a && b;
    //   });
      
    //   console.log(filter)

9-d
const result = donuts.filter(donut => donut.ppu > 0.5);

9-e
const result = [].concat(...donuts.filter(donut => donut.batters.batter));

9-f
const result = donuts.filter(donut => donut.batters.batter.length >= 2);
console.log(result);
  
 

10
// Function to get name initials
function getNameInitials(name) {
    const words = name.split(" ");
  
    // Find the index of the first word that starts with a capital letter
    const startIndex = words.findIndex(word => /[A-Z]/.test(word[0]));
  
    if (startIndex === -1) {
      return ""; // Return an empty string if no word starts with a capital letter
    }
  
    // Find the initials using the first character of each word starting from the startIndex

    const initials = words.slice(startIndex).map(word => word[0].toUpperCase());
  
    return initials.join("");
  }
  
  // Example usage
  const name1 = "George Raymond Richard Martin";
  console.log(getNameInitials(name1)); // Output: "GRRM"
  
  const name2 = "george raymond Richard Martin";
  console.log(getNameInitials(name2)); // Output: "GRRM"

  11
  const products = [
    { name: "Product 1", price: 20, category: "Electronics" },
    { name: "Product 2", price: 30, category: "Clothes" },
    { name: "Product 3", price: 40, category: "Electronics" },
    { name: "Product 4", price: 50, category: "Clothes" },
    { name: "Product 5", price: 60, category: "Clothes" },
    { name: "Product 5", price: 60, category: "Clothes" },
    { name: "Product 5", price: 60, category: "Clothes" },
    { name: "Product 6", price: 70, category: "Electronics" },
    { name: "Product 7", price: 80, category: "Clothes" },
    { name: "Product 8", price: 90, category: "Electronics" },
  ];
  
  function countCategories(products) {
    const categoryCount = {};
  
    products.forEach((product) => {
      const { category } = product;
      const categoryIndex = Object.keys(categoryCount).findIndex(
        (key) => key === category
      );
  
      if (categoryIndex === -1) {
        categoryCount[category] = 1;
      } else {
        categoryCount[category] += 1;
      }
    });
  
    return categoryCount;
  }
  
  const output = countCategories(products);
  console.log(output);
  
  13
  // 13
// const employees = [
//   { name: "John", salary: 50000, department: "IT" },
//   { name: "Jane", salary: 60000, department: "HR" },
//   { name: "Bob", salary: 55000, department: "IT" },
//   { name: "Sophie", salary: 75000, department: "HR" },
//   { name: "Mike", salary: 65000, department: "IT" },
//   { name: "Emily", salary: 80000, department: "HR" },
//   { name: "David", salary: 70000, department: "IT" },
// ];

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

// count the average salary of each department
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

const name=["bhakti","amit","krishna","jeel","zinkal","hiral"];
output={
    a:amit
    b:bhakti
    k:krishna
    j:jeel
    H:hiral
    z:zinkal
}
  
const names = ["bhakti", "amit", "krishna", "jeel", "zinkal", "hiral"];

const result = names.reduce((obj, name) => {
  obj[name[0].toLowerCase()] = name;
  return obj;
}, {});

console.log(result);

const names = ["bhakti", "amit", "krishna", "jeel", "zinkal", "hiral","manav","Amisha"];

const result = names.reduce((obj, name) => {
  obj[name[0].toLowerCase()] = name;
  return obj;
}, {});

const sortedResult = Object.keys(result).sort().reduce((sortedObj, key) => {
  sortedObj[key] = result[key];
  return sortedObj;
}, {});

console.log(sortedResult);


let names = ["amit", "ram", "akshay", "bhavesh", "mitesh", "chetan", "rudra", "zebra", "yak", "Zinda"];
let output = {};

names.forEach((name) => {
  const firstLetter = name[0].toLowerCase();

  if (output[firstLetter]) {
    output[firstLetter].push(name);
  } else {
    output[firstLetter] = [name];
  }
});

console.log(output);

const names = ["bhakti", "amit", "krishna","amisha", "jeel", "zinkal", "hiral"];

const sortedNames = names.sort();

const result = {};

sortedNames.map(name => {
  const key = name[0].toLowerCase();
  result[key] = name;
});

console.log(result);

const names = ["bhakti", "amit", "krishna", "jeel","amisha", "zinkal", "hiral"];

const sortedNames = names.sort();

const result = {};

for (let i = 0; i < sortedNames.length; i++) {
  const name = sortedNames[i];
  const key = name[0].toLowerCase();

  if (!result[key]) {
    result[key] = name;
  } else {
    result[key] = `${result[key]}, ${name}`;
  }
}

console.log(result);

