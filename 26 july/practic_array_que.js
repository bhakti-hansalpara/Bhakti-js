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


//32
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

// function containsSubarray(arrayOfArray, array) {
//     const arrayStr = array.toString();
//     return arrayOfArray.some((subarray) => subarray.toString().includes(arrayStr));
//   }
  
//   console.log(containsSubarray([[1, 2], [34, 67], [67, 77], [88, 90]], [1, 2])); // Output: true
//   console.log(containsSubarray([[1, 2], [34, 67], [67, 77], [88, 90]], [2, 1])); // Output: true
//   console.log(containsSubarray([[1, 2], [34, 67], [67, 77], [88, 90]], [22, 15])); // Output: false
//   console.log(containsSubarray([[1, 2], [34, 67], [67, 77], [22, 90, 15], [88, 90]], [22, 15, 90])); // Output: true
  
//34
// function union(arr1, arr2) {
//     // const mergedArray = arr1.concat(arr2).flat();
//     const mergedArray = arr1.concat(arr2);

//     console.log(mergedArray); //[
//                                      //1, 2,  3, 100,
//                                      //2, 1, 10
//                                      //] => it concat both array
//     const unionArray = mergedArray.filter((value, index, array) => array.indexOf(value) === index);
//     return unionArray;
//   }
  
//   console.log(union([1, 2, 3], [100, 2, 1, 10]));

// function difference(arr1, arr2) {
    //   const diffArr1 = arr1.filter(item => !arr2.includes(item));
    //   const res=diffArr1.toString();
    //   console.log(res);
    //   const diffArr2 = arr2.filter(item => !arr1.includes(item));
    //   let arr3= diffArr1.concat(diffArr2);
    //   return arr3;
    // }
    
    // // Testing the function
    // console.log(difference([1, 2, 3], [100, 2, 1, 10]));
    // console.log(difference([1, 2, 3, 4, 5], [1, [2], [3, [[4]]],[5,6]]))

    //36
    // Input: numbers= [10,20,10,40,50,60,70], target=50
    // Output: [10, 40] || [40,10]
//     const number=[10,20,40,50,60,70]
//    const pair=[];
//     function cal(number,target){
//         for(i=0; i<number.length; i++){
//             for(j=0; j<number.length; j++){
//                 if(number[i]+number[j]===target){
//                     pair.push(number[i],number[j])
//                 }
//             }
//             // if(pair.length){
//             //     break;
//             // }
//         }
//         return pair;
//     }
//     const numbers = [10, 20, 10, 40, 50, 60, 70];
// const target = 50;

// const result = cal(numbers, target);
// console.log(result);

//37

// Sample array : [NaN, 0, 15, false, -22, '',undefined, 47, null]
// Expected result : [15, -22, 47]
// const array=[NaN, 0, 15, false, -22, '',undefined, 47, null];
// const a=array.filter(Number);
// console.log(a);

//38
// num_string_range('a', "z", 2) => ["a", "c", "e", "g", "i", "k", "m", "o", "q", "s", "u", "w", "y"]
// num_string_range("Z", "A", 2) => ["Z", "X", "V", "T", "R", "P", "N", "L", "J", "H", "F", "D", "B"]
// num_string_range(0, -5, 1) => [0, -1, -2, -3, -4, -5]
// num_string_range(0, 25, 5) => [0, 5, 10, 15, 20, 25]
// num_string_range(20, 5, 5) => [20, 15, 10, 5]

// function num(start,end,Increment){
// const newArray=[];
// const startCode=start.charCodeAt(0);
// const endCode=end.charCodeAt(0);
// for(let i=startCode; i<=endCode; i=+Increment){
//     newArray.push(startCode,endCode)
// }
// return newArray
// }
// console.log(num('a', 'z', 2));
// console.log(num('A','Z',2));
//get error but not understand
// function num_string_range(start, end, step) {
//   const range = [];
//   const startCode = start.charCodeAt(0);
//   const endCode = end.charCodeAt(0);

//   for (let i = startCode; i <= endCode; i += step) {
//     range.push(String.fromCharCode(i));//what is fromCharCode
//   }

//   return range;
// }

// console.log(num_string_range('a', 'z', 2));
// console.log(num_string_range('A','Z',2));
// num_string_range(0, 25, 5) => [0, 5, 10, 15, 20, 25]
// num_string_range(20, 5, 5) => [20, 15, 10, 5]

// console.log(num_string_range(0,-5,1));//==>it not work in same code
  // [20, 15, 10, 5]
  

//for number
// function num_string_range(start, end, step) {
//     const range = [];
//     // const isAscending = start <= end;
  
//     if (isAscending) {
//       for (let i = start; i <= end; i += step) {
//         range.push(i);
//       }
//     } else {
//       for (let i = start; i >= end; i -= step) {
//         range.push(i);
//       }
//     }
  
//     return range;
//   }
  
//   console.log(num_string_range(0, -5, 1));    // [0, -1, -2, -3, -4, -5]
//   console.log(num_string_range(0, 25, 5));    // [0, 5, 10, 15, 20, 25]
//   console.log(num_string_range(20, 5, 5)); 


//40
// remove_array_element([2, 5, 9, 6], 5); => [2, 9, 6]

// function contains(arr, element) {
//   return arr.includes(element);
// }

// const arr = [2, 5, 9, 6];
// console.log(contains(arr, 5));
// // Output: true

// console.log(contains(arr, 10));
// // Output: false


//39
// function remove_array_element(arr,ToRemove) {
//     // Use the filter method to create a new array without the element to remove
//     const filteredArray = arr.filter((element) => element !== ToRemove);
  
//     return filteredArray;
//   }
  
//   // Test data
//   const resultArray = remove_array_element([2, 5, 9, 6], 5);
//   console.log(resultArray); // Output: [2, 9, 6]
  
//41
// function countArrays(arr) {
//     const count = arr.filter(item => Array.isArray(item)).length;//==>what is length in this what is use it
//     return count;
//   }
  
//   console.log(countArrays([2, 8, [6, 3, 3], [4], 5,[1,2,5,8], [3, 4, [5, 4]]])); // 4

// function countArrays(arr) {
//     let count = 0;
  
//     // Iterate through each element in the input array
//     for (const item of arr) {
//       // Check if the current item is an array
//       if (Array.isArray(item)) {
//         count++; // Increment the count if the current item is an array
//       }
//     }
  
//     return count; // Return the final count of arrays
//   }
  
//   console.log(countArrays([2, 8, [6, 3, 3], [4], 5, [1, 2, 5, 8], [3, 4, [5, 4]]])); // Output: 4

//42
// function findMax(arr) {
//     return arr.reduce((maxLength, item) => {
//       if (Array.isArray(item)) {
//         return Math.max(maxLength, item.length);
//       } else {
//         return maxLength;
//       }
//     }, 0);
//   }
  
//   // Test cases
//   console.log(findMax([2, 8, [6], 3, 3, 5, 3, 4, [5, 4]])); // Output: 2
//   console.log(findMax([2, 8, [6, 3, 3], [4], 5, [3, 4, [5, 4]]])); // Output: 3
//   console.log(findMax([2, 8, [6, 3, 3], [4], 5, [3, 4, [5, 4]], [23, 56]])); // Output: 3
//   console.log(findMax([1, 5, 2, 6, 4, 23, 89])); // Output: 0
  
//43
// [2, 4, 8, 16, 32]
// // 2 is a factor of 4  // 4 is a factor of 8  // 8 is a factor of 16  // 16 is a factor of 32
// Test Data :
// ([2, 4, 8, 16, 32]) -> true          ([2, 4, 16, 32, 68]) -> false
// ([2, 4, 16, 32, 64]) -> true

// function isFactorChain(arr) {
//     for (let i = 1; i < arr.length; i++) {
//       if (arr[i] % 2== 0) {
//         return false;
//       }
//     }
//     return true;
//   }
//   console.log(isFactorChain[2,4,8,16,32]);


// for(i=0; i<=5; i++)
// console.log(i);
// 0
// 1
// 2
// 3
// 4
// 5

function isFactorChain(arr) {
    return arr.every((element, index) => {
      if (index === 0) {
        return true; // The first element doesn't need to be checked.
      } else {
        return element % arr[index-1] === 0;
      }
    });
  }
  
  // Test cases
  console.log(isFactorChain([2, 4, 8, 16, 32])); // Output: true
  console.log(isFactorChain([2, 4, 16, 32, 68])); // Output: false
  console.log(isFactorChain([2, 4, 16, 32, 64])); // Output: true
  

    




