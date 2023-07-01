1
const numbers = [1, 2, 3, 4, 5];

const squaredNumbers = numbers.map(num => num * num);

console.log(squaredNumbers); // [1, 4, 9, 16, 25]


2
const numbers = [1, 2, 3];
const doubledNumbers = numbers.map(num => num * 2);
console.log(doubledNumbers); // Output: [2, 4, 6]
//The map() method creates a new array by applying a provided callback function to each element of the calling array. It returns a new array with the same length as the original array, where
// each element is the result of the callback function. The original array remains unchanged.



4
//avaScript:Doubling the values of an array:
const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = numbers.map(num => num * 2);
console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]


5
//Converting an array of strings to uppercase
const fruits = ['apple', 'banana', 'orange'];
const capitalizedFruits = fruits.map(fruit => fruit.toUpperCase());
console.log(capitalizedFruits); // Output: ['APPLE', 'BANANA', 'ORANGE']


6
//Adding index to each element of an array
const letters = ['a', 'b', 'c', 'd'];
const indexedLetters = letters.map((letter, index) => `${letter}-${index}`);
console.log(indexedLetters); // Output: ['a-0', 'b-1', 'c-2', 'd-3']


7
//Extracting specific properties from an array of objects
const students = [
    { name: 'Alice', age: 20 },
    { name: 'Bob', age: 22 },
    { name: 'Charlie', age: 18 }
  ];
  const studentNames = students.map(student => student.name);
  console.log(studentNames); // Output: ['Alice', 'Bob', 'Charlie']

  
  8
  //Calculating the square root of each element in an array
  const numbers = [9, 16, 25, 36];
const squareRoots = numbers.map(num => Math.sqrt(num));
console.log(squareRoots); // Output: [3, 4, 5, 6]


9
//Formatting dates in an array of objects
const events = [
    { title: 'Meeting', date: '2022-01-01' },
    { title: 'Conference', date: '2022-02-15' },
    { title: 'Workshop', date: '2022-03-30' }
  ];
  const formattedDates = events.map(event => new Date(event.date).toLocaleDateString());
  console.log(formattedDates); // Output: ['1/1/2022', '2/15/2022', '3/30/2022']

  
  10
  //Extracting values from a multidimensional array:
  const matrix = [[1, 2], [3, 4], [5, 6]];
  const flattenedMatrix = matrix.map(subArray => subArray[0]);
  console.log(flattenedMatrix); // Output: [1, 3, 5]

  
  11
  //Generating a new array with squared indexes
  const length = 5;
const squaredIndexes = Array.from({ length }, (_, index) => index * index);
console.log(squaredIndexes); // Output: [0, 1, 4, 9, 16]


12
//Mapping and filtering elements simultaneously:
const numbers = [1, 2, 3, 4, 5];
const filteredSquares = numbers.map(num => num * num).filter(square => square > 10);
console.log(filteredSquares); // Output: [16, 25]


13
//Chaining multiple map operations:
const numbers = [1, 2, 3];
const result = numbers.map(num => num * 2).map(num => num + 1);
console.log(result); // Output: [3, 5, 7]

14
//Trimming whitespace from strings in an array:
const strings = ['  Hello  ', '  World  '];
const trimmedStrings = strings.map(str => str.trim());
console.log(trimmedStrings); // Output: ['Hello', 'World']

15
//Mapping an array of numbers to their absolute values:
const numbers = [-1, -2, -3];
const absolutes = numbers.map(num => Math.abs(num));
console.log(absolutes); // Output: [1, 2, 3]


16
//Mapping an array of strings to their lengths:
const strings = ['apple', 'banana', 'orange'];
const lengths = strings.map(str => str.length);
console.log(lengths); // Output: [5, 6, 6]


17
//Extracting specific properties from an array of objects:
const products = [
    { id: 1, name: 'iPhone', price: 999 },
    { id: 2, name: 'iPad', price: 799 },
    { id: 3, name: 'MacBook', price: 1499 }
  ];
  const productNames = products.map(product => product.name);
  console.log(productNames); // Output: ['iPhone', 'iPad', 'MacBook']

18
//Mapping an array of objects to a new array with modified properties:
const people = [
    { name: 'John', age: 30 },
    { name: 'Mary', age: 25 },
    { name: 'Alice', age: 35 }
  ];
  const modifiedPeople = people.map(person => ({ ...person, age: person.age + 1 }));
  console.log(modifiedPeople);
  /* Output:
  [
    { name: 'John', age: 31 },
    { name: 'Mary', age: 26 },
    { name: 'Alice', age: 36 }
  ]
  */

19
//Reversing an array using map() and reverse():
const numbers = [1, 2, 3, 4, 5];
const reversedNumbers = numbers.map((_, index, array) => array[array.length - 1 - index]);
console.log(reversedNumbers); // Output: [5, 4, 3, 2, 1]


20
//Mapping an array of strings to new strings with specific formatting:
const names = ['John Doe', 'Jane Smith', 'Alice Johnson'];
const formattedNames = names.map(name => name.toUpperCase().replace(' ', ', '));
console.log(formattedNames); // Output: ['JOHN, DOE', 'JANE, SMITH', 'ALICE, JOHNSON']

 21
 //Mapping an array of strings to their first characters:
 const words = ['apple', 'banana', 'cherry'];
const firstCharacters = words.map(word => word[0]);
console.log(firstCharacters); // Output: ['a', 'b', 'c']
 
22
//Mapping an array of objects to an array of their values:
const obj = { a: 1, b: 2, c: 3 };
const values = Object.values(obj);
console.log(values); // Output: [1, 2, 3]


23
//Mapping an array of strings to a new array with capitalized first letters:
const words = ['apple', 'banana', 'orange'];

const capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));

console.log(capitalizedWords); // Output: ['Apple', 'Banana', 'Orange']

24
//Mapping an array of strings to a new array with reversed strings:
const words = ['hello', 'world', 'javascript'];

const reversedWords = words.map(word => word.split('').reverse().join(''));

console.log(reversedWords); // Output: ['olleh', 'dlrow', 'tpircsavaj']


25
//Mapping an array of strings to check if they start with a specific letter:
const names = ['John', 'Alice', 'Bob', 'Adam'];
const startsWithJ = names.map(name => name.startsWith('J'));
console.log(startsWithJ); // Output: [true, false, false, false]

26
//Mapping an array of strings to remove vowels from each string:
const words = ['apple', 'banana', 'orange'];
const withoutVowels = words.map(word => word.replace(/[aeiou]/gi, ''));
console.log(withoutVowels); // Output: ['ppl', 'bnn', 'rng']



const person = { name: 'John', age: 30, profession: 'Developer' };

const uppercasedPerson = Object.entries(person).map(([key, value]) => ({
  [key]: value.toUpperCase()
}));

console.log(uppercasedPerson); 
// [{ name: 'JOHN' }, { age: '30' }, { profession: 'DEVELOPER' }]

// [{ name: 'JOHN' }, { age: '30' }, { profession: 'DEVELOPER' }]

  