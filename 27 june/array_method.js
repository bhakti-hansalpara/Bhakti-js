// var arr=[0,1,2];
//  var arr2=[{a:2, b:3},{c:"bhakti"}]
// console.log(arr[1]);
// console.log(arr2[1]);
// console.log(arr['2']);

//----------push------------------//
const name=[];
name.push("diya","bhakti","dhwni","Ravi");
console.log(name[2]);

const name=["bhaki","bhakti","dhwni","Ravi"];
name.push("diya","kristi");
console.log(name[2],name);


const obj=[a={name:"bhakti",std:12,Number:9878975366}, "fruits"];
obj.push(email);
console.log(push);

// marge array
const number=[1,2,3,4,5];
const name=["one","two","three","four"];
// number.push(...name);
name.push(...number);
// console.log(number);
console.log(name);

const veg=["tameto","poteto","bhakti"];
const morveg=["caret","peat","beetroot"];
veg.push(...morveg);
console.log(veg);


const arr = {
    length: 3,
    name: "Bhakti",
    2: 4,
  };
  Array.prototype.push.call(arr, 1, 2);
  console.log(arr)
  const plainObj = {};
  Array.prototype.push.call(plainObj, 1, 2);
  console.log(plainObj);
  
  
 
  const a=["bhakti","bhakti","bhakti"];
  console.log(a.length);
  Object.getOwnPropertyNames(a);
  
  const obj = {
    length: 0,
  name:"bh",
    addElem(elem) {
      // obj.length is automatically incremented
      // every time an element is added.
      [].push.call(this, elem,"nisha");
    },
  };
  
  // Let's add some empty objects just to illustrate.
  obj.addElem({});
  obj.addElem({});
  console.log(obj.length); // 2
  


//-------------pop----------------//
const a=[1,2,3,4,5,5];
a.pop(5);
console.log(a);

const arrayLike = {
    length: 3,
    unrelated: "foo",
    bha:"bha",
    2: 4,
  };
  console.log(Array.prototype.pop.call(arrayLike));
  // 4
  console.log(arrayLike);
  // { length: 2, unrelated: 'foo' }
  
  const plainObj = {};
  // There's no length property, so the length is 0
  Array.prototype.pop.call(plainObj);
  console.log(plainObj);
  // { length: 0 }


//   ----------shift-----------//
const a=["bhakti","jinal","pracjhi","2",2];
console.log(a);
const sifted=a.shift();
console.log(a);
console.log(sifted);


const names = ["Andrew", "Tyrone", "Paul", "Maria", "Gayatri"];

while (typeof (i = names.shift()) !== "Paul") {
  console.log(i);
}
// Andrew, Tyrone, Paul, Maria, Gayatri

// --------------concat-------------//
const array1=[1,2,3,4,5];
const array2=[6,7,8,9];
console.log(array1);
const array3=array1.concat(array2);
console.log(array3);
  
const arr1=[1,2];
const arr2=[5,6];
const arr4=[6,7,8];
const arr5=[7,8,9]
const arr3=arr1.concat(arr2,[11,12,13],arr4,arr5);
console.log(arr3);


const letters = ["a", "b", "c"];
const alphaNumeric = letters.concat(1,4 ,[2, 3],{a:'bahkti'});
console.log(alphaNumeric);

//nested array

const num1 = [[1],2,3,4,5];
const num2 = [2, [3]];

const numbers = num1.concat(num2);

console.log(numbers);
num1[0].push(11);

const obj1 = { 0: 1, 1: 2, 2: 3, length: 3 };
const obj2 = { 0: 1, 1: 2, 2: 3, length: 3, [Symbol.isConcatSpreadable]: true };
console.log([0].concat(obj1, obj2));
// [ 0, { '0': 1, '1': 2, '2': 3, length: 3 }, 1, 2, 3 ]


console.log([1, , 3].concat([4, 5])); 
console.log([1, 2].concat([3, , 5])); 

// --------------every------------

const isBelowThreshold = (currentValue) => currentValue < 40;
const array1 = [1, 30, 39, 29, 10, 13];//in this case it gives true
const array1 = [1, 30, 39, 29, 10, 13];//in this case it gives false beacuse one value is wrong than print false
console.log(array1.every(isBelowThreshold));

const isSubset = (array1, array2) =>
  array2.every((element) => array1.includes(element));
console.log(isSubset([1, 2, 3, 4, 5, 6, 7], [5, 7, 6])); // true
console.log(isSubset([1, 2, 3, 4, 5, 6, 7], [5, 8, 7])); // false

console.log([1, , 3].every((x) => x !== undefined)); // true
console.log([2, , 2].every((x) => x === 2)); // true//it is also use to check that all elemts are same or not


//in every when the function is not clear all the value true there fore it not consider true.it return false
//-----------------some-----------
// in some case if only one value is true than return ture but in every is not return true in this case
var ages=[10,11,23,40];
console.log(age);
var b=ages.some(cheackAge);
console.log(b);
function cheackAge(age) {
  return age>=18;
}


const array = [1, 2, 3, 4, 5];
const even = (element) => element % 2 === 0;
console.log(array.some(even));

function isBiggerThan10(element) {
  return element > 20;
}
[2, 5, 28, 1, 4].some(isBiggerThan10); 
[12, 5, 28, 1, 4].some(isBiggerThan10); 

[2, 5, 8, 1, 4].some((x) => x > 10); 
[12, 5, 8, 1, 4].some((x) => x > 10); //using with arrow function



const fruits = ["apple", "banana", "mango", "guava"];
const flower=["rose","lots","sunflower"]
function checkAvailability(arr, val) {
  return arr.some((arrVal) => val === arrVal);
}
checkAvailability(fruits, "kela"); 
checkAvailability(fruits,"chiku");
checkAvailability(flower,"rose");
checkAvailability(fruits, "banana");

console.log([1, , 3].some((x) => x === undefined)); // false
console.log([1,  1].some((x) => x == 1)); // false
console.log([1, undefined, 1].some((x) => x !== 1)); // true

//-----------fill---------//
// in this function is change all value ti we assign
const a=["bh","bh","klh","kjg"];
a.fill("bhakti");//=print 4 time bhakti

//-----filter------//
// in this method which value is ture  the condicion that value print
//use shollow copy ans deep copy
const words = ['spray', 'limit', 'elite', ['exuberant'], 'destruction', 'present'];
const result = words.filter(...word => word.length > 6);
console.log(result);
const words = [' ', 'exuberant', 'destruction', 'present'];
const result = words.filter(word => word.length > 6);
console.log(result);

const words=['B','s','R','a','p'];
const result=words.filter(words=>words===words.toUpperCase());
console.log(result);//ans=B,R


const array = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

function isPrime(num) {
  for (let i = 2; num > i; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
}

console.log(array.filter(isPrime)); 


// --------find---------//
// it return frist ture value than not check other value when statement is true// it gives only one value
// const array1 = [5, 12, 8, 130, 44];
// const found = array1.find(element => element > 10);
// console.log(found);

// const array1 = [5, [12, 8, 130], 44];
// const found = array1.find(element => element > 10);
// console.log(found);

const array1 = [5, [12, 8, 130], 44];
const found = array1.find(function(element){ return  element.array1 <= 10}) ;
console.log(found);

const array=["bhakti","diya","Dhwnui","bhoomi"];
console.log(array.find((element)=>{return element.name==="bhakti"}));//undefined

const inventory = [
  { name: "apples", quantity: 2 },
  { name: "bananas", quantity: 0 },
  { name: "cherries", quantity: 5 },
];
function isCherries(fruit) {
  return fruit.name === "apples";
}
console.log(inventory.find(isCherries));// when " " it gives undefined
//destrucring..
const inventory = [
  { name: "apples", quantity: 2 },
  { name: "bananas", quantity: 0 },
  { name: "cherries", quantity: 5 },
];
const result = inventory.find(({ name }) => name === "cherries");
console.log(result); // { name: 'cherries', quantity: 5 }

//------findIndex------//
const array1 = [5, 120, 8, 10, 44];
console.log(array1.findIndex(120));//in normle not run.
const array1 = [5, 120, 8, 10, 44];
const isLargeNumber = (element) => element > 13;
console.log(array1.findIndex(isLargeNumber));
console.log(array1.findIndex(12));
console.log([1, , 3].findIndex((x) => x === undefined)); // 1  !==than give 0


// --------unshift-----//
const x=["bhakti",["misri"],"kristi"];
x.unshift("Shlok");
console.log(x);

// ---reduce---//
let arr=[   1,2,3,4,5]
let sum=arr.reduce((accum,curr)=>{
 return accum+curr;
})
console.log(sum);

// ----foreach----//
var name=["bhakti",4,'kitu','shkolk'];
name.forEach(function(name,i){
  console.log(name+" "+i);
})

//---splice--//
const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');//it define that 1 elemnt no 0 par feb print karavo 6e
console.log(months);
months.splice(4, 1, 'May');
months.splice(16, 1, 'aug');
console.log(months);
const removed = months.splice(3, 1);



//----map---//

const array1 = [1, 4, 9, 16];
// const map1 = array1.map(x => x * 2);

// console.log(map1);
const map1 = array1.map(x => x +1);
console.log(map1);

const numbers = [1, 4, 9];
const doubles = numbers.map((num) => num * 2);
console.log(doubles); 
console.log(numbers); 

// ------short-----/
// is use to right in order
var a=["bhakti","ami","shlok","zeksi"];
a.sort();
console.log(a);

// -------revrece----//

var a=["bhakti","ami","shlok","zeksi"];
a.reverse();
console.log(a);


// ---include--//
var a=["bhakti","ami","shlok","zeksi"];
var b=a.includes("ami");
console.log(b);


// ------isArray---//
var a=10;
var b=["bhakti"];
var c=Array.isArray(a);
var c=Array.isArray(b);
console.log(Array.isArray());
console.log(Array.isArray(null));//false
console.log(Array.isArray(undefined));//false
console.log(Array.isArray(17));//false
console.log(Array.isArray("Array"));//fasle
console.log(Array.isArray(true));
console.log(Array.isArray(false));
console.log({ });


//true
console.log(Array.isArray([]));
console.log(Array.isArray([1]));
console.log(Array.isArray(new Array()));
console.log(Array.isArray(new Array("a", "b", "c", "d")));
console.log(Array.isArray(new Array(3)));


// ----------flat----//
const arr1 = [0, 1, 2, [3, 4]];
console.log(arr1.flat());

const arr1 = [0, 1, 2, [[3, 4]]];
console.log(arr1.flat());

const array = [1, , 3, ["a", , "c"]];
console.log(array.flat());

const array2 = [1, , 3, ["a", , ["d", , "e"]]];
console.log(array2.flat()); // [ 1, 3, "a", ["d", empty, "e"] ]
console.log(array2.flat(2)); // [ 1, 3, "a", "d", "e"]

const arr4 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];

console.log(arr4.flat(3));//here 3 sudhi j [] remove karse
// --------slice-----------
const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

console.log(animals.slice(2));
console.log(animals.slice(2, 4));
console.log(animals.slice(1, 5));
console.log(animals.slice(-2));
console.log(animals.slice(2, -1));
console.log(animals.slice());

// --------join-------//
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(matrix.join()); 
console.log(matrix.join(";")); 
console.log([1, , 3].join()); // '1,,3'
console.log([1, undefined, 3].join()); // '1,,3'
console.log([1, null, 3].join());


// ---at---//
const cart = ["apple", "banana", "pear","kiwee"];

function returnLast(arr) {
  // return arr.at(-1);
  return arr.at(3);
}
const item1 = returnLast(cart);
console.log(item1); 