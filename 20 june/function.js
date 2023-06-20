// const myfriend=function (params) {
//     console.log("hello every one");
// } 
// myfriend();

// const =function (params) {
//     console.log("hello every one");
// } 
// myfriend();

//with aprameters
// function frd(a,b) {
//     console.log(a+b) 
// }
// frd(2,6);

//funstion exprestion
const add=function(a,b) {
    return a+b;
}
console.log(add(3,4));

const getRectArea = function(width, height) {
    return width * height;
  }
  
  console.log(getRectArea(3, 4));

  const getcircleArea = function (radies) {
    return 3.14*radies*radies;
  }
  console.log(getcircleArea(2));

  //anonymous functions
  let x=function(){
    console.log("my name is Bhakti");
  }
  x();

  //arrow function
  const add=(a,b)=>{
    return a+b;
  }
  console.log(add(6,8));

  const add = (a,b) => a+b;
console.log(add(10,5)); // expected output: 15


const a = function() {
    console.log('I am from function expression - a');
  };
  //function b is expecting a function as parameter
  function b(a){ 		
    console.log('Hey I am from function - b');
    a();
  }
  b(a);	//Function expression 'a' is passed as an argument to 'b'

  //CALLLING FUNCTION WITHOUT ALL ARGUMENTS
  function myFunc(a,b) {
    console.log("The values are :")
    console.log("a = ",a)
    console.log("b = ",b)
  }
  myFunc() //Calling with 0 argument


  //without thge deaflut perameters//No default parameter value provided: // output 15,NaN, NaN
function add(a, b) {
    return a + b;
  }
  
  console.log(add(10, 5));
  console.log(add(10));
  console.log(add());


  //No default parameter value provided:
function add(a=0, b=5) {
    return a + b;
  }
  
  console.log(add(10, 0));
  console.log(add(10));
  console.log(add());

  function add(a=0, b=0) {
    return a + b;
  }
  
  console.log(add(10, 0));
  console.log(add(10));
  console.log(add());
  
//rest perameter//
  function myFunc(a,b,c,...extraArgs) {
    console.log('a = ',a);
    console.log('b = ',b);
    console.log('c= ',c);
    console.log('Extra Arguments = ',extraArgs); 
  }
  myFunc(1, 2, 3, 4, 5);
  
  
  function myFunc() {
    console.log(arguments[0]);
    console.log(arguments[1]);
    console.log(arguments[2]);
    console.log(arguments[3]);
    console.log(arguments[4]); 
    console.log(arguments[5]);
  }
  myFunc(1,2,"This is argument object",'a','b','hello')


  function func1() {
    console.log(arguments[0]);
    arguments[1] = "I am new value" //The 2nd argument got re-assigned
    console.log("In function func1, y = ",arguments[1]); 
  }
  x = "Hello Guys!"
  y = "I am old value"
  func1(x,y);
  console.log("In global, y = ", y)

  function myFunc(a) {
    console.log(a);
    console.log(arguments[0]); 
    console.log(arguments[1]); 
  }
  
  myFunc("One","Two");

//return function
  function myFunc() {
    //Returning a function
   return function calc(x) { return x * 2; };
 }
 
 let a = myFunc()
 let answer = a(2);
 console.log(answer)

 //funstion hoisting
 
 
 greet("World");

 function greet(name) {
   console.log("Hello " + name);
 }

 //local scoope
 function demo(){
    let a = 10;
     console.log("Bhakti = ",a);
   }
   demo();

   //global scoop
   let val = 10
function demo(){
    console.log("hello = ",val);
}
demo();
let a="every-one"
console.log("Bhakti here = ",a);

   //lexical scope
   var x=8;
   function outsider() {
    let y=9;

    function innersider() {
        let z=10;
        console.log(outsider(x,y,z));
    }
    // console.log(x,y,z);
   }
 

   function demo(){
    let a = 10;
    anotherDemo()
    function anotherDemo(){
        let b = 20;
    }
    console.log("Hey, = ",b);
}
demo()

let fact = function factorial(f){
    if(f<=1) return 1;
    else
       return f*factorial(f-1)
  }
  console.log("The factorial of 5 = ",fact(5));


//array in function
  function myFunc(theArr) {
  theArr[0] = 30;
}

const arr = [45];

console.log(arr[0]); // 45
myFunc(arr);
console.log(arr[0]); // 30

  

 
  
  
  
  