// diffrence between substring and slice
// const str="Hello, World";
// console.log(str.substring(-3)); // Output: "Hello, World!"
// console.log(str.slice(-3)); // Output: "ld!"

// const words = "apple, banana, orange";
// // const fruits = words.split(" , "); //[ 'apple, banana, orange' ]
// const fruits = words.split(", ");//[ 'apple', 'banana', 'orange' ]
// console.log(fruits);

//in repeat (-) is not allowed it give same way

// const sentence = "The quick brown fox";
// console.log(sentence.split(" "));

//splice ma jenathi splice karvanu hoi e nikdi jai 
// const sentence = "I love JavaScript!";
// console.log(sentence.split("o")); //[ 'I l', 've JavaScript!' ]

// const sentence = "JavaScript is fun!";
// // console.log(sentence.substr(3, 12));//aScript is f
// console.log(sentence.substring(3, 12));//aScript i

// const sentence = "JavaScript is flexible!";
// console.log(sentence.charAt(sentence.length-1));///!

// const sentence = "JavaScript is interesting!";
// console.log(sentence.substring(10));// is interesting!

// const str = "Hello, World!";
// console.log(str.search("World"));


// const sentence = "JavaScript is versatile!";
// console.log(sentence.split(" ").reverse().join(" "));//versatile! is JavaScript


// const sentence = "JavaScript is powerful!";
// console.log(sentence.substring(4, 10));//script


// const str = "Hello, World!";
// console.log(str.charCodeAt(0));
// //charcodeAt is give unicode number of that possiton 


// const sentence = "JavaScript is amazing!";
// console.log(sentence.slice(4, 10));//Script

// const text = "Hello, World!";
// console.log(text.indexOf("l", 5));
//jyare index of ma 2nd pera apiye tyar pachi thii e indexof gote agad ni java de


// const sentence = "JavaScript is fun!";
// console.log(sentence.startsWith("Java"));

//  const str = "Hello, World!";
// console.log(str.endsWith("!"));

// const sentence = "JavaScript is amazing!";
// console.log(sentence.lastIndexOf("a", 12));//3

// const text = "Hello, World!";
// console.log(text.substring(8, 2));//llo, W

// const sentence = "JavaScript is cool!";

// console.log(sentence.concat(" I love it!"));

//  const str = "Hello, World!";
// console.log(str.toUpperCase().charAt(7));//W

//  const str = "Hello, World!";
// console.log(str.toUpperCase().charAt(7));//W

// const sentence = "JavaScript is amazing!";
// console.log(sentence.replace("amazing", "awesome").toUpperCase());

// Write a JavaScript function to check whether an 'input' is a string or not.
// Test Data :
// console.log(is_string('w3resource')); // true
// console.log(is_string([1, 2, 4, 0])); // false

// function check_string(str){
//     return typeof str=='string'
// }
// console.log(check_string('w3resource')); // true
// console.log(check_string([1, 2, 4, 0]));//false

// function check_string(value) {
//     return typeof value === 'string';
// }

// console.log(check_string('w3resource')); // Output: true
// console.log(check_string([1, 2, 4, 0])); // Output: false

// Write a JavaScript function to check whether a string is blank or not.
// Test Data :

// function is_Blank(value){
//     return value.trim()  === ' ';
// }
// console.log(is_Blank('')); // true
// console.log(is_Blank('abc')); // false


// Write a JavaScript function to split a string and convert it into an array of words.
// Test Data :
// console.log(string_to_array("Robin Singh")); // ["Robin", "Singh"]

// function string_to_array(words){
//     return words.split(" ")
// }
// console.log(string_to_array("Robin Singh")); // ["Robin", "Singh"]

// Write a JavaScript function to extract a specified number of characters from a string.
// Test Data :
// console.log(truncate_string("Robin Singh",4)); // "Robi"

// function truncate_string(str, length){
//     return str.slice(0, length);
// }
// console.log(truncate_string("Robin Singh",9)); // "Robi"

// Write a JavaScript function that hides email addresses to prevent unauthorized access.
// Test Data :
// console.log(protect_email("robin_singh@example.com")); 
// Output:  "robin...@example.com"

// function protect_email(email) {
//     const atIndex = email.indexOf('@');
//     if (atIndex >= 0) {
//         const username = email.slice(0, atIndex);
//         const domain = email.slice(atIndex + 1);
//         const protectedUsername = username.slice(0, 5) + '...';
//         return protectedUsername + '@' + domain;
//     } else {
//         return email;
//     }
// }

// console.log(protect_email("robin_singh@example.com")); // Output: "robin...@example.com"

// Test Data :
// console.log(string_parameterize("Robin Singh from USA."));
// Output: "robin-singh-from-usa"

function string_parameterize(sentence){
   return sentence.lowerCase().split('-').join()
}
console.log(string_parameterize("Robin Singh from USA."));

// 66
// function capitalize(input){
//     return input.charAt(0).toUpperCase()+input.slice(1);
// }
// console.log(capitalize('js string exercises'));  // Js string exercises
// console.log(capitalize('hello it is me')); 

//67
// Write a JavaScript function to capitalize the first letter of each word in a string.
// Test Data :
// console.log(capitalize_Words('js string exercises'));
// "Js String Exercises"

// function capitalize_words(input){
//     const words = input.split(' ');
//     for(var i=0; i< words.length;i++){
//     words[i] = words[i].charAt(0).toUpperCase()+words[i].slice(1);
//   }
//   return words.join(" ");
// }
// console.log(capitalize_words('js string exercises'));  























