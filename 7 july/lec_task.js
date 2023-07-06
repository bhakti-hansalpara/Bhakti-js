// const a=["JS","HTML","CSS"]
// const d={name:"JS",
//         lable:a.map(e=>e.id==="JS").lable}
//         console.log(d);//==>it not work in foreach and find other method it work


// const a = "hello word";
// const reversed = a.split('').reverse().join('');
// console.log(reversed);
//it return drow olleh it is wrong beacuse 1st only reverce hello not word to slove it using map in map also split word than it works

// const a = "hello word";
// const reversed = a.split(' ').map(word => word.split('').reverse().join('')).join(' ');
// console.log(reversed);

// const a=["JS","HTML","CSS"]
// output a="JS","HTML","CSS"

// const a = ["JS", "HTML", "CSS"];
// const output = a.join('", "');
// // console.log(`"${output}"`);
// console.log(output);//=>it is use

// const a = ["JS", "HTML", "CSS"];
// // const output = a.join('", "');
// const output = a.join(" "," ");//=>it is not work 

// console.log(output);

// const a = ["JS", "HTML", "CSS"];
// const output = a.map(item => `"${item}"`).join(", ");
// console.log(output);

// ---practice questions---//
// var x = 10;
// {
//   let x = 20;
//   console.log(x);
// }
// console.log(x);

// const x = 5;
// if (x > 2) {
//   let y = 10;
// }

// let z = 5;
// {
//   let z = 10;
//   {
//     let z = 15;
//     console.log(z);
//   }
//   console.log(z);
// }
// console.log(z);

// var a = 10;

// let b = 20;
// const c = 30;
// console.log(a);

// let x = 5;
// if (true) {
//   let x = 10;
//   console.log(x);
// }
// console.log(x);

// var x = 10;
// {
//   var x = 20;
//   console.log(x);
// }
// console.log(x);

// let num1 = 5;
// let num2 = 10;
// let sum = num1 + num2;
// console.log(sum);
// -----object question------//
// JS - Object

// Questions:
// const source = { a: 1 };
// const target = { b: 2 };
// Object.assign(target, source);
// console.log(target);

// const obj1 = { a: 12, b: 23 };
// const obj2 = obj1;
// const obj3 = { ...obj1 };
// obj1.c = 23;
// console.log(obj1.c, obj2.c, obj3.c);

// const obj1 = { a: 12, b: 23 };
// const obj2 = { a: 44, b: 45 };
// const obj3 = Object.assign(obj1, obj2);
// obj2.a = 22;
// console.log(obj1, obj2, obj3);

// const obj1 = { a: 77, b: 67 };
// const obj2 = { a: 90, b: 34 };
// const obj3 = Object.assign(obj1, obj2);
// obj1.a = 22;
// console.log(obj3);

// const obj1 = { a: 77, b: 67 };
// const obj2 = { a: 90, b: 34 };
// const obj3 = Object.assign({}, obj1, obj2);
// obj1.a = 22;
// console.log(obj3);

// const source = { a: { b: 1 } };
// const target = {};
// Object.assign(target, source);
// console.log(target);



// const source = { a: { b: 1 } };
// const target = {};
// Object.assign(target, JSON.parse(JSON.stringify(source)));
// source.a.b = 2;
// console.log(target);

// const source = { a: 1 };
// const target = Object.assign({}, source);
// delete target.a;
// console.log(source);

// const target = { a: 1 };
// const source = { b: 2 };
// const result = Object.assign(target, source);
// console.log(result === source);

// const target = { a: 1 };
// const source = { b: 2 };
// const result = Object.assign(target, source);
// console.log(result === { a: 1, b: 2 });

// const target = { a: 1 };
// const source = { b: 2 };
// Object.assign(target, source);
// target.b = 234;
// console.log(source);

// const target = {};
// const source = { a: 1 };
// const result = Object.assign(target, source);
// source.a = 2;
// console.log(result);

// const target = {};
// const source = { a: { b: 1 } };
// const result = Object.assign(target, source);
// result.a.b = 2;
// console.log(source);


// const target = { a: { b: 1 } };
// const source = { a: [2, 3, 4] };
// const result = Object.assign(target, source);
// console.log(result);

// const target = { a: { b: 1 } };
// const source = { a: [2, 3, 4] };
// const result = Object.assign(target, source);
// target.a[2] = 90;
// console.log(result);

// const target = { a: { b: { c: 1 } } };
// const source = { a: { b: { d: 2 } } };
// const result = Object.assign(target, source);
// result.a.b.d = 3;
// console.log(target);

//  Write a JavaScript program to list the properties of a JavaScript object.
// Sample object:
// var student = {
// name : "David Rayy",
// sclass : "VI",
// rollno : 12 
// };

// Write a JavaScript program to delete the rollno property from the following object. Also print the object before or after deleting the property.
// Sample object:
// var student = {
// name : "David Rayy",
// sclass : "VI",
// rollno : 12 
// };

// function operationObj(obj) {
//   obj = {...obj, c: 12}
// }
// let a = {  x: 34,  y: 56 }
// operationObj(a);
// console.log(a);

// function operationObj(obj) {
//   obj.z = {...obj, c: 12}
// }
// let a = {
//   x: 34,
//   y: 56
// }
// operationObj(a);
// console.log(a);

// const target = { a: { b: { c: 1 } } };
// const source = { a: { b: { d: 2 } } };
// const result = Object.assign(target, source);
// result.a.b.d = 3;
// console.log(source);

// Make a function that works as Object.assign() without using the in-built method. (make only for 2 arguments only)

// Write a visualization notes on given examples
// let obj1 = { a: 23, b: 45 };
// let arr1 = [{ ...obj1 }];
// let arr2 = arr1;
// arr2[0].c = 5;
// console.log(arr1)

// let obj1 = { a: 23, b: 45, c: { f: 990 } };
// let arr1 = [{ ...obj1 }];
// let arr2 = arr1;
// arr2[0].c = 5;
// obj1.c.f = 30;
// console.log(arr1); 

// let obj1 = { a: 23, b: 45, c: { f: 990 } };
// let arr1 = [{ ...obj1 }];
// let arr2 = arr1;
// obj1.c.f = 30;
// console.log(arr1); 



// let obj1 = { a: 23, b: 45 };
// let arr1 = Object.assign([], [{ ...obj1 }]);
// let arr2 = arr1;
// arr2[0].c = 5;
// console.log(arr1); 

// let obj1 = { a: 23, b: 45 };
// let arr1 = [{ ...obj1 },{obj2:8}];
// let arr2 = Object.assign([], arr1);
// arr2[1].c = 5;
// console.log(arr1); 

// let obj1 = { a: 23, b: 45 };
// let arr1 = [{ ...obj1 }];
// let arr2 = Object.assign([], [{...arr1[0]}]);
// arr2[0].c = 5;
// console.log(arr1); 

// let obj1 = { a: 34, b: 56, c: { h: 77, j: 90 } };
// let obj2 = Object.assign({}, obj1);
// let obj3 = Object.assign({ ...obj2 }, { c: { k: 44 } });
// obj2.c.h = 67;
// console.log(obj1, obj2, obj3);//=> onj1={ a: 34, b: 56, c: { h: 77, j: 90 } }
//                               //=>obj2=>h=67
//                              //=>obj3=>not chnage same as obj1



// function example() {
//     console.log(x);
//     var x = 10;
//   }
//   example();

// function example() {
//     console.log(x);
//     let x = 10;
//   }
//   example();

// const x = 5;
// x = 10;
// console.log(x);


// let x = 5;
// let x = 10;
// console.log(x);

// if (true) {
//     let x = 5;
//   }
//   console.log(x);


// if (true) {
//     let x = 5;
//     console.log(x);
//   }

// for (var i = 0; i < 5; i++) {
//     setTimeout(function() {
//       console.log(i);
//     });
//   }

// var x; // Variable declaration is hoisted
// console.log(x); // x is undefined at this point
// x = 10;

// function updateName(obj) {
//     obj.name = "Jane";
//   }
  
//   let person = { name: "John" };
//   updateName(person);
//   console.log(person.name);

// let obj1 = { a: 34, b: 56, c: { h: 77, j: 90 } };
// let obj3 = Object.assign( obj1, c: { k: 44 } );

// obj3.c.h = 67;
// console.log(obj1,obj3);
// let obj1 = { a: 34, b: 56, c: { h: 77, j: 90 } };
// let obj2 = JSON.parse(JSON.stringify(obj1));

// obj2.c.h = 67;
// console.log(obj1, obj2);
// let obj1 = { a: 34, b: 56, c: { h: 77, j: 90 } };
// let obj2 = { ...obj1, c: { k: 44 } };

// obj2.c.h = 67;
// console.log(obj1, obj2);

// let obj1 = { a: 34, b: 56, c: { h: 77, j: 90 } };
// let obj2 = Object.assign({}, obj1);
// let obj3 = Object.assign({ ...obj2 }, { c: { k: 44 } });

// obj2.c.h = 67;
// console.log(obj1, obj2, obj3);


