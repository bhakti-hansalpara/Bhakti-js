// <----------------every--------------->//

//01
//Check if all elements in an array are positive numbers

// const arr=[3,5,2,-7,5];
// const result=arr.every((number)=>number>0);
// console.log(result);

//02
//Determine if all elements in an array are strings.
// const names=['apple','bhakti','8',9];
// const result=names.every((ele)=>{ return typeof ele==='string'})
// console.log(result);

//03
//Verify if all elements in an array are greater than a specific value.
// const scores = [70, 80, 90, 5, 95];
// const passThreshold = 70;
// const result=scores.every((ele)=>ele>=passThreshold)
// console.log(result);

//04
//Check if all elements in an array are truthy
// const values = [true, 'hello', 42,'false', [1, 2, 3]];
// const result=values.every((ele)=>{return Boolean(ele)})
// console.log(result);

//05
//all age is less than elder age
// const ages = [1, 20, 16, 5, 2];
// const result=ages.every((num)=>num<=18)
// console.log(result);

// <-------------filter--------------->//
//01
//Given an array of numbers, filter out all the even numbers.
// const number=[1,4,2,5,7,5,6,8];
// const isEven=number.filter((num)=>{if(num%2==0) return num});
// console.log(isEven);

//02
//Filter out all the strings longer than 5 characters from an array of strings
// const names=['Bhakti','Misa','Keyuri','diya'];
// const long=names.filter((word)=>{
//      return word.length>=5
// })
// console.log(long);

//03
// Given an array of objects representing books, filter out all the books published before the year 2000.
// const books = [
//     { title: 'Book 1', year: 1998 },
//     { title: 'Book 2', year: 2005 },
//     { title: 'Book 3', year: 1995 },
//     { title: 'Book 4', year: 2002 }
//   ];
//   const filterBooks=books.filter((books)=>{
//     return books.year>2000
//   })
//   console.log(filterBooks);
 
//04
// Filter out all the elements from an array that are not divisible by 3
// const numbers = [10, 15, 21, 33, 40, 48];
// const result=numbers.filter((num)=>{
//     if(num%3==0){
//         return num
//     }
// });
// console.log(result);

//05
// Given an array of strings, filter out all the strings that start with the letter 'A'
const words = ['apple', 'banana', 'avocado', 'orange', 'kiwi'];
const result=works.filter((letter)=>{
    words[0].includes='a';
    return letter
})
console.log(result);