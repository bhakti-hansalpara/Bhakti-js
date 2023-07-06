//1
const numbers = [5, 3, 8, 1, 2];
numbers.sort((a, b) => a - b);
console.log(numbers); // Output: [1, 2, 3, 5, 8]


//2
const fruits = ['apple', 'orange', 'banana', 'grape'];
fruits.sort();
console.log(fruits); // Output: ['apple', 'banana', 'grape', 'orange']


//3
const people = [
    { name: 'John', age: 25 },
    { name: 'Jane', age: 30 },
    { name: 'Mark', age: 20 }
  ];
  people.sort((a, b) => a.age - b.age);
  console.log(people);
  // Output: [
  //   { name: 'Mark', age: 20 },
  //   { name: 'John', age: 25 },
  //   { name: 'Jane', age: 30 }
  // ]

  
  //4
  const books = [
    { title: 'The Catcher in the Rye', author: 'J.D. Salinger', year: 1951 },
    { title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 },
    { title: '1984', author: 'George Orwell', year: 1949 }
  ];
  books.sort((a, b) => {
    if (a.year === b.year) {
      return a.title.localeCompare(b.title);
    }
    return a.year - b.year;
  });
  console.log(books);
  // Output: [
  //   { title: '1984', author: 'George Orwell', year: 1949 },
  //   { title: 'The Catcher in the Rye', author: 'J.D. Salinger', year: 1951 },
  //   { title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 }
  // ]

  
  //5
  const numbers = [5, 3, 8, 1, 2];
numbers.sort((a, b) => b - a);
console.log(numbers); // Output: [8, 5, 3, 2, 1]


//6
const items = ['A', 'B', 'C', 'D', 'E'];
items.sort(() => Math.random() - 0.5);
console.log(items); // Output: Random order of ['A', 'B', 'C', 'D', 'E']


//7
const fruits = ['apple', 'orange', 'banana', 'grape'];
fruits.sort((a, b) => a.length - b.length);
console.log(fruits); // Output: ['apple', 'grape', 'banana', 'orange']


///8
const numbers = [10, 2, 8, 4, 6];
numbers.sort((a, b) => {
  // Custom sorting logic
  if (a % 2 === 0 && b % 2 !== 0) {
    return -1; // 'a' is even, 'b' is odd, 'a' comes first
  } else if (a % 2 !== 0 && b % 2 === 0) {
    return 1; // 'a' is odd, 'b' is even, 'b' comes first
  } else {
    return a - b; // Sort in ascending order for other cases
  }
});
console.log(numbers); // Output: [2, 4, 6, 8, 10]


//9//
const products = [
    { name: 'Keyboard', price: { amount: 20 } },
    { name: 'Mouse', price: { amount: 10 } },
    { name: 'Monitor', price: { amount: 100 } }
  ];
  products.sort((a, b) => a.price.amount - b.price.amount);
  console.log(products);
  // Output: [
  //   { name: 'Mouse', price: { amount: 10 } },
  //   { name: 'Keyboard', price: { amount: 20 } },
  //   { name: 'Monitor', price: { amount: 100 } }
  // ]

  
 // 10
  const cars = [
    { brand: 'Toyota', year: 2015 },
    { brand: 'Honda', year: 2020 },
    { brand: 'BMW', year: 2010 }
  ];
  cars.sort((a, b) => {
    const brandComparison = a.brand.localeCompare(b.brand);
    if (brandComparison !== 0) {
      return brandComparison;
    }
    return b.year - a.year; // Sort by year in descending order if brands are equal
  });
  console.log(cars);
  // Output: [
  //   { brand: 'BMW', year: 2010 },
  //   { brand: 'Honda', year: 2020 },
  //   { brand: 'Toyota', year: 2015 }
  // ]
//---bubale_short---//


