var num1;
num1=10;
num1=5;
console.log(num1);
// output is 5 beacuse last one can run not first than op=5//

num1=24;
console.log(num1);
var num1=28;
console.log(num1);
// all are run bcz stnatx is right//

var num1=9;
{
    console.log(num1);
}
// it can run //

num1=8;
console.log(num2);
{
    num2=76;
}
// ReferenceErrorbcz num2 is no defined after the declation//

num1=8;
let num1=10;


// we can not write let in repeet it is declare only one time

var name="bhakti";
{
    name1="shivam";
    
}
name2="diya"
console.log(name1);
// it can run//

let num;
{
   let num=87;
    console.log(num);
}
 let num=97;
console.log(num);
// syantaxerror bcz let can not redifine//

console.log(num);
 nam=76;
{
    nam=77;
    console.log(nam);
    console.log(76);
}
// refrence error bcz num is not defined//

console.log(nam);
 let nam=76;
{
    nam=77;
    console.log(nam);
      
    //    name="bhakti";
}
console.log(name);
console.log(76);
// in scoop is right but in 1st line in error than after code can not run//

console.log(num5);
 var num5=87;
{
    console.log(num5);
}
// error bcz is undefind num5//

{
    var   num=09;
  }
  {
      console.log(num);
  }

// when you declare avr in oyher scoop is also run//

{
    num5;
    console.log(num5);
  
    console.log(num4);
    num4=98;
}
// num5 is not defined //

let num;
console.log(num);
// undefinederror bcz num is not have any value//

console.log(num);
// in this not defined error bcz num is not any where declare in the scoop//

let num=9;
{
    let num=7;
    console.log(num);
}
// it can run bcz let not have repatdeclartion but in this case it declare in scoop than it can run//

let num='bhakti';
console.log(num);
// bhakti op is run bcz no matter in double coma or single coma//

let num=9;
let Num=10;
// both are diffrenent bcz it is case sentetive upparcase or lower case can matter in code//

var num='bhakti';
var num=9;
console.log(num);
// var can redeclare and redefined //

var var=7;
console.log(var);
// keyword is not use to define variable //

const num="bhakti";
console.log(num);
// in const you can defined variable is compalsary//

var bh nam=89;
// varbalbe name bettween space is not allowed//

const name="bhakti";
const name="diya";
console.log(name);
// syntax-error bcz const does not re-declare //

a=10;
console.log(a);
var a;
// it can run to before it has benn declared.//

const nam=20;
{
    console.log(nam);
    const nam=15;
    console.log(nam);
}
// error bcz 2nd const before it read console.//

var nam=12;
console.log(nam);
var nam1=15;
console.log(nam1);
nam=nam1;
console.log(nam);

// nam=15 bcz nam=nam1//
