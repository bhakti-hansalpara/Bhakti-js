1.// write a variable with invalid name and check the errors.//

var 8bh="bhakti";
console.log(8bh);
// it show syntax-error bcz varible never start from Number.//

2.// write a variable with a valid name.
var num=67;
console.log(num);

3. //declare a variable with var and perform basic operations like 
//redeclaration and reassignment in same and different scope and check output and make all possible cases 

var num1=89;
var num1=78;
console.log(num1);  //redeclaration and reassignment in same scope

var num1=9;
{
    var num1=8;
    console.log(num1);   //redeclaration and reassignment in different scope

}
 
4.//. declare a variable with let and perform basic operations like 
//redeclaration and reassignment in same and different scope and check output and make all possible cases
 
let num1=9;
{
     num1=8;
    console.log(num1);  //redeclaration and reassignment in different scope
}

let num1=89;
 num1=78;
console.log(num1);  //redeclaration and reassignment in same scope

5.//declare a variable with const and perform basic operations like 
//redeclaration and reassignment in same and different scope and check output and make all possible cases 

const num=8;
num=5;
console.log(num);//it get error bcz const does not redeclaration and reassignment in same scope

const num=8;
{
   const  num=5;
    console.log(num);  //redeclaration and reassignment in same scope

}

6. //what is "undefined"? // write a examples 
  var num1;
  console.log(num); //when you declare a variable but not give any value of the varible than it give undefined error.

7.//. write a variable name which can store your name

  var first_name;
  first_name="bhakti";
  console.log(first_name);

8. // write a variable name which can store our planet name

var planetname;
planetname="Earth";
console.log(planetname);

9.//write a variable name which can store boolean value(true/false) and suggest user is logged in or navigation

const value="ture";
console.log(value);

10.//declare a variable which can store the value of PI = 3.14

const value_PI="3.14F";
console.log(value);  //or

const value_PI="3.14";
console.log(value);