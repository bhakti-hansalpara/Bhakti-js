let obj1 = { a: 23, b: 45 };
let arr1 = [{ ...obj1 }];
let arr2 = arr1;
arr2[0].c = 5;
console.log(arr1)


b
let obj1 = { a: 23, b: 45, c: { f: 990 } };
let arr1 = [{ ...obj1 }];
let arr2 = arr1;
arr2[0].c = 5;
obj1.c.f = 30;
console.log(arr1); 

c
let obj1 = { a: 23, b: 45, c: { f: 990 } };
let arr1 = [{ ...obj1 }];
let arr2 = arr1;
obj1.c.f = 30;
console.log(arr1); 
console.log(arr2);

d
let obj1 = { a: 23, b: 45 };
let arr1 = Object.assign([], [{ ...obj1 }]);
let arr2 = arr1;
arr2[0].c = 5;
console.log(arr1); 

e
let obj1 = { a: 23, b: 45 };
let arr1 = [{ ...obj1 }];
let arr2 = Object.assign([], arr1);
arr2[0].c = 5;
console.log(arr1); 

f
let obj1 = { a: 23, b: 45 };
let arr1 = [{ ...obj1 }];
let arr2 = Object.assign([], [{...arr1[0]}]);
arr2[0].c = 5;

console.log(arr1); 

g
let obj1 = { a: 34, b: 56, c: { h: 77, j: 90 } };
let obj2 = Object.assign({}, obj1);
let obj3 = Object.assign({ ...obj2 }, { c: { k: 44 } });
// console.log(obj3);
obj2.c.h = 67;
console.log(obj1, obj2, obj3);

ex=
let obj1={a:{b:{c:20}}};
let arr1=[{...obj1}];
let arr2=arr1;
arr1.b=10;
console.log(arr2);

2
let obj1={a:23,  c:{h:22}};
let arr1=Object.assign({},obj1);
arr1.a=33;
console.log(obj1);

3
let obj1 = { a: 23, b: 45, c: { f: 990 } };
let obj2=[{a:[3],b:{c:33}}]
let arr1 = [{ ...obj1 },obj2];
console.log(arr1);
let arr2 = arr1;
arr2[0].c = 5;
obj1.c.f = 30;
console.log(arr1); 

for (let i = 5; i >= 1; i--) {
      var sp = "";
      for (let j = 5; j >= 1; j--) {
        sp = sp + "* ";
      }
      console.log(sp);
    }

    let n = 5;
    let string = "";
    for (let i = 1; i <= n; i++) {
      for (let j = 0; j < i; j++) {
        string += "*"+" ";
      }
      string += "\n";
    }
    console.log(string);

    let text = "";
    let i = 0;
    while (i < 5) {
      i++;
      if (i === 3) continue;
      text += i + "<br>";
      }

    //   -------contine----//

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < numbers.length; i++) {
  const number = numbers[i];

  if (number % 2 === 0) {

    break;
  }
  if (number % 3 === 0) {
    console.log(number + " is divisible by 3");
  } else {
    console.log(number);
  }
}


// -----breack-----//
for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
      console.log(i + " is even");
    } else {
      console.log(i + " is odd");
    }
  
    if (i === 5) {
    //   break; // Terminate the loop when i is 5
    continue;
    }
  }
  

  let arr1=[{a:15, b:20},Object.assign({},{a:15})]
  let arr2=[{...arr1[0]}];