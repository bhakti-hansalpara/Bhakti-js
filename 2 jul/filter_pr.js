// array.filter(callback(element[, index[, array]])[, thisArg])


// const students = [
//     {
//       name: 'Aartic',
//       courses: [
//         { courseName: 'Math', score: 90 },
//         { courseName: 'Science', score: 85 },
//         { courseName: 'History', score: 78 }
//       ]
//     },
//     {
//       name: 'sholk',
//       courses: [
//         { courseName: 'Math', score: 80 },
//         { courseName: 'Science', score: 92 },
//         { courseName: 'History', score: 88 }
//       ]
//     },
//     {
//       name: 'Chelcy',
//       courses: [
//         { courseName: 'Math', score: 95 },
//         { courseName: 'Science', score: 78 },
//         { courseName: 'History', score: 82 }
//       ]
//     }
//   ];
// //   const studentsWithHighMathScore = students.filter(student => {
// //     return student.courses.filter(course => course.courseName === 'Math' && course.score > 85);
// //   });
  
// //   console.log(studentsWithHighMathScore);
  

//   const studentsWithMathCourse = students.filter(student => {
//     return student.courses.filter(course => course.courseName === 'Math');
//   });
  
//   console.log(studentsWithMathCourse);
  
//   const numbers = [5, 12, 8, 20, 15];
//   const greaterThan10 = numbers.filter(number => number > 10);
//   console.log(greaterThan10); // Output: [12, 20, 15]

//   const words = ['apple', 'banana', 'orange', 'kiwi', 'grape'];
// const startsWithB = words.filter(word => word.startsWith('b'));
// console.log(startsWithB); // Output: ['banana']


// const products = [
//     { name: 'Apple', price: 2, category: 'fruit' },
//     { name: 'Carrot', price: 1, category: 'vegetable' },
//     { name: 'Orange', price: 3, category: 'fruit' },
//     { name: 'Broccoli', price: 2, category: 'vegetable' }
//   ];
//   const expensiveFruits = products.filter(product => product.category === 'fruit' && product.price > 2);
//   console.log(expensiveFruits); // Output: [{ name: 'Orange', price: 3, category: 'fruit' }]

//   const numbers = [1, 2, 2, 3, 3, 4, 5, 5];
//   const uniqueNumbers = numbers.filter((number, index, array) => array.indexOf(number) === index);
//   console.log(uniqueNumbers); // Output: [1, 2, 3, 4, 5]

//   const data = [
//     { name: 'Alice', age: 20 },
//     { name: 'Bob' },
//     { name: 'Charlie', age: 25 }
//   ];
//   const hasAgeProperty = data.filter(obj => 'age' in obj);
//   console.log(hasAgeProperty); // Output: [{ name: 'Alice', age: 20 }, { name: 'Charlie', age: 25 }]

//   const words = ['level', 'apple', 'racecar', 'banana'];
//   const palindromes = words.filter(word => word === word.split('').reverse().join(''));
//   console.log(palindromes); // Output: ['level', 'racecar']

//   const products = [
//     { name: 'Apple', price: 2, category: 'fruit' },
//     { name: 'Carrot', price: 1, category: 'vegetable' },
//     { name: 'Orange', price: 3, category: 'fruit' },
//     { name: 'Broccoli', price: 2, category: 'vegetable' }
//   ];
//   const affordableFruits = products.filter(product => product.category === 'fruit' && product.price < 3);
//   console.log(affordableFruits); // Output: [{ name: 'Apple', price: 2, category: 'fruit' }]

  
//   const users = [
//     {
//       id: 1,
//       name: 'alic',
//       age: 25,
//       address: {
//         city: 'New York',
//         country: 'USA'
//       }
//     },
//     {
//       id: 2,
//       name: 'Bhipin',
//       age: 30,
//       address: {
//         city: 'London',
//         country: 'UK'
//       }
//     },
//     {
//       id: 3,
//       name: 'Chali',
//       age: 28,
//       address: {
//         city: 'USA',
//         country:'USA'
//       }
//     }
//   ];
  
//   const filteredUsers = users.filter(user => user.address.country === 'USA');
//   console.log(filteredUsers);
  
//   const filteredUsers = users.filter(user => user.age > 30);
// console.log(filteredUsers);
  
// const users = [
//     {
//       id: 1,
//       name: 'alic',
//       age: 25,
//       address: {
//         city: 'New York',
//         country: 'USA'
//       }
//     },
//     {
//       id: 2,
//       name: 'Bhipin',
//       age: 30,
//       address: {
//         city: 'London',
//         country: 'UK'
//       }
//     },
//     {
//       id: 3,
//       name: 'Chali',
//       age: 38,
//       address: {
//         city: 'USA',
//         country:'USA'
//       }
//     }
//   ];

//   const filteredUsers = users.filter(user => user.age > 30);
//   console.log(filteredUsers);

//   const filteredUser = users.filter(user => user.name === 'Chali');
// console.log(filteredUser);

