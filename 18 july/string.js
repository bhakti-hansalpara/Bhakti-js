JS - String

Questions:

// Which string method is used to determine the length of a string? .length
// How would you convert a string to uppercase using a string method? .toUpperCase
// Which method is used to find the position of a specified value within a string? find
// How would you concatenate two strings using a string method? concat
// Which method would you use to extract a specific portion of a string? slice
// How can you replace a specific value with another value within a string using a method? replace
// Which method would you use to split a string into an array of substrings based on a specified separator? string_to_array
// How would you remove leading and trailing whitespace from a string using a method? trem 
// Which method is used to search for a specified pattern and return the first occurrence in a string? indexOf
// How can you check if a string starts with a specific value using a string method? startsWith

const message = "Hello, World!";
console.log(message.length);//13

const str = "HelloWorld";
console.log(str.toLowerCase());//helloworld

const sentence = "I love JavaScript!";
console.log(sentence.indexOf("JavaScript"));//7

const name = "John";
const greeting = `Hello, ${name}!`;
console.log(greeting);//Hello, John!

const text = "Hello, World!";
console.log(text.substring(7));//World!

const message = "Hello, World!";
console.log(message.replace("World", "Universe"));//Hello, Universe!


const words = "apple banana orange";
const fruits = words.split(", ");
const fruits2 = words.split(" ");

console.log(fruits);//[ 'apple banana orange' ]

console.log(fruits2);//[ 'apple', 'banana', 'orange' ]

const text = "   Hello, World!   ";
console.log(text.trim()); //Hello, World!

const sentence = "The quick brown fox jumps over the lazy dog.";
console.log(sentence.includes("dog"));//true

const str = "Hello, World!";
console.log(str.endsWith("!"));//true

const sentence = "JavaScript is fun!";
console.log(sentence.charAt(4));//S

const str1 = "Hello";
const str2 = "World";
console.log(str1.concat(", ", str2));//Hello, World

const sentence = "JavaScript is awesome!";
console.log(sentence.slice(0, 10));//JavaScript

const text = "Hello, World!";
console.log(text.repeat(3));//Hello, World!Hello, World!Hello, World!

const sentence = "The quick brown fox";
console.log(sentence.split(" "));//[ 'The', 'quick', 'brown', 'fox' ]

const str = "Hello, World!";
console.log(str.indexOf("o"));//4

const sentence = "JavaScript is fun!";
console.log(sentence.substring(4, 10));//Script

const text = "Hello, World!";
console.log(text.charAt(7));//W

const sentence = "I love JavaScript!";
console.log(sentence.split("o"));//[ 'I l', 've JavaScript!' ]
const str = "Hello, World!";
console.log(str.includes("World"));//true

const sentence = "JavaScript is cool!";
console.log(sentence.lastIndexOf("o"));//16

const text = "Hello, World!";
console.log(text.startsWith("Hello"));//true

const str = "Hello, World!";
console.log(str.toUpperCase());//HELLO, WORLD!

const sentence = "JavaScript is awesome!";
console.log(sentence.toLowerCase());///javascript is awesome!

 const str = "Hello, World!";
console.log(str.charAt(13));//emty nothing print

const sentence = "JavaScript is fun!";
console.log(sentence.substr(4, 10));//Script is 

 const text = "Hello, World!";
console.log(text.includes("WORLD"));//false

 const sentence = "JavaScript is amazing!";
console.log(sentence.replace("amazing", "awesome"));//JavaScript is awesome!

 const str = "Hello, World!";
console.log(str.charCodeAt(4));//asky value of index 4 is 111

 const sentence = "JavaScript is powerful!";
console.log(sentence.split(" ").length);//3

 const text = "Hello, World!";
console.log(text.search("W"));//7

 const sentence = "JavaScript is dynamic!";
 console.log(sentence.slice(-7));//ynamic!


const str = "Hello, World!";
console.log(str.concat(" Goodbye!"));//Hello, World! Goodbye!

 const sentence = "JavaScript is flexible!";
console.log(sentence.charAt(sentence.length - 2));//e

const sentence = "JavaScript is interesting!";
console.log(sentence.substring(10));// is interesting!

 const str = "Hello, World!";
console.log(str.search("World"));//7

 const sentence = "JavaScript is versatile!";
console.log(sentence.split(" ").reverse().join(" "));//versatile! is JavaScript

 const sentence = "JavaScript is powerful!";
console.log(sentence.substring(4, 10));//Script

 const str = "Hello, World!";
console.log(str.charCodeAt(0));//72

 const sentence = "JavaScript is amazing!";
console.log(sentence.slice(4, 10));//Script

 const text = "Meghana patel";
console.log(text.indexOf("a", 8));//9

 const sentence = "JavaScript is fun!";
console.log(sentence.startsWith("Java"));//true

 const str = "Hello, World!";
console.log(str.endsWith("!"));//ture

 const sentence = "JavaScript is amazing!";
console.log(sentence.lastIndexOf("a", 12  ));//3

 const text = "Hello, World!";
console.log(text.substring(7, 2));//llo


 const sentence = "JavaScript is cool!";
console.log(sentence.concat(" I love it!"));//JavaScript is cool! I love it!

 const str = "Hello, world!";
console.log(str.toUpperCase().charAt(7));//W

 const str = "Hello, World!";
console.log(str.toUpperCase().charAt(7));//W

const sentence = "JavaScript is amazing!";
console.log(sentence.replace("amazing", "awesome").toUpperCase());//JAVASCRIPT IS AWESOME! 

Write a JavaScript function to check whether an 'input' is a string or not.
Test Data :
console.log(is_string('w3resource')); // true
console.log(is_string([1, 2, 4, 0])); // false

function is_string(input){
    return typeof input=='string'
}

Write a JavaScript function to check whether a string is blank or not.
Test Data :
console.log(is_Blank('')); // true
console.log(is_Blank('abc')); // false
function is_Blank(input){
    return  input===''
}

Write a JavaScript function to split a string and convert it into an array of words.
Test Data :
console.log(string_to_array("Robin Singh")); // ["Robin", "Singh"]

function string_to_array(input){
    return input.split(" ")
}

Write a JavaScript function to extract a specified number of characters from a string.
Test Data :
console.log(truncate_string("Robin Singh",4));
 // "Robi"

 function truncate_string(str, length) {
    return str.substring(0, length);
  }
  
Write a JavaScript function that hides email addresses to prevent unauthorized access.
Test Data :
console.log(protect_email("robin_singh@example.com")); 

Output:  "robin...@example.com"

function protect_email(str) {
  return str.replace(str.slice(5, str.indexOf("@")), "...");
}

Write a JavaScript function to parameterize a string.
Test Data :
console.log(input("Robin Singh from USA."));
Output: "robin-singh-from-usa"

  function string_parameterize(input) {
    return input
      .toLowerCase()
      .split(' ')
      .join('-');
  }
  
  console.log(string_parameterize("Robin Singh from USA."));
  

  Write a JavaScript function to capitalize the first letter of a string.
Test Data :
console.log(capitalize('js string exercises'));
Output: "Js string exercises"
// function capitalize(str){
//     return str.indexOf(0).toUpperCase()//not right
// }

function capitalize(input) {
    return input.charAt(0).toUpperCase() + input.slice(1);//till uppercase give only J
  }
  

Write a JavaScript function to capitalize the first letter of each word in a string.
Test Data :
console.log(capitalize_Words('js string exercises'));


function capitalize_Words(input) {
    const words = input.split(' ');
    const capitalizedWords = [];
  
    for (let i = 0; i < words.length; i++) {
      const word = words[i];
      const capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1);
      capitalizedWords.push(capitalizedWord);
    }
  
    return capitalizedWords.join(' ');
  }
  

Write a JavaScript function to insert a string within a string at a particular position (default is 1).
Test Data :

// Output: "We are doing some exercises."
// "JavaScript We are doing some exercises."
// "We are doing some JavaScript exercises.”
function insert(originalString, stringToInsert, position = 1) {
  if (position > originalString.length) {
    return originalString + stringToInsert;
  } else {
    return (
      originalString.slice(0, position) +
      stringToInsert +
      originalString.slice(position)
    );
  }
}

console.log(insert('We are doing some exercises.'));
console.log(insert('We are doing some exercises.', 'JavaScript '));
console.log(insert('We are doing some exercises.', 'JavaScript ', 18));



 What is the output of the following code?
let text = "Apple, Banana, Kiwi";
text.slice(-12, -6);
console.log(text);//Apple, Banana, Kiwi

let text = "Apple, Banana, Kiwi";
let res = text.slice(-12, -6);
console.log(res);


//new
//Write a JavaScript function that takes a string with both lowercase and upper case letters as a parameter. It converts upper case letters to lower case, and lower case letters to upper case.
//Test Data :
//console.log(swapcase('AaBbc'));
//"aAbBC"

function swapcase(text){
  if(text==toUpperCase){
    return text.toLowerCase()
  }else{
    return text.toUpperCase
  }
}
console.log(swapcase(AaBbc));

function swapcase(str) {
  var swappedString = "";

  for (var i = 0; i < str.length; i++) {
    var char = str.charAt(i);

    if (char === char.toUpperCase()) {
      swappedString += char.toLowerCase();
    } else {
      swappedString += char.toUpperCase();
    }
  }

  return swappedString;
}

console.log(swapcase('AaBbc')); // Output: "aAbBC"

function isPowerOf(base, number) {
  // Use the logarithmic property to check if log_base(number) is an integer
  const logarithm = Math.log(number) / Math.log(base);
  return Number.isInteger(logarithm);
}

console.log(isPowerOf(3, 27)); // Output: true
console.log(isPowerOf(3, 9));  // Output: true
console.log(isPowerOf(2, 4));  // Output: true
console.log(isPowerOf(2, 8));  // Output: false

function isPowerOf(base, number) {
  if (number === 1) {
    return true;
  }

  let result = base;

  while (result < number) {
    result *= base;
  }

  return result === number;
}

console.log(isPowerOf(3, 27)); // Output: true
console.log(isPowerOf(3, 9));  // Output: true
console.log(isPowerOf(2, 4));  // Output: true
console.log(isPowerOf(2, 10));  // Output: false

function isPowerOf(base, number) {
  return number % base === 0;
  return number % base === 0 && base**number===0;

}

console.log(isPowerOf(3, 27)); // Output: true
console.log(isPowerOf(3, 9));  // Output: true
console.log(isPowerOf(2, 4));  // Output: true
console.log(isPowerOf(2, 10));  // Output: false =>in thid case also ture that //it is not run




function isPowerOf(base, number) {
  if (number === 1) {
    return true;
  }

  if (number < base) {
    return false;
  }

  return isPowerOf(base, number / base);
}

console.log(isPowerOf(3, 27)); // Output: true
console.log(isPowerOf(3, 9));  // Output: true
console.log(isPowerOf(2, 4));  // Output: true
console.log(isPowerOf(2, 10));  // Output: false 


let a=[{id:1}, {id:2}]
let b=[
    {id:1, name:"hii"},
    {id:2, name:"hii"},
    {id:3, name:"hii"},
    {id:4, name:" "}
]

function findObject(arrA, arrB) {
  return arrB.filter((objB) => !arrA.some((objA) => objA.id === objB.id));
}
let result = findObject(a, b);
console.log(result);



































