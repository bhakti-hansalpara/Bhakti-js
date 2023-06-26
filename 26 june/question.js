// 1
// const source = { a: 1 };
// const target = { b: 2 };
// Object.assign(target, source);
// console.log(target);

// const source = { a: 1 };
// const target = { b: 2 };
// Object.assign(source,target);
// console.log(target);
// console.log(source);

// 2
// const obj1 = { a: 12, b: 23 };
// const obj2 = obj1;
// const obj3 = { ...obj1 };
// // console.log(obj3);
// obj1.c = 23;
// console.log(obj1.c, obj2.c, obj3.c);//here objc is value from obj3 refrence than in c is not 

// 3
// const obj1 = { a: 12, b: 23 };
// const obj2 = { a: 44, b: 45 };
// const obj3 = Object.assign(obj1, obj2);
// obj2.a = 22;
// console.log(obj1, obj2, obj3);

// 4
// const obj1 = { a: 77, b: 67 };
// const obj2 = { a: 90, b: 34 };

// const obj3 = Object.assign(obj1, obj2);
// obj1.a = 22;
// console.log(obj3);

// 5
// const obj1 = { a: 77, b: 67 };
// const obj2 = { a: 90, b: 34 };
// const obj3 = Object.assign({}, obj1, obj2);
// obj1.a = 22;
// console.log(obj3);


// 6
// const source = { a: { b: 1 } };
// const target = {};
// Object.assign(target, source);
// console.log(target);//ans={a:{b:1}}


// 7
// const source = { a: { b: 1 } };
// const target = {};
// Object.assign(target, JSON.parse(JSON.stringify(source)));
// source.a.b = 2;
// console.log(target);//ans={a:{b:1}}

// 8
// const source = { a: 1 };
// const target = Object.assign({}, source);
// delete target.a;
// console.log(source);

// 9
// const target = { a: 1 };
// const source = { b: 2 };
// console.log(target);
// console.log(source);
// const result = Object.assign(target, source);

// console.log(result === source);

// 10
// const target = { a: 1 };
// const source = { b: 2 };
// const result = Object.assign(target, source);
// console.log(result === { a: 1, b: 2 });



// 11

// const target = { a: 1 };
// const source = { b: 2 };
// Object.assign(target, source);
// target.b = 234;
// console.log(source);

// 12
// const target = {};
// const source = { a: 1 };
// const result = Object.assign(target, source);
// source.a = 2;
// console.log(result);

// 13
// const target = {};
// const source = { a: { b: 1 } };
// const result = Object.assign(target, source);
// result.a.b = 2;
// console.log(source);

14
// const target = { a: { b: 1 } };
// const source = { a: [2, 3, 4] };
// const result = Object.assign(target, source);
// console.log(result);


// 15
// const target = { a: { b: 1 } };
// const source = { a: [2, 3, 4] };
// const result = Object.assign(target, source);
// target.a[2] = 90;
// console.log(result);
// console.log(source);
// console.log(target);

16
// const target = { a: { b: { c: 1 } } };
// const source = { a: { b: { d: 2 } } };
// const result = Object.assign(target, source);
// result.a.b.d = 3;
// console.log(target);

// 17
//  var student = {
//     name : "David Rayy",
//     sclass : "VI",
//     rollno : 12 
//     };

//     var property=Object.keys(student);
//     for(var i=0; i<property.length; i++){
//         console.log(property[i]);
//     }
    
// 18
// var student = {
//     name : "David Rayy",
//     sclass : "VI",
//     rollno : 12 
//     };

//     console.log("object after deleting the property:");
//     console.log(student);

//     delete student.rollno;
//     console.log("object before deleting the property:");
//     console.log(student);

// 19

// function operationObj(obj) {
//     obj = {...obj, c: 12}
//   }
//   let a = {  x: 34,  y: 56 }
//   operationObj(a);
//   console.log(a);
  

//   20
//   function operationObj(obj) {
//     obj.z = {...obj, c: 12}
//   }
//   let a = {
//     x: 34,
//     y: 56
//   }
//   operationObj(a);
//   console.log(a);


// //   practic
// const target={};
// const source={a:10, b:1};
// console.log(target);
// const result=Object.assign(target,source);
// source.a=2;
// target.a=222;
// console.log(result);
// console.log(target);
// console.log(source);
  














