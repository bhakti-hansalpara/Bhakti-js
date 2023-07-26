
// //1

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
//  return { ...name, full_name: name.first_name + " " + name.last_name };
//   return { ...name, age:name.city="rajkot" };0
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
//     const isMature=user.age>=18;
//     return{...user, isMature}
//   });
  
//   console.log(updatedUsers);

// // 3
// let arr = [1,2,3,5]
// console.log(arr[-1]);//==> undefined beacuse array has not -1 index

// 4

const nestedArray = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

nestedArray.forEach(subArray => {
  subArray.forEach(item => {
    console.log(item);
  });
});
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
const nestedObject = {
    name: "Vishal Kukreja",
    age: 32,
    addr:"alay",
    address: {
      street: "123 Mumbai fashion St",
      city: "Midtown",
      state: "MH",
},
    hobbies: ["reading", "drawing", "gardening"],
  };
  
  function printItems(obj) {
    let result = "";
    
    for (let key in obj) {
      if (typeof obj[key] === "object") { //(!Array.isArray(obj[key])==>when it array then give true other it gives false
        result += printItems(obj[key]);
      } else {
        result += obj[key] + "\n";
      }
    }
  
    return result;
  }
  
  console.log(printItems(nestedObject));
  
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
// function containsNumbers(array) {
//   for (let i = 0; i < array.length; i++) {
//     if (typeof array[i] === "number" && !isNaN(array[i])) {
//       return true;
//     }
//   }
//   return false;
// }

//   // Test cases
//   console.log(containsNumbers([1, 2, 3]));            // true
//   console.log(containsNumbers(["1", "a", "h"]));      // false
//   console.log(containsNumbers(["a", 3, "gh"]));       // true
//   console.log(containsNumbers(["a", 'df', "gh"]));   // false


// //arrow function
// function containsNumbers(array) {
//   return array.find(item => typeof item === "number" && !isNaN(item));
// }

// // Test cases
// console.log(containsNumbers([1, 2, 3]));            // true
// console.log(containsNumbers(["1", "a", "h"]));      // false
// console.log(containsNumbers(["a", 3, "gh"]));       // true
// console.log(containsNumbers(["a", '3df', "gh"]));   // false


// 7
// const numbers = [1, 2, 3, 4];
// const convertedNumbers = numbers.map((num) => String(num));

// console.log(convertedNumbers); // ["1", "2", "3", "4"]
// const numbers=[1,2,3,4,5];
// const convertedNumbers=numbers.map(num=>num.toString());
// console.log(convertedNumbers);//['1','2','3','4','5']

// 8
// const numbers = [1, 2, 3, 4];
// const doubled = numbers.map((num, index, array) => {
// array.push(num * 2);
// return num * 2;
// });
// console.log(numbers, doubled);
// //output-[
// //   1, 2, 3, 4,
// //   2, 4, 6, 8
// // ] [ 2, 4, 6, 8 ]  it get new array
// // 4
// [
// 	{
// 		"id": "0001",
// 		"type": "donut",
// 		"name": "Cake",
// 		"ppu": 0.55,
// 		"batters":
// 		{
// 			"batter":
// 				[
// 					{ "id": "1001", "type": "Regular" },
// 					{ "id": "1002", "type": "Chocolate" },
// 					{ "id": "1003", "type": "Blueberry" },
// 					{ "id": "1004", "type": "Devil's Food" }
// 				]
// 		},
// 		"topping":
// 			[
// 				{ "id": "5001", "type": "None" },
// 				{ "id": "5002", "type": "Glazed" },
// 				{ "id": "5005", "type": "Sugar" },
// 				{ "id": "5007", "type": "Powdered Sugar" },
// 				{ "id": "5006", "type": "Chocolate with Sprinkles" },
// 				{ "id": "5003", "type": "Chocolate" },
// 				{ "id": "5004", "type": "Maple" }
// 			]
// 	},
// 	{
// 		"id": "0002",
// 		"type": "donut2",
// 		"name": "Raised",
// 		"ppu": 0.55,
// 		"batters":
// 		{
// 			"batter":
// 				[
// 					{ "id": "1001", "type": "Regular" }
// 				]
// 		},
// 		"topping":
// 			[
// 				{ "id": "5001", "type": "None" },
// 				{ "id": "5002", "type": "Glazed" },
// 				{ "id": "5005", "type": "Sugar" },
// 				{ "id": "5003", "type": "Chocolate" },
// 				{ "id": "5004", "type": "Maple" }
// 			]
// 	},
// 	{
// 		"id": "0003",
// 		"type": "donut3",
// 		"name": "Old Fashioned",
// 		"ppu": 0.55,
// 		"batters":
// 		{
// 			"batter":
// 				[
// 					{ "id": "1001", "type": "Regular" },
// 					{ "id": "1002", "type": "Chocolate" }
// 				]
// 		},
// 		"topping":
// 			[
// 				{ "id": "5001", "type": "None" },
// 				{ "id": "5002", "type": "Glazed" },
// 				{ "id": "5003", "type": "Chocolate" },
// 				{ "id": "5004", "type": "Maple" }
// 			]
// 	},
// 	{
// 		"id": "0004",
// 		"type": "donut1",
// 		"name": "Old Fashioned",
// 		"ppu": 0.55,
// 		"batters":
// 		{
// 			"batter":
// 				[
// 					{ "id": "1001", "type": "Regular" }
// 				]
// 		},
// 		"topping":
// 			[
// 				{ "id": "5001", "type": "None" },
// 				{ "id": "5002", "type": "Glazed" },
// 				{ "id": "5003", "type": "Chocolate" },
// 				{ "id": "5004", "type": "Maple" }
// 			]
// 	}
// ]
//  1
// function toppingChocolate(array) {
//     let a = donuts.filter((value, index, arr) => {
//         let topping = value.topping;
//         for (let i = 0; i < topping.length; i++) {
//             if (topping[i].type == "Chocolate"){
//                 console.log(value.type+":");
//                 console.log(value);
//                 return value;
//             }
//         }
//     });
//     console.log(a);
//   }
//   toppingChocolate(donuts);

// console.log(toppingChocolate);


//2
// const result = donuts.filter(donut => donut.batters.batter.some(batter => batter.type === 'Regular')
//  && donut.topping.some(topping => topping.type === 'Chocolate'));

//3
// const result = donuts.filter(donut => donut.topping.some(topping => topping.type === 'Chocolate' || topping.type === 'Sugar'));

//4
// const result = donuts.filter(donut => donut.ppu > 0.5);

//5
// const result = [].concat(...donuts.map(donut => donut.batters.batter));

//6
// const result = donuts.filter(donut => donut.batters.batter.length >= 2);

// console.log(result);


// --------Q 10--------//
//Get name initials
// input = "George Raymond Richard Martin"; Output: “GRRM”
// input = “george raymond Richard Martin”; Output: “ GRRM”

// function FirstName(name) {
//     const words = name.split(" ");
//     const res = words.map(word => word[0].toUpperCase()).join("");
//     return res;
//   }
  
//   const name1 = "George Raymond Richard Martin";
//   const res = FirstName(name1);
//   console.log(res); // Output: "GRRM"

// let string="George Raymond Richard Martin";
// let result=string.split(" ").map((words)=>words.charAt(0)).join("").toUpperCase(0);
// console.log(result);


  
// function generateInitials(name) {
//     const words = name.split(" ");
//     const initials = words.map(word => word[0].toUpperCase()).join("");
//     return initials;
//   }
//   const name2 = "george raymond Richard Martin";
//   const initials2 = generateInitials(name2);
//   console.log(initials2); // Output: " GRRM"


//   ------ Q 11-------//
//Get output like example
// input = "Every developer likes to mix kubernetes and javascript";
// output = "E3y d7r l3s to mix k8s and j8t"


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
  
//   const sentence = "Every developer likes to mix kubernetes and javascript";
//   const convertedSentence = convertToNumbers(sentence);
//   console.log(convertedSentence);
  
// //   -------Q 12--------//

// const products = [


// function convertToNumbers(sentence) {
//     const words = sentence.split(" ");
//     const convertedWords = [];
    
//     for (let i = 0; i < words.length; i++) {
//       const word = words[i];
      
//       if (word.length <= 2) {
//         convertedWords.push(word); // Do not convert if word has 2 or fewer characters
//       } else {
//         const firstChar = word[0];
//         const lastChar = word[word.length - 1];
//         const middleChars = (word.length - 2).toString();
//         const convertedWord = `${firstChar}${middleChars}${lastChar}`;
//         convertedWords.push(convertedWord);
//       }
//     }
    
//     return convertedWords.join(" ");
//   }
  
//   const sentence = "Every developer likes to mix kubernetes and javascript";
//   const convertedSentence = convertToNumbers(sentence);
//   console.log(convertedSentence);

// --or 11--
// function shortenWords(sentence) {
//   let words = sentence.split(' ');
//   let result = words.map(word => {
//     if (word.length > 3) {
//       return word.charAt(0) + (word.length - 2) + word.charAt(word.length - 1);
//     } else {
//       return word;
//     }
//   });
//   return result.join(' ');
// }
// let input = "Every developer likes to mix kubernetes and javascript";
// let output = shortenWords(input);
// console.log(output); // Output: "E3y d7r l3s to mix k8s and j8t"

// ----Q-12----//

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

//count the total average of each category price.
// function makeNewObject(arrayName){
//     let newObject={};

// }


  
// ------Q 13-----//

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

function departWiseSalary(arr) {
  let a = arr.filter(val => val.department === "IT").map(val => val.salary)
  let b = arr.filter(val => val.department === "HR").map(val => val.salary)
  let c = {IT:a,HR:b};
  return c
}
console.log(departWiseSalary(employees));

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


//   ------------?---------------//
//when null and undefined it not give any error it will run
// const obj = {
//     a: {
//       b: [
//         { name: "Jenny" },
//         { name: "Janu" },
//         { name: "jenisha" }
//       ]
//     }
//   };
  
//   const names = obj?.a?.b?.map(item => item.name);
//   console.log(names);
  
// // 14
//
// Make a function that returns the grouped data based on first letter of the string.
// For Example: [“Jeel” , “Prakhar” , “Bhakti”, “Vansh”, “Meghna”, “Bhaumik”, “Pujan”, “Rudra”, “Sachin” , “Dhruval”]
// Output: {
// 		J: [“Jeel”],
// 		P: [“Pakhar”, “Pujan”],
// 		B: [“Bhakti”, “Bhaumik”],
// 		…….. And so on
// 	    }

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
//     "Jeel",
//     "Prakhar",
//     "Bhakti",
//     "Vansh",
//     "Meghna",
//     "Bhaumik",
//     "Pujan",
//     "Rudra",
//     "Sachin",
//     "Dhruval",
//   ];
//   const groupedData = groupDataByFirstLetter(strings);
  
//   console.log(groupedData);

// //   15
//
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
//   s@3culum16

// //   for ex=
// const numbers = [1, 2, 3, 4, 5];

// // Double each number
// const doubledNumbers = myMap((x) => x * 2, numbers);
// console.log(doubledNumbers);  // Output: [2, 4, 6, 8, 10]

// Square each number
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

//19
// let arr1 = [{a: 34}, {a: 45}, {a:12}, {a:5}, {a:78}];
// 	let arr2 = arr1.map(item => item);
// 	arr2[2].b = 45;
// console.log(arr1);  // => [{a: 34}, {a: 45}, {a:12}, {a:5}, {a:78}]
// 	console.log(arr2);  // =>[ { a: 34 }, { a: 45 }, { a: 12, b: 45 }, { a: 5 }, { a: 78 } ]
//my guss is  [{a: 34}, {a: 45}, {a:12}, {a:5}, {a:78}] it is wrong
//beacuse when we change in index then it change but when we change in full array than it not change beacse we pass refrence


//20
// let arr1 = [{a: 34}, {a: 45}, {a:12}, {a:5}, {a:78}];
// 	let arr2 = arr1.map(item => item.a * 2);
// console.log(arr1);  // => [{a: 34}, {a: 45}, {a:12}, {a:5}, {a:78}]
// 	console.log(arr2);  // =>[68,90,24,10,156]
//   my guss is right
//   it *2 all the a in arr beacse the map method all are * by 2

  //21
// let arr = [1,2,3,4,5];
// let arr2 = arr.reduce((a, c) => a + c).map(item => item);
// console.log(arr2); // =>error
//reduce is return value and map is work on array then map have not get any array it give value than it not run it give error

//22
// const example = ({ a, b, c }) => {
//   console.log(a, b, c);  
//   };
//   example(0, 1, 2);// =>undefiend undefined undefined
  //beacuse of distrucring of object

//23
// Find the Sum of Squares 
// let arr = [1,2,3,4,5] => ans : 55

  // let arr=[1,2,3,4,5];
  // let result=arr.reduce((acc,cur)=>{
  //   return acc+cur*cur;
  // },0);
  // console.log(result); //=>55

//24
// const students = [
//   { name: 'Alice', age: 20, grade: 'A' },
//   { name: 'Bob', age: 18, grade: 'D' },
//   { name: 'Charlie', age: 19, grade: 'A' },
//   { name: 'David', age: 20, grade: 'c' },
// ];
	// => sort by age
  // students.sort((a,b)=>a.age-b.age);
  // console.log(students);

//=>sort by grade
// --1st take--//
// students.sort((a,b)=>{
//   const gread={
//     A:1,
//     B:2,
//     C:3,
//     // D:4,
//   };
//   return gread[a.grade]-gread[b.grade]
// });
// console.log(students);
// ---2nd take---//
// function sortByGrade(array) {
//     let res = array.sort((a,b) => a.grade.charCodeAt(0) - b.grade.charCodeAt(0));
//     return res;
// }
// console.log(sortByGrade(students));
//---3rd take---//
// const students = [
//   { name: 'Alice', age: 20, grade: 'A' },
//   { name: 'Bob', age: 18, grade: 'B' },
//   { name: 'Charlie', age: 19, grade: 'D' },
//   { name: 'David', age: 20, grade: 'C' },
// ];

// students.sort((a, b) => {
//   const gradeOrder = ['A', 'B', 'C']; // Specify the desired order of grades

//   const gradeIndexA = gradeOrder.indexOf(a.grade);
//   const gradeIndexB = gradeOrder.indexOf(b.grade);

//   return gradeIndexA - gradeIndexB;
// });

// console.log(students);
//it not vaild for other input it is fix//

//sort name
// const students = [
//   { name: 'Alice', age: 20, grade: 'A' },
//   { name: 'Bob', age: 18, grade: 'B' },
//   { name: 'Charlie', age: 19, grade: 'A' },
//   { name: 'David', age: 20, grade: 'C' },
// ];

// students.sort((a, b) => {
//   const nameA = a.name.toLowerCase();
//   const nameB = b.name.toLowerCase();

//   if (nameA < nameB) {
//     return -1;
//   }
//   if (nameA > nameB) {
//     return 1;
//   }
//   return 0;
// });

// console.log(students);

//avg of age
// const students = [
//   { name: 'Alice', age: 20, grade: 'A' },
//   { name: 'Bob', age: 18, grade: 'B' },
//   { name: 'Charlie', age: 19, grade: 'A' },
//   { name: 'David', age: 20, grade: 'C' },
// ];

// const totalAges = students.reduce((sum, student) => sum + student.age,0);
// const averageAge = totalAges / students.length;

// console.log(averageAge);

//sum of ages
// const students = [
//   { name: 'Alice', age: 20, grade: 'A' },
//   { name: 'Bob', age: 18, grade: 'B' },
//   { name: 'Charlie', age: 19, grade: 'A' },
//   { name: 'David', age: 20, grade: 'C' },
// ];
// const sumAge=students.reduce((sum,student)=>sum+student.age,0);
// console.log(sumAge);

//25
//const nestedArray = [[1, 2], [3, 4], [5, 6]];
// => flat this array using reduce (NOTE: array will be only depth 1)
// const nestedArray = [[1, 2], [3, 4], [5, 6]];
// => flat this array using reduce
// ---1st take---//
// const nestedArray = [[1, 2], [3, 4], [5, 6]];
// const flattenedArray = nestedArray.reduce((acc, current) => [...acc, ...current], []);
// console.log(flattenedArray);


// ---2nd take---//
// const nestedArray = [[1, 2], [3, 4], [5, 6]];
// const flattenedArray = nestedArray.reduce((acc, current) => acc.concat(current), []);
// console.log(flattenedArray);


//26
//Create an array of squares of even numbers from a given array.
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

// Create an array of squares of even numbers from a given array.
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
// const evenSquares = numbers.filter(num => num % 2 === 0).map(num => num ** 2); 
// console.log(evenSquares);

// ---using reduce---//
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
// const evenSquares = numbers.reduce((result, num) => {
//   if (num % 2 === 0) {
//     result.push(num ** 2);
//   }
//   return result;
// }, []);
// console.log(evenSquares);

//27
//Filter out duplicate values from an array.
// const numbers = [1, 2, 2, 3, 4, 4, 5];

// const numbers = [1, 2, 2, 3, 4, 4, 5];

// const repeat = numbers.filter((value, index, arr) => {
//   return arr.indexOf(value) === index;
// });
// console.log(repeat);

//28
//
// Find the first string that contains the letter 'a' in an array.
// const words = ['apple', 'banana', 'orange'];

//
// ---1st take---//
// const words = ['apple', 'banana', 'orange'];

// const result = words.find(word => {
//   for (let i = 0; i < word.length; i++) {
//     if (word[i] === 'a') {
//       return true;
//     }
//   }
//   return false;
// });
// console.log(result);

// // ---2nd take---//
// const words = ['apple', 'banana', 'orange'];
// const words=["bhkti","bhakti"]
// const result = words.find(word => word.includes('a'));
// console.log(result);

//29
//Find the index of the first odd number in an array.
// const numbers = [2, 4, 6, 8, 9, 10];

// Find the index of the first odd number in an array.
// const numbers = [2, 4, 6, 8, 9, 10];
// const result = words.find(word => {
//   for (let i = 0; i < word.length; i++) {
//     if (numbers%2===0) {
//       return true;
//     }
//   }
//   return numbers.findIndex(numbers);
// });
// console.log(result);
//it not work

// const numbers = [2, 4, 6, 8,9, 10];
// const oddIndex = numbers.findIndex(number => number % 2 !== 0);
// console.log(oddIndex);

// const numbers = [2, 4, 6, 8,10];
// const oddIndex=numbers.reduce((value,index,array)=>{value=>numbers%2!==0;return array})
// console.log(oddIndex);
//in reduce when you not defind odd number than it not give undefined it give last number index

//30
//Write a function that returns the factorial of given number
// ------using recreusen----//
// function factorial(n){
//   if(n < 0){
//       return "number is negitive please enter posstive number."
//   }

//   if(n == 0 || n == 1){
//       return 1;
//   }else{
//       return n * factorial(n-1);
//   }
// }
// let n = -5;
// answer = factorial(n)
// console.log("Factorial of " + n + " : " + answer);


// ---using if else if------//
// function factorial(n){
//   let answer = 1;
//   if (n == 0 || n == 1){
//     return answer;
//   }
//   else if(n > 1){
//     for(var i = n; i >= 1; i--){
//       answer = answer * i;
//     }
//     return answer;
//   }
//   else{
//     return "number has to be positive."
//   }  
// }
// let n = 4;
// answer = factorial(n)
// console.log("Factorial of " + n + " : " + answer);

//31
//Find the index of the first person whose name starts with 'A' and age is less than 20.
// const people = [
//   { name: 'Alice', age: 18 },
//   { name: 'Bob', age: 20 },
//   { name: 'Charlie', age: 19 },
//   { name: 'David', age: 21 }
// ];

// Find the index of the first person whose name starts with 'A' and age is less than 20.
// -1st take-//
// const people = [
//   { name: 'Alice', age: 18 },
//   { name: 'Bob', age: 20 },
//   { name: 'Charlie', age: 19 },
//   { name: 'David', age: 21 }
// ];
// for (let i = 0; i < people.length; i++) {
//   const person = people[i];
//   if (person.name.startsWith('A') && person.age < 20) {
//     index = i;
//     break; // Found the first matching person, exit the loop
//   }
// }
// console.log(people);
// ----2nd take-----//
// const people = [
 
//   { name: 'Bob', age: 20 },
//   { name: 'Charlie', age: 19 },
//   { name: 'Alice', age: 18 },
//   { name: 'David', age: 21 }
// ];
// function findIndex(arr) {
//   let res = arr.reduce((a,b,c)=>{
//       if (b.name.charAt(0) === "A" && b.age <= 20) {
//           return c;
//       }
//       return a;
//   },"")
//   return res;
// }  
// console.log(findIndex(people));
// ----3rd take-------//
// const people = [
//   { name: 'Alice', age: 18 },
//   { name: 'Bob', age: 20 },
//   { name: 'Charlie', age: 19 },
//   { name: 'David', age: 21 }
// ];

// const index = people.findIndex(person => person.name.startsWith('A') && person.age <20);
// console.log(index);


// //32

// make a function that takes two parameter (arrayOfArray, array) and returns boolean based on following example:

// fun_name([[1, 2], [34, 67], [67, 77], [88, 90]], [1, 2]) => true
// fun_name([[1, 2], [34, 67], [67, 77], [88, 90]], [2, 1]) => true
// fun_name([[1, 2], [34, 67], [67, 77], [88, 90]], [22, 15]) => false
// fun_name([[1, 2], [34, 67], [67, 77], [22, 90, 15], [88, 90]], [22, 15, 90]) => true

// function containsSubarray(arrayOfArray, array) {
//   return arrayOfArray.some((subarray) => {
//     if (subarray.length !== array.length) {
//       return false;
//     }
//     return subarray.every((value, index) => value === array[index]);
//   });
// }

// console.log(containsSubarray([[1, 2], [34, 67], [67, 77], [88, 90]], [1, 2])); // Output: true
// console.log(containsSubarray([[1, 2], [34, 67], [67, 77], [88, 90]], [2, 1])); // Output: true
// console.log(containsSubarray([[1, 2], [34, 67], [67, 77], [88, 90]], [22, 15])); // Output: false
// console.log(containsSubarray([[1, 2], [34, 67], [67, 77], [22, 90, 15], [88, 90]], [22, 15, 90])); // Output: true


// //33
//make a function that takes two parameter (arrayOfArray, array) and returns boolean based on following example:
//
// fun_name([[1, 2], [34, 67], [67, 77], [88, 90]], [1, 2]) => true
// fun_name([[1, 2], [34, 67], [67, 77], [88, 90]], [2, 1]) => false
// fun_name([[1, 2], [34, 67], [67, 77], [88, 90]], [22, 15]) => false
// fun_name([[1, 2], [34, 67], [67, 77], [22, 90, 15], [88, 90]], [22, 15, 90]) => false

// function containsSubarray(arrayOfArray, array) {
//   return arrayOfArray.some((subarray) => {
//     return subarray.length === array.length && subarray.every((value, index) => value === array[index]);
//   });
// }

// console.log(containsSubarray([[1, 2], [34, 67], [67, 77], [88, 90]], [1, 2])); // Output: true
// console.log(containsSubarray([[1, 2], [34, 67], [67, 77], [88, 90]], [2, 1])); // Output: false
// console.log(containsSubarray([[1, 2], [34, 67], [67, 77], [88, 90]], [22, 15])); // Output: false
// console.log(containsSubarray([[1, 2], [34, 67], [67, 77], [22, 90, 15], [88, 90]], [22, 15, 90])); // Output: false


//34
//
// Write a JavaScript program to compute the union of two arrays.
// Sample Data :
// console.log(union([1, 2, 3], [100, 2, 1, 10]));
// Output: [1, 2, 3, 10, 100]

// function union(arr1, arr2) {
//   const mergedArray = [arr1, arr2].flat();
//   const unionArray = [...new set(mergedArray)];
//   return unionArray;
// }

// console.log(union([1, 2, 3], [100, 2, 1, 10]));
// Output: [1, 2, 3, 10, 100]//it is not work

// function union(arr1, arr2) {
//   const mergedArray = arr1.concat(arr2).flat();
//   const unionArray = mergedArray.filter((value, index, array) => array.indexOf(value) === index);
//   return unionArray;
// }

// console.log(union([1, 2, 3], [100, 2, 1, 10]));
// Output: [1, 2, 3, 10, 100]


// //35

// Write a JavaScript function to find the difference between two arrays.
// Test Data :
// console.log(difference([1, 2, 3], [100, 2, 1, 10]));
// Output: ["3", "10", "100"]
// console.log(difference([1, 2, 3, 4, 5], [1, [2], [3, [[4]]],[5,6]]));
// Output: ["6"]
// console.log(difference([1, 2, 3], [100, 2, 1, 10]));
// Output: ["3", "10", "100"]

// function difference(arr1, arr2) {
//   const diffArray = arr1.filter((value) => !arr2.includes(value));
//   const diffArray2 = arr2.filter((value) => !arr1.includes(value));
//   return diffArray.map((value) => value.toString());
// }

// console.log(difference([1, 2, 3], [100, 2, 1, 10]));
// Output: ["3", "10", "100"]//=>not work give only 3

// function difference(arr1, arr2) {
//   const diffArr1 = arr1.filter(item => !arr2.includes(item));
//   const diffArr2 = arr2.filter(item => !arr1.includes(item));
//   let arr3= diffArr1.concat(diffArr2);
//   return arr3;
// }

// // Testing the function
// console.log(difference([1, 2, 3], [100, 2, 1, 10]));
// console.log(difference([1, 2, 3, 4, 5], [1, [2], [3, [[4]]],[5,6]]))

// ->
// function difference1(arr1, arr2) {
//     // Flatten the arrays to a single level
//     const flattenedArr1 = arr1.flat(Infinity)

//     const flattenedArr2 = arr2.flat(Infinity)


//     // Find the elements that are present in arr2 but not in arr1
//     const difference = flattenedArr2.filter((elem) => !flattenedArr1.includes(elem));

//     return difference;
//   }
//   console.log(difference1([1, 2, 3], [100, 2, 1, 10]));
//   console.log(difference1([1, 2, 3, 4, 5], [1, [2], [3, [[4]]], [5, 6]]));
//   // Output: ["6"]
// function difference(arr1, arr2) {
//   const diffArray = arr1.filter(item => !arr2.includes(item));
//   return diffArray.map(item => item.toString());
// }

// console.log(difference([1, 2, 3], [100, 2, 1, 10]));



// //2nd
// function difference(arr1, arr2) {
//   const flattenedArr1 = arr1.flat(Infinity);
//   const flattenedArr2 = arr2.flat(Infinity);

//   const diffArray = flattenedArr1.filter((value) => !flattenedArr2.includes(value));
//   let arr3=flattenedArr1.concat(flattenedArr2);
//   return arr3;
// }

// console.log(difference([1, 2, 3, 4, 5], [1, [2], [3, [[4]]],[5,6]]));



// Output: ["3", "10", "100"]

//36
// /Write a JavaScript program to find a pair of elements (indices of the two numbers) in a given array whose sum equals a specific target number.
// (FOR NOW CONSIDER THERE ARE ONLY ONE PAIR WHICH IS POSSIBLE SOLUTION)
// Input: numbers= [10,20,10,40,50,60,70], target=50
// Output: [10, 40] || [40,10]

// function findPair(numbers, target) {
//   const pair = [];

//   for (let i = 0; i < numbers.length; i++) {
//     for (let j = i + 1; j < numbers.length; j++) {
//       if (numbers[i] + numbers[j] === target) {
//         pair.push(numbers[i], numbers[j]);
//         break;
//       }
//     }
//     if (pair.length) {
//       // break;
//       continue;
//     }
//   }

//   return pair;
// }

// const numbers = [10, 20, 10, 40, 50, 60, 70];
// const target = 50;

// const result = findPair(numbers, target);
// console.log(result);


// function findPair(numbers, target) {
//   const pair = [];

//   for (let i = 0; i < numbers.length; i++) {
//     for (let j = i + 1; j < numbers.length - 1; j++) {
//       if (numbers[i] + numbers[j] === target) {
//         return [numbers[i], numbers[j]];
//       }
//     }
//   }

//   return null;
// }

// const numbers = [10, 20, 10, 40, 50, 60, 70];
// const target = 50;

// const result = findPair(numbers, target);
// console.log(result);


//37
//
// Sample array : [NaN, 0, 15, false, -22, '',undefined, 47, null]
// Expected result : [15, -22, 47]

// const array = [NaN, 0, 15, false, -22, '', undefined, 47, null];
// const result = array.filter(Number);
// console.log(result);
// Output: [15, -22, 47]

//38
//Write a function that returns the result like examples
// num_string_range('a', "z", 2) => ["a", "c", "e", "g", "i", "k", "m", "o", "q", "s", "u", "w", "y"]
// num_string_range("Z", "A", 2) => ["Z", "X", "V", "T", "R", "P", "N", "L", "J", "H", "F", "D", "B"]
// num_string_range(0, -5, 1) => [0, -1, -2, -3, -4, -5]
// num_string_range(0, 25, 5) => [0, 5, 10, 15, 20, 25]
// num_string_range(20, 5, 5) => [20, 15, 10, 5]

// function num_string_range(start, end, step) {
//   const range = [];
//   const startCode = start.charCodeAt(0);
//   const endCode = end.charCodeAt(0);

//   for (let i = startCode; i <= endCode; i += step) {
//     range.push(String.fromCharCode(i));
//   }

//   return range;
// }

// console.log(num_string_range('a', 'z', 2));
// console.log(num_string_range('A','Z',2));
// console.log(num_string_range(0,-5,1));//==>it not work in same code

// function num_string_range(start, end, step) {
//   const range = [];
//   const isAscending = start <= end;

//   if (isAscending) {
//     for (let i = start; i <= end; i += step) {
//       range.push(i);
//     }
//   } else {
//     for (let i = start; i >= end; i -= step) {
//       range.push(i);
//     }
//   }

//   return range;
// }

// console.log(num_string_range(0, -5, 1));    // [0, -1, -2, -3, -4, -5]
// console.log(num_string_range(0, 25, 5));    // [0, 5, 10, 15, 20, 25]
// console.log(num_string_range(20, 5, 5));    // [20, 15, 10, 5]

// //39
// function remove_array_element(arr, element) {
//   return arr.filter(item => item !== element);
// }

// console.log(remove_array_element([2, 5, 9, 6], 5));


//39
// Write a JavaScript function to remove a specific element from an array.
// Test data :
// remove_array_element([2, 5, 9, 6], 5); => [2, 9, 6]

// function contains(arr, element) {
//   return arr.includes(element);
// }

// const arr = [2, 5, 9, 6];
// console.log(contains(arr, 5));
// // Output: true

// console.log(contains(arr, 10));
// Output: false


//40
// Write a JavaScript function to find an array containing a specific element.
// Test data : (ONLY FOR STRING AND NUMBER)
// arr = [2, 5, 9, 6];
// contains(arr, 5); => True
// contains(arr, 10); => False

// function countArrays(arr) {
//   let count = 0;

//   function checkArray(element) {
//     if (Array.isArray(element)) {
//       count++;
//       element.find(checkArray);
//     }
//   }

//   arr.find(checkArray);
//   return count;
// }

// console.log(countArrays([2, 8, [6], 3, 3, 5, 3, 4, [5, 4]])); // 2
// console.log(countArrays([2, 8, [6, 3, 3], [4], 5, [3, 4, [5, 4]]])); // 3 //==>it is not work in nested array it give 4
// console.log(countArrays([2,8,[6],3,3,5,3,4,[5,4]]));
// console.log(countArrays([2,8,[6,3,3],[4],5,[3,4,[5,4]]]  ));
// console.log(countArrays([2,8,[6,3,3],[4],5,[3,4,[5,4]], [23,56]]));
// console.log(countArrays([1,5,2,6,4,23,89]));


// function countArrays(arr) {
//   const count = arr.filter(item => Array.isArray(item)).length;//==>what is length in this what is use it
//   return count;
// }

// console.log(countArrays([2, 8, [6, 3, 3], [4], 5,[1,2,5,8], [3, 4, [5, 4]]])); // 3



// 41---------------------------------------------------------------------------------------

// Write a JavaScript program to count the number of arrays inside a given array.
// Test Data :
// ([2,8,[6],3,3,5,3,4,[5,4]]) -> 2
// ([2,8,[6,3,3],[4],5,[3,4,[5,4]]]) -> 3

//   function countArrays(arr) {
//     let count = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (Array.isArray(arr[i])) {
//             count++;
//         }
//     }
//     return count;
// }

//   console.log(countArrays([2, 8, [6], 3, 3, 5, 3, 4, [5, 4]])); 
//   console.log(countArrays([2, 8, [6, 3, 3], [4], 5, [3, 4, [5, 4]]])); 

// 42
// Write a JavaScript program to find the maximum length of arrays inside a given array.
// Test Data :
// [2,8,[6],3,3,5,3,4,[5,4]] -> 2
// [2,8,[6,3,3],[4],5,[3,4,[5,4]]] -> 3
// [2,8,[6,3,3],[4],5,[3,4,[5,4]], [23,56]] -> 4
// [1,5,2,6,4,23,89] -> 0

// function findMaxLength(arr) {
//     const subarrays = arr.filter(Array.isArray);
//     const lengths = subarrays.map(subarray => subarray.length);
//     const maxLength = lengths.reduce((max, length) => Math.max(max, length), 0);
//     return maxLength;
//   }
  
//   console.log(findMaxLength([2, 8, [6], 3, 3, 5, 3, 4, [5, 4]])); 
//   console.log(findMaxLength([2, 8, [6, 3, 3], [4], 5, [3, 4, [5, 4]]])); 
//   console.log(findMaxLength([2, 8, [6, 3, 3], [4], 5, [3, 4, [5, 4]], [23, 56]])); 
//   console.log(findMaxLength([1, 5, 2, 6, 4, 23, 89])); 

// //43

// Write a JavaScript program to check if an array is a factor chain or not.
// A factor chain is an array in which the previous element is a factor of the next    consecutive element. The following is a factor chain:
// [2, 4, 8, 16, 32]
// // 2 is a factor of 4  // 4 is a factor of 8  // 8 is a factor of 16  // 16 is a factor of 32
// Test Data :
// ([2, 4, 8, 16, 32]) -> true          ([2, 4, 16, 32, 68]) -> false
// ([2, 4, 16, 32, 64]) -> true

// function isFactorChain(arr) {
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] % arr[i - 1] !== 0) {
//       return false;
//     }
//   }
//   return true;
// }

// console.log(isFactorChain([2, 4, 8, 16, 32]));  // true
// console.log(isFactorChain([2, 4, 16, 32, 68])); // false
// console.log(isFactorChain([2, 4, 16, 32, 64])); // true

// let obj1 = { a: 23, b: 45 };
// let arr1 = [{ ...obj1 }];
// let arr2 = Object.assign([], arr1);
// arr2[0].c = 5;
// console.log(arr1); 









