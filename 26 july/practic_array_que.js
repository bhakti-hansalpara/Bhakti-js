// // Write a program to check if an array contains any number (strictly) or not.
// // Input:  [1,2,3] => true
// // [“1”, “a”, “h”] => false
// // [“a”, 3, “gh”] => true
// // [“a”, ‘3df’, “gh”] => false

// function input(value){
//     if(typeof input=='number'){
//         return true
//     }
//     return false
// }
// console.log(input(['bhv', 3, 'gh','67'])) 
   

// const num = [1, 2, 3, 4];

// function str(arr) {
//     return arr.map(item => String(item));
// }

// const result = str(num);
// console.log(result); // Output: ["1", "2", "3", "4"]

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
// //   Note: 2 questions
// //   Que1 => output: 
// //       {
// //      Clothes: 4,
// //      Electronics: 4
// //       }
  
//     // function makeNewObject(arrayName){
//     //      let newObject={};
//     //     let Clothes=arrayName.filter(value=>value.category=='Clothes');
//     //     console.log(Clothes);
//     //     let Electronics=arrayName.filter(value=>value.category=='Electronics');
//     //     let a=Clothes.length;
//     //     let b=Clothes.length;
//     //     newObject.Clothes=a;
//     //     newObject.Electronics=b;
//     //     return newObject;
//     // }
//     // let newObj = makeNewObject(products);
//     // console.log(newObj);
//   //   Que 2 => count the total average of each category price.

//   function calculateAveragePriceByCategory(arrayName) {
//     let result = {};

//     arrayName.forEach(product => {
//         result[product.category] = (result[product.category] || 0) + product.price;
//     });

//     arrayName.forEach(product => {
//         result[product.category] /= productCountByCategory[product.category];
//     });

//     return result;
// }

// let averagePriceByCategory = calculateAveragePriceByCategory(products);
// console.log(averagePriceByCategory);



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

// const nestedArray = [[1, 2], [3, 4], [5, 6]];
// => flat this array using reduce

// const nestedArray = [[1, 2], [3, 4], [5, 6]];
// const flattenedArray = nestedArray.reduce((acc, current) => [...acc, ...current], []);
// console.log(flattenedArray);

// Create an array of squares of even numbers from a given array.
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
// const a=numbers.filter((num)=>{
//     return num%2==0
// })
// const b=a.map((num)=>{
//     return num*num
// })
// console.log(b);


// Filter out duplicate values from an array.
// const numbers = [1, 2, 2, 3, 4, 4, 5];

// const repeat = numbers.filter((value, index, arr) => {
//     return arr.indexOf(value) === index;
//   });
//   console.log(repeat);

// Find the first string that contains the letter 'a' in an array.
// const words = ['apple', 'banana', 'orange'];
// const a=words.find((name)=>{
//     return (name.charAt(0)=='a')
// })
// console.log(a);

// Find the index of the first odd number in an array.
// const numbers = [6, 4, 8, 9, 10];

// const oddIndex = numbers.findIndex((number) => {
//   return number % 2 !== 0; 
// });

// console.log(oddIndex); 


// What is the output of the following code?
// let arr1 = [{a: 34}, {a: 45}, {a:12}, {a:5}, {a:78}];
// let arr2 = arr1.map(item => item);
// arr2[2].b = 45;
// console.log(arr1);  // => 
// console.log(arr2);  // =>//it give error bcz refrece us change

// // What is the output of the following code?
// let arr1 = [{a: 34}, {a: 45}, {a:12}, {a:5}, {a:78}];
// 	let arr2 = arr1.map(item => item.a * 2);
// console.log(arr1);  // => [{a: 34}, {a: 45}, {a:12}, {a:5}, {a:78}]
// 	console.log(arr2);  // =>[68,90,24,10,156]
//   my guss is right
//   it *2 all the a in arr beacse the map method all are * by 2

// What is the output of the following code?
// let arr = [1,2,3,4,5];
// let arr2 = arr.reduce((a, c) => a + c).map(item => item);
// console.log(arr2); // =>

// What is the output of the following code?
// const example = ({ a, b, c }) => {
// console.log(a, b, c);  
// };
// example(0, 1, 2);//undefined undefined undefined


// Find the Sum of Squares 
// let arr = [1, 2, 3, 4, 5];

// const sumOfSquares = arr.reduce((acc, number) => {
//   return acc + number ** 2;
// }, 0);

// console.log(sumOfSquares); // Output: 55







