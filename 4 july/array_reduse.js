//  const arr=[1,2,3,4,5]
//  const totalArr=arr.reduce((accu,curr)=>{
// return accu+curr;
//  },2)
//  console.log(totalArr);

//1
// const names = [
//   { first_name: "Handnm", last_name: "Ldemo" },
//   { first_name: "Q Wei", last_name: "Alxezx" },
//   { first_name: "Pqwern", last_name: "Ruse" },
//   { first_name: "Wiruyn", last_name: "Ruby" },
//   { first_name: "Erpso", last_name: "Loal" },
//   { first_name: "Demors", last_name: "Poet" },
//   { first_name: "Aleos", last_name: "Lkeu" },
// ];
// function fullName(){
//   return names.reduce((accumulator,currentValue)=>{
//     let full_name=`${currentValue.first_name} ${currentValue.last_name}`;
//     accumulator.push(full_name);
//     return accumulator
//   },[])
// }
// console.log(fullName());

//2
const users = [
  {first_name: "Handnm", last_name: "L demo", age: 17},
  {first_name: "Q Wei", last_name: "Alxezx", age: 30},
  {first_name: "Pdeq Twern", last_name: "Ruse", age: 22},
  {first_name: "Widfruyn", last_name: "Ruby", age: 11},
  {first_name: "Erdfg Pso", last_name: "Loal", age: 34},
  {first_name: "Dedfgmors", last_name: "Poet", age: 60},
  {first_name: "Ale4tos", last_name: "Lkeu", age: 16},
 ];
 
 const usersWithIsMature = users.reduce((acc, user) => {
   const isMature = user.age >= 18;
   return [...acc, { ...user, isMature }];
 }, []);
 
 console.log(usersWithIsMature);

 //6
 function containsNumber(array) {
  return array.reduce((acc, item) => acc || typeof item === "number", false);
}

// Test cases
console.log(containsNumber([1, 2, 3]));               // true
console.log(containsNumber(["1", "a", "h"]));         // false
console.log(containsNumber(["a", 3, "gh"]));          // true
console.log(containsNumber(["a", '3df', "gh"]));      // false

//8
const numbers = [1, 2, 3, 4];

const doubled = numbers.reduce((acc, num) => {
  acc.push(num * 2);
  return acc;
}, []);

console.log( doubled);

//10
function getNameInitials(name) {
  const initials = name
    .split(" ")
    .reduce((acc, word) => acc + word.charAt(0).toUpperCase(), "");

  return initials.trim();
}

// Test cases
console.log(getNameInitials("George Raymond Richard Martin"));      // Output: "GRRM"
console.log(getNameInitials("george raymond Richard Martin"));      // Output: " GRRM"

//11
function transformString(input) {
  const transformed = input
    .split(" ")
    .map((word) => {
      const firstChar = word.charAt(0);
      const lastChar = word.charAt(word.length - 1);
      const removedCharsCount = word.length - 2;

      return `${firstChar}${removedCharsCount}${lastChar}`;
    })
    .join(" ");

  return transformed;
}

console.log(transformString("Every developer likes to mix kubernetes and javascript"));

//12
const products = [
  { name: "Product 1", price: 20, category: "Electronics",ca:"cs" },
  { name: "Product 2", price: 30, category: "Clothes" },
  { name: "Product 3", price: 40, category: "Electronics" },
  { name: "Product 4", price: 50, category: "Clothes" },
  { name: "Product 5", price: 60, category: "Clothes" },
  { name: "Product 6", price: 70, category: "Electronics" },
  { name: "Product 6", price: 70, category: "Electronics" },
  { name: "Product 6", price: 70, category: "Electronics" },
  { name: "Product 6", price: 70, category: "Electronics" },

  { name: "Product 7", price: 80, category: "Clothes" },
  { name: "Product 8", price: 90, category: "Electronics" },
];

const categoryCount = products.reduce((count, product) => {
  count[product.category] = (count[product.category] || 0) + 1;
  return count;
}, {});

console.log(categoryCount);


//14
function groupByFirstLetter(names) {
  const groupedData = names.reduce((acc, name) => {
    const firstLetter = name.charAt(0).toUpperCase();
    
    if (!acc[firstLetter]) {
      acc[firstLetter] = [];
    }
    
    acc[firstLetter].push(name);
    
    return acc;
  }, {});
  
  return groupedData;
}

// Test case
const names = ["Jeel", "Prakhar", "Bhakti", "Vansh", "Meghna", "Bhaumik", "Pujan", "Rudra", "Sachin", "Dhruval"];
const result = groupByFirstLetter(names);
console.log(result);

//18
function groupByFirstLetter(data) {
  const groupedData = data.reduce((acc, item) => {
    const firstLetter = item.name.charAt(0).toUpperCase();

    if (!acc[firstLetter]) {
      acc[firstLetter] = [];
    }

    acc[firstLetter].push(item);

    return acc;
  }, {});

  return groupedData;
}

// Test case
const input = [
  { name: "John", salary: 50000, department: "IT" },
  { name: "Jane", salary: 60000, department: "HR" },
  { name: "Bob", salary: 55000, department: "IT" },
  { name: "Sophie", salary: 75000, department: "HR" },
  { name: "Mike", salary: 65000, department: "IT" },
  { name: "Emily", salary: 80000, department: "HR" },
  { name: "David", salary: 70000, department: "IT" },
];

const result = groupByFirstLetter(input);
console.log(result);

//19
const input = [
  { name: "John", salary: 50000, department: "IT" },
  { name: "Jane", salary: 60000, department: "HR" },
  { name: "Bob", salary: 55000, department: "IT" },
  { name: "Sophie", salary: 75000, department: "HR" },
  { name: "Mike", salary: 65000, department: "IT" },
  { name: "Emily", salary: 80000, department: "HR" },
  { name: "David", salary: 70000, department: "IT" },
];
function groupByDepartment(data) {
  const groupedData = data.reduce((acc, item) => {
    const department = item.department;

    if (!acc[department]) {
      acc[department] = [];
    }

    acc[department].push(item);

    return acc;
  }, {});

  return groupedData;
}
const result = groupByDepartment(input);
console.log(result);







 

// const arr=[1,2,3,4];
// const result=arr.reduce((acc,cuurenetvalue,cuurenetindex,cuurenetarray)=>{
//   console.log(cuurenetvalue);
// },0)

// const arr=[1,2,3,4];
// const result=arr.reduce((acc,cuurenetvalue,cuurenetindex,cuurenetarray)=>{
//   console.log(cuurenetindex);
// },2)

// const arr=[1,2,3,4];
// const result=arr.reduce((acc,cuurenetvalue,cuurenetindex,cuurenetarray)=>{
//   console.log(cuurenetarray);
// },0)

//  const arr=[1,2,3,4,5]
//  const totalArr=arr.reduce((accu,cuurenetvalue,cuurenetindex)=>{
// // console.log(cuurenetvalue);
// // return accu*cuurenetvalue;
// console.log(cuurenetindex);
//  },2)
//  console.log(totalArr);

// const objects = [{ x: 1 }, { x: 2 }, { x: 3 }];
// const sum = objects.reduce(
//   (accumulator, currentValue) => accumulator + currentValue.x,
//   0,
// );

// console.log(sum); // 6

// const objects = [{ x: 1 }, { x: 2 }, { x: 3 }];
// const sum = objects.reduce(
//   (accumulator, currentValue) => accumulator + currentValue.x,
//   0,
// );

// console.log(sum); // 6

// console.log([1, 2, , 4].reduce((a, b) => a + b)); // 7
// console.log([1, 2, undefined, 4].reduce((a, b) => a + b)); // NaN


const name=[{name:"bhakti",age:19,feild:"CE"},{hobbey:"Drawing"}];
