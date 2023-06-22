// 1
// function sayHello(){
//     console.log(Hello);
// }

// 2
// //with argument
// function calculateSum(num1,num2){
//     let c=num1+num2;
//     return c;
//     console.log(c);
// }
// console.log(calculateSum(4,6));

// without argument
// var num1=5;
//  var num2=4;
//  function calculateSum(num1,num2){
//      c= num1+num2;
//        return c;
//  }
//  calculateSum(num1,num2);
//  console.log(c);

// //without return with argument
// function calculateSum(num1=3,num2=3){
//     var a=num1+num2;
//     console.log(a);
// }
// calculateSum();

//without argument without return type

// function calculateSum(num1,num2){
// var a=num1+num2;
// console.log(a);
// }
// calculateSum(2,3);

3
// function printArray(arr){
//       return arr;
// }
// var arr=["bhakti","disha","dhwni","shlok"];
// console.log(arr[2]);
// console.log(arr);

// systex= function printArray(arr){
//     return arr;
// }
// var arr=[arr1,arr2,arr3,arr4]
// console.log(arr);

4
// systex -anonymous function
// let x=function(){
//     console.log("anonymous");
// }
// x();

// ex=
// using argument
// function calculateSum(a,b){
//     let c=a*b;
//     return c;
//     console.log(c);
// }
// console.log(calculateSum(4,6));

// let z=function(a,b){
//    console.log(a*b);
// }
// z(2,4);

5
// function myFunction(){
//     console.log("hello");
// }
// myFunction();
6
//  const squareNumber=(a)=>{
//     c=a*a;
//     return c;
//  }
//  console.log(squareNumber(4));
7
// function getFullName(fname,lname){
//           var a=fname+" "+lname;
//           return a;
// }
// var fullname=getFullName("bhakti","patel");
// console.log(fullname);


8
// function calculateArea(length,height){
//      let area=length*height;
//     return area;
// }
// let getRectArea=calculateArea(3,5);
// console.log(getRectArea);


9
// function isEven(num){
//     if(num%2==0){
//         return true;
//     }
//     else{
//         return false;

//     }
// }
// console.log(isEven(3));

10
function findMax(a,b,c){
    // var max=(a>b)?((a>c)?a:c):((b>c)?b:c);
    var max=(a>b && a>c)? a:(b>a&&b>c)?b:c;
    return max;
}
console.log(findMax(3,5,2));

// function findMax(a, b, c) {
//     if (a >= b && a >= c) {
//       return a;
//     } else if (b >= a && b >= c) {
//       return b;
//     } else {
//       return c;
//     }
//   }
//   console.log(findMax(5, 2, 7)); 

// //with argument with return type

// function findMax(a, b, c) {
//     return (a > b) ? ((a > c) ? a : c) : ((b > c) ? b : c);
//   }
//   console.log(findMax(5, 2, 7));  


//   //with return type and without argument
//   function findMax() {
//     const a = 5;
//     const b = 2;
//     const c = 7;
    
//     return (a > b) ? ((a > c) ? a : c) : ((b > c) ? b : c);
//   }
//   console.log(findMax()); 

//   //without return type and without argument

//   const findMax = () => {
//     const a = 5;
//     const b = 2;
//     const c = 7;
    
//     const max = (a > b) ? ((a > c) ? a : c) : ((b > c) ? b : c);
//     console.log(max);
//   };
//   findMax();

//   //without return type and without argument

//   function findMax(a, b, c) {
//     const max = (a > b) ? ((a > c) ? a : c) : ((b > c) ? b : c);
//     return max;
//   }
  
//   console.log(findMax(5, 2, 7));  


// //   -------using if else-------   //

// // with return type and with argument

// function findMax(a, b, c) {
//     if (a >= b && a >= c) {
//       return a;
//     } else if (b >= a && b >= c) {
//       return b;
//     } else {
//       return c;
//     }
//   }

//   console.log(findMax(10, 12, 8));  

//   //without retutn type and without argument

//   function findMax() {
//     const a = 5;
//     const b = 12;
//     const c = 17;
    
//     if (a >= b && a >= c) {
//       console.log(a);
//     } else if (b >= a && b >= c) {
//       console.log(b);
//     } else {
//       console.log(c);
//     }
//   }
  
//   findMax();

//   //with argument and without return type

//   function findMax(a, b, c) {
//     if (a >= b && a >= c) {
//       console.log(a);
//     } else if (b >= a && b >= c) {
//       console.log(b);
//     } else {
//       console.log(c);
//     }
//   }
  
//   findMax(5, 8, 10);

// //   without argument with return type

// function findMax() {
//     const a = arguments[0];
//     const b = arguments[1];
//     const c = arguments[2];
  
//     if (a >= b && a >= c) {
//       return a;
//     } else if (b >= a && b >= c) {
//       return b;
//     } else {
//       return c;
//     }
//   }
  
//   const maxNumber = findMax(55, 69, 7);
//   console.log(maxNumber);

//   11
//   const calculatePrice = (price, discount=0.1) => price - (price * discount);
//   console.log(calculatePrice(100));    

// //   using normale
// function calculatePrice(price, discount = 0.1) {
//     const discountedPrice = price - (price * discount);
//     return discountedPrice;
//   }
//   console.log(calculatePrice(200));       

12

// using arrow 
const isEven = num => num % 2 === 0;
console.log(isEven(4));   // Output: true
console.log(isEven(0));
console.log(isEven(-2));  // Output: true



13
function calculateMultiply(num1, num2) {
    if ( num1 !== 'number' ||  num2 !== 'number') {
      return NaN;
    }
  
    return num1 * num2;
  }
  console.log(calculateMultiply(5, 2));       // Output: 10
  console.log(calculateMultiply(3, 4));       // Output: 12
  console.log(calculateMultiply(2, 'hello')); // Output: NaN (invalid argument)
  console.log(calculateMultiply('5', []));    // Output: NaN (invalid argument)

  13
 

// try 13th 
function calculateMultiply(num1, num2) {
    if(num1!=undefined && num2!=undefined){
        return num1*num2;
    }
    else{
        return 1;
    }
}
 
let  ans1=calculateMultiply('8',8);
console.log(ans1);
let  ans2=calculateMultiply();
console.log(ans2);

// 13-over
function calculateMultiply(num1, num2) {
    if (num1 === undefined && num2 === undefined) {
      return 1;
    } else if (num1 === undefined) {
      num1 = 1;
    } else if (num2 === undefined) {
      num2 = 1;
    }
  
    return num1 * num2;
  }
  calculateMultiply(2,1);
  console.log(calculateMultiply(2,3));
  console.log(calculateMultiply());
  

//with argument and return type
function calculateMultiply(num1,num2){
    if(num1 !=undefined && num2 !==undefined){
        return num1*num2;
    }
    else{
        return 1;
    }
}
console.log(calculateMultiply(10,20));

//without argument with return type
function calculateMultiply(){
    const num1=10;
    const num2=20;
    if(num1!==undefined && num2!==undefined){
        return num1*num2;
    }
    else{
        return 1;
    }
}
console.log(calculateMultiply());

//with argument without return type
function calculateMultiply(num1,num2){
    if(num1 !=undefined && num2 !==undefined){
        const multiply=num1*num2;
        console.log(multiply);
    }
    else{
        return 1;
    }
}
(calculateMultiply(10,20));

//without argument without return type
function calculateMultiply(){
    const num1=10;
    const num2=100;
    if(num1 !==undefined&& num2!==undefined){
         const multiply=num1*num2;     
         console.log(multiply);
    }
    else{
        return 1;
    }
}
calculateMultiply();
 
//arrow function

//with argument and return type
const calculateMultiply=(num1,num2)=>{
    if(num1!==undefined && num2!==undefined){
        return num1*num2;
    }
    else{
        return 1;
    }
}
console.log(calculateMultiply());

//without argument with return type
const calculateMultiply=()=>{
    const num1=10;
    const num2=20;
      if(num1!==undefined && num2!==undefined){
        return num1*num2;
      }
      else{
        return 1;
      }
}
console.log(calculateMultiply());


      //with argument without return type
      const calculateMultiply = (num1, num2) => {
       if (num1 !== undefined && num2 !== undefined) {
           const multiply = num1 * num2;
           console.log(multiply);
       }
       else {
            return 1;
         }
      }
     calculateMultiply(10, 20);
 
     //without argument without return type
      const calculateMultiply=()=>{
      const num1=10;
      const num2=20;
      if(num1!==undefined&&num2!==undefined){
           const multiply=num1*num2;
          console.log(multiply);
      }
       else{
        return 1;
     }
   }
   calculateMultiply();


14
function greet(name){
    if(name==undefined){
       console.log("anonymous");
    }
    else{
       console.log("beautiful")
    }
}
greet();
greet(9);

function greet(name){
    if(name!=undefined){
        console.log("helo");
    }else{
        console.log("aynomous");
    }
}
greet();
greet(9);
           


 
  15
  var a=2;
  var b=3;
function  exponent(a,b){
        if(  c=a**b){
          return Math.pow(a,b); }
          else{
            return Math.pow(2);
          }
        
}

console.log(exponent(2,3));
console.log();


var a=2;
var b=3;
function  exponent(a){
      if(a===undefined){
        return a*a;
      }else{
        return Math.pow(a);
      }
      
}

console.log(exponent(2,3));
console.log();   

15
function exponent(num){
    if(num!==undefined) {
        return num**num;
    }
    else{
      return "power 2";
    }
}
console.log(exponent());
console.log(exponent(2));

function exponent(num){
    if(num==undefined){
        return "power 2"
    }
    else{
        return num**num;
    }
}
console.log(exponent());
console.log(exponent(2));


  
  

  



 
 
  
 
    



