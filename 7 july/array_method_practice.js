// ---makinf a fun using map ti sqaure the number of array //
// const number=[2,4,6];
// const square_array=number.map((num)=>num*num);
// console.log(square_array);


// ----reright key and value----//
// const kArray=[
//     {name:"BHakti", Last_name:"Patel"},
//     {rollnumber:20},
//     {city:"Rajokt"}
// ]
// const give_array=kArray.map((name,Last_name)=>({[name]:Last_name}));
// console.log(give_array);
// console.log(kArray);

// const arrayLike = {
//     length: 4,
//     0: 2,
//     1: 3,
//     2: 4,
//     3: 5,
//     4: 6, // ignored by map() since length is 3
//   };
//   console.log(Array.prototype.map.call(arrayLike, (x) => x ** 2));
//   // [ 4, 9, 16 ]
  
// const numbers = [1, 2, 3, 4];
// const filteredNumbers = numbers.map((num, index) => {
//   if (index < 3) {
//     return num;
//   }
// });
// console.log(numbers);
// console.log(filteredNumbers);
// index goes from 0, so the filterNumbers are 1,2,3 and undefined.
// filteredNumbers is [1, 2, 3, undefined]
// numbers is still [1, 2, 3, 4]

// -conerting array into string---//
// const name=["bhakti","pujan","meghna"]
// const lower_case=name.map((num)=>num.toUpperCase());
// console.log(lower_case);
// console.log(name);

// ---give the id key---//
// const users = [
//     { id: 1, name: 'John' },
//     { id: 2, name: 'Jane' },
//     { id: 3, name: 'Alex' }
//   ];
//   const idOfUsers=users.map((users)=>users.id);
//   console.log(idOfUsers);

// ---length of words using map---//
// const length_words=["b hjkjdhn","kifyg","jabefhb"]
// // const length=length_words.map((length)=>length_words.length);//
// const length=length_words.map((words)=>words.length);
// console.log(length);

// const words = ['apple', 'banana', 'orange'];
// const wordLengths = words.map((word) => word.length);
// console.log(wordLengths);

// const mixedArray = [2, '4', 6, '8', 10];
// const doub=mixedArray.map((dob_number)=>typeof dob_number==='number'? dob_number*2:dob_number );
// console.log(doub);

//same code but diffrent way
// const mixedArray = [2, '4', 6, '8', 10];
// const doub = [];

// for (let i = 0; i < mixedArray.length; i++) {
//   if (typeof mixedArray[i] === 'number') {
//     doub.push(mixedArray[i] * 2);
//   } else {
//     doub.push(mixedArray[i]);
//   }
// }

// console.log(doub);

// const fullNames = ['John Doe', 'Jane Smith', 'Alex Johnson'];
// const firstNames = fullNames.map((name) => name.split(' ')[1]);
// console.log(firstNames);

// const number=[1,49,34,67];
// const num_index=number.map((numbers,index)=>index);
// console.log(num_index);

// ---------filter-----------//
// function big(value){
//     return value>10;
// }
// const   filter1=[20,55,2,4,77].filter(big);
// console.log(filter1);

// function isBigEnough(value) {
//     return value >= 10;
//   }
  
//   const filtered = [12, 5, 8, 130, 44].filter(isBigEnough);
//   console.log(filtered);
  // filtered is [12, 130, 44]

//   let words = ["spray", "limit", "exuberant", "destruction", "elite", "present"];

// const modifiedWords = words.filter((word, index, arr) => {
//   arr[index + 1] += " extra";
//   return word.length < 10;
// });

// console.log(modifiedWords);

// const books = [
//     { title: 'JavaScript: The Good Parts', rating: 4 },
//     { title: 'Eloquent JavaScript', rating: 5 },
//     { title: 'Clean Code', rating: 3 },
//     { title: 'The Pragmatic Programmer', rating: 4 }
//   ];
//   const highlyRatedBooks = books.filter((book) => book.rating >= 4);
//   console.log(highlyRatedBooks);

// const names=["amit","bhakti","pujan","kirn"];
// const filter_names=names.filter((names)=>names.includes('a'));
// console.log(filter_names);
  
// const products = [
//     { id: 1, name: 'Apple', category: 'Fruits' },
//     { id: 2, name: 'Carrot', category: 'Vegetables' },
//     { id: 3, name: 'Orange', category: 'Fruits' },
//     { id: 4, name: 'Broccoli', category: 'Vegetables' }
//   ];
//   const desiredCategories = ['Fruits', 'Vegetables'];
//   const filteredProducts = products.filter((product) => desiredCategories.includes(product.category));
//   console.log(filteredProducts);
  
// const products = [
//     { id: 1, name: 'Apple', price: 0.99 },
//     { id: 2, name: 'Orange', price: 1.49 },
//     { id: 2, name: 'Onion', price: 0.49 },
//     { id: 3, name: 'Banana', price: 0.79 },
//     { id: 4, name: 'Mango', price: 2.99 }
//   ];
//   const count=products.filter((products)=>products.price>1 && products.name.startsWith('O'));
//   console.log(count);

// const numbers = [1, 2, 3, 4, 5];
// const filteredNumbers = numbers.filter(function(num) {
//   return num % 2 === 0;
// });
// console.log(filteredNumbers);

// const data = [1, 'two', true, { id: 4 }, ['apple', 'banana']];
// const updatedData=data.filter((data)=>typeof data==='object');
// console.log(updatedData);

// const data = [1, 'two', true, { id: 4 }, ['apple', 'banana']];
// const filteredData = data.filter((item) => typeof item === 'object');
// console.log(filteredData);

// ----reduce----//
// const   numbers=[1,2,3,4];
// const square=numbers.reduce((acc,curr)=>acc*curr , 1);
// console.log(square);

// const numbers = [1,2,3,4];
// const product = numbers.reduce((acc, num) => acc * num, 1);
// console.log(product);

// const number=[1,2,2,3,4,5,5];
// const rework=number.reduce((number)=>
// {return acc.includes(num) ? acc : [...acc, num]},[]);
// console.log(rework);


// const words = ['apple', 'banana', 'orange', 'kiwi', 'grape'];
// const longestWord = words.reduce((acc, word) => word.length >= acc.length ? word : acc, '');
// console.log(longestWord);


// const numbers = [1, 2, 2, 3, 4, 5, 5];

// const uniqueNumbers = numbers.reduce((acc, num) => {
//   if (!acc.includes(num)) {
//     acc.push(num);
//   }
//   return acc;
// }, []);

// console.log(uniqueNumbers);

// const numbers = [10, 20, 30, 40, 50];
// const average = numbers.reduce((acc, num, index, array) => {
//   acc += num;
//   if (index === array.length - 1) {
//     return acc / array.length;
//   }
//   return acc;
// }, 0);
// console.log(average);


