//01
// function exampleScope() {
//     let x = 10;
//     if (true) {
//       let y = 20; // y is scoped within this block
//       console.log(x); // 10
//       console.log(y); // 20
//     }
//     // console.log(y); // ReferenceError: y is not defined (out of scope)
//   }
//   exampleScope();

//02
// function addNumber(num1, num2){
//     console.log(num1+num2);
// }
// const result=addNumber(4,7);
// console.log("result:",result);//undefined

//slove that question
// function addNumber(num1,num2){
//     let result=num1+num2;
//     return result;
// }
//  let result1=addNumber(4,6);
// console.log("result :",result1);

//03
// var x = 5;

// function foo() {
//   var y = 10;

//   function bar() {
//     console.log(x + y);
//   }

//   bar();
// }

// foo();//15

//04
// function calculateSum(){
//     var num1=4;
//     var num2=3;
//     return num1+num2;
// }
// calculateSum();
// console.log(calculateSum(10,8));// 7

//05
// var x=1;

// function fun(){
//     var x =10;
//     console.log(x);
//     function fun1(){
//         console.log(x);
//     }
//     fun1()
// }
// fun();
// function fun2(){
//     console.log(x);
// }

// fun2()

// ---doc que of fun---//
//3
//Create a function called printArray that takes an array called arr as a parameter and prints the array.
// Write the syntax for this function.
// function printArray(array){
//     array=[1,2,3,4,5]
//     return array
// }
// printArray(1,2,3,4,5);
// console.log(printArray(1,2,3,4));

//4
//Write the syntax for declaring an anonymous JavaScript function and assigning it to a variable called multiply 
//that takes two parameters a and b, and returns their multiplication.
//  var name=function (a,b){
//     c=a*b;
//     return c;
// }
// name(2,4);
// console.log(name(2,4));

//5
//What is the syntax for calling a function named myFunction that doesn't take any parameters?
// function myFunction(){
//     console.log('helio');
// }
// myFunction();

//6
//Create a JavaScript arrow function called squareNumber that takes a parameter num and returns the square of that number
//. Write the syntax for this arrow function.
// function squareNumber(num){
//     return num*num;
// }
// console.log((squareNumber(2)));

//using arraow funaciton
// const squareNumber=(num)=>{ return num*num}
// console.log(squareNumber(4));

//7
//Write the syntax for declaring a JavaScript function called getFullName 
//that takes two parameters firstName and lastName, and returns the full name as a string.
// const getFullName=(firstName,lastName)=>{
//     //  fullName=firstName+lastName

//     return `${firstName} ${lastName}`
// }
// console.log(getFullName("bhakti","patel"));

//8
//What is the syntax for declaring a JavaScript function called calculateArea that takes two parameters length and width, 
//and returns the area of a rectangle?
// function calculateArea(length,width){
//     area=length*width;
//     return area;

// }
// console.log(calculateArea(3,4));

//9
//Write the syntax for declaring a JavaScript function called isEven that takes a 
//single parameter num and returns true if the number is even, and false otherwise.
// function isEven(num){
//     if(num%2===0){
//         return true
//     }else{
//         false
//     }
// }
// var result=isEven(5);
// console.log(result);

// function isEven(num){
//     return (num%2===0)
// }
// console.log(isEven(6));

//10
//Write a function that takes three parameters and returns the maximum number of three.(use ternary operator and if..else as well)
// (Also make all four types of function as we discussed in session) (total: 8 functions definition)
// 
// function maxnumber(a,b,c){
//     if(a>b && a>c){
//         return a
//     }
//     else if(b>c && b>a){
//         return b
//     }
//     else{
//         return c
//     }
// }
// console.log((maxnumber(3,1,6)));

// const maxnumber=(a,b,c)=>{
//     if(a>b && a>c){
//         return a
//     }
//     else if(b>a && b>c){
//         return b
//     }else{
//         return c
//     }
// }
// console.log(maxnumber(2,6,3));

//using ternay opreter
// function maxnumber(num1,num2,num3){
//     return (num1>num2 && num1>num3)? num1:(num2>num1 && num2>num3)? num2: num3;
// }
// console.log(maxnumber(4,6,2));

//11
//Create a JavaScript function called calculatePrice that takes a two parameter price, discount and returns discounted price. 	(defaultDiscount = 10%)
//Write the syntax for this arrow function.
// function calculatePrice(price,discount=0.1){
// //   var totalAmount=(price-discount)/100;
//       var totalAmount=price-(price*discount)
//   return totalAmount
// }
// console.log(calculatePrice(200,0.2));

//using arrow function
// const calculatePrice=(price,discount=0.1)=>{
//     var total=price-(price*discount);
//     return total;
// }
// console.log(calculatePrice(200));

//12
//Write the syntax for declaring a JavaScript function called isEven that 
//takes a single parameter num and returns true if the number is even, and false otherwise.
//  const isEven=(num)=>{
//     if(!num%2==0){
//         return true
//     }
//     else{
//         return false
//     }
//  }
//  console.log(isEven(6));

//13
// What is the syntax for declaring a JavaScript function called calculateMultiply that 
// takes two parameters num1 and num2, and returns their multiplication? 
// (make sure that never give an error if i passed anything) (if not pass anything then return 1)
// function calculateMultiply(num1,num2){
//     if(typeof num1 !=='number'|| typeof num2 !=='number'){
//         return 1
//     }

//     return num1*num2;
    
// }
// console.log(calculateMultiply(2,3));
// console.log(calculateMultiply());
// console.log(calculateMultiply(2,abc));//=>when we write alphabtes it give error

//14
//Write the syntax for declaring a JavaScript function called greet 
//that takes parameters and doesn't return any value. (if not passed an argument then prints ‘Anonymous’)
// function call(name='anonymous'){
//     console.log(name); 
// }
// call('great');
// call();

// function greet(num){
//     if(num==undefined){
//          console.log('Anonomys');
//     }else{
//         console.log('hello'+ ' '+num);
//     }
// }
// greet(null);
// greet();
// greet(undefined)
// greet('bhakti')

//15
//Write the syntax for declaring a JavaScript function called exponent that takes parameters and 
//returns an exponent of passed parameters. (if not passed an argument then returns power 2)

// function exponent(base,power){
//     if(base==undefined || power==undefined){
//         console.log('Power 2');
//     }
//     else{
//         console.log(base**power);
//     }
// }
// exponent(2,3);
// exponent()




