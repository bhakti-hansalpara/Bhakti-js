const numbers = [1, 2, 3, 4, 5];

const multipliedNumbers = numbers.map(num => num * 2);

console.log(multipliedNumbers);
// Output: [2, 4, 6, 8, 10]


const words = ['apple', 'banana', 'orange'];
const firstLetters = words.map(word => word[0]);
console.log(firstLetters);
// Output: ['a', 'b', 'o']

const words = ['apple', 'banana', 'orange'];
const firstLettersCapitalized = words.map(word => word[0].toUpperCase());
console.log(firstLettersCapitalized);
// Output: ['A', 'B', 'O']


const fruits = ['apple', 'banana', 'orange'];
const stringLengths = fruits.filter(fruit => fruit.length);
console.log(stringLengths);
// Output: [ 'apple', 'banana', 'orange' ]

const fruits = ['apple', 'banana', 'orange'];
const stringLengths = fruits.map(fruit => fruit.length);
console.log(stringLengths);
// Output: [5, 6, 6]

const fruits = ['apple', 'banana', 'orange'];
const prefixedFruits = fruits.map(fruit => 'fruit_' + fruit);
console.log(prefixedFruits);
// Output: ['fruit_apple', 'fruit_banana', 'fruit_orange']

const numbers = [1, 2, 3, 4, 5];
const numberStrings = numbers.map(num => num.toString());
console.log(numberStrings);
// Output: ['1', '2', '3', '4', '5']

const numbers = ['bhakti','jiya','shlok'];
const numberStrings = numbers.map(num => num.toString());
console.log(numberStrings);
// Output: ['1', '2', '3', '4', '5']

const students = [
    { name: 'Alice', age: 20 },
    { name: 'Bob', age: 22 },
    { name: 'Charlie', age: 18 }
  ];
  const studentNames = students.map(student => student.name);
  console.log(studentNames);
  // Output: ['Alice', 'Bob', 'Charlie']

  const students = [
    { name: 'Alice', age: 20 },
    { name: 'Bob', age: 22 },
    { name: 'Charlie', age: 18 }
  ];
  
  const studentKeys = students.map(student => Object.keys(student));
  console.log(studentKeys);
  // Output: [['name', 'age'], ['name', 'age'], ['name', 'age']]

  const arr20 = [
    [1, { name: 'Apple', details: { id: 10 } }],
    { id: 2, items: [{ name: 'Banana' }, { name: 'Orange' }] }
  ];
const arrName=arr20.map(arr20=>arr20[0].name[0]);
console.log(arrName);  

const arr20 = [
    [1, { name: 'Apple', details: { id: 10 } }],
    { id: 2, items: [{ name: 'Banana' }, { name: 'Orange' }] }
  ];
  

  //how to get id 10 
  const idValue = arr20.map(item => {
    if (Array.isArray(item)) {
      const obj = item.find(innerItem => typeof innerItem === 'object');
      if (obj && obj.details && obj.details.id === 10) {
        return obj.details.id;
      }
    } else if (item.details && item.details.id === 10) {
      return item.details.id;
    }
  });
  
  console.log(idValue);
  // Output: [10]
  
  const arr18 = [1, [2, [3, [4, [5]]]]];
console.log(arr18);
// output [ 1, [ 2, [ 3, [Array] ] ] ]

const arr17 = [[1, 2], { name: 'Alice' }, [3, 4, 5], { name: 'Bob', age: 22 }];
console.log(arr17[1].name[0]);
// output A
console.log(arr17[1].name);
//output Alice
console.log(arr17[3].age);

const arr4 = [
    { name: 'Alice', hobbies: ['drawing', 'reading'] },
    { name: 'Bob', hobbies: ['coding', 'gaming'] }
  ];
console.log(arr4[1].name);  
console.log(arr4[1].hobbies[1]);

const arr6 = [
    [1, [2, [3, [4]]]],
    [5, [6, [7, [8]]]]
  ];
  
  const numbersAtIndex2 = arr6.map(subArr => subArr[1][1][1][0]);
  
  console.log(numbersAtIndex2); // Output: [4,8]

  const arr15 = [1, [undefined, 3], 'apple', [5, undefined]];
console.log(arr15[1]);


