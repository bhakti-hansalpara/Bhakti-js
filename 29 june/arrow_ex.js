1
const double = (num) => {
    return num * 2;
  };
  
  console.log(double(5));

  
2
const multiply = (a, b) => a * b;

console.log(multiply(2, 3));


3
const divide = (a, b) => {
    if (b === 0) {
      console.log("Cannot divide by zero.");
      return;
    }
    return a / b;
  };
  
  console.log(divide(10, 2));

  
4
// Before Arrow:
let name = function() {
    console.log("Bhakti");
  };
  
  name();

5

const d = (who) => (
    "hello "
      + who
      + "!"
  );
  d({});
  d([]);


6
let greet = name => {
    console.log("Hello, " + name + "!");
  };
  
greet("John");


7
setTimeout(() => {
    console.log("Arrow function executed!");
  } );

8
//array methode
const numbers = [1, 2, 3, 4, 5];

const doubledNumbers = numbers.map((num) => num * 2);

console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]


9
//object method
const person = {
    name: "John",
    greet: () => {
      console.log("Hello, " + this.name);
    },
  };
  
  person.greet(); // Output: Hello, undefined
  
10
//class method
class Calculator {
    add = (a, b) => {
      return a + b;
    };
  }
  
  const calc = new Calculator();
  console.log(calc.add(2, 3)); // Output: 5

  
  
  