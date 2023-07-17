// function calculate() {
//     if (true) {
//       var x = 10;
//       let y = 5;
//     }
  
//     var result = x + y;
//   }
  
//   calculate();  //=>y is not defined that give error

//2
function outer() {
    var x = 10;
  
    function inner() {
      console.log(x);
    }
  
    inner();
  }
  
  outer();

  //3
  var x = 5;

function foo() {
  console.log(x);
  var x = 10;
}

foo();


//4
var x = 5;

function foo() {
  console.log(x);
  var x = 10;
}

foo();
//5
var x = 15;

function bar() {
  if (true) {
    var x = 20;
  }
  console.log(x);
}

bar();
var result = x;


//6
var a = 10;

function outer() {
  var b = 20;

  function inner() {
    var c = 30;
    console.log(a + b + c);
  }

  inner();
}

outer();


//7
var a = 10;

function outer() {
  var b = 20;

  function inner() {
    var c = 30;
    console.log(a + b + c);
  }

  inner();
}

outer();


//8
function counter() {
    var count = 0;
  
    function increment() {
      count++;
    }
  
    increment();
    return count;
  }
  
  var result = counter();
  var count = 100;

  
  //9
  function counter() {
    var count = 0;
  
    function increment() {
      count++;
    }
  
    increment();
    return count;
  }
  
  var result = counter();
  var count = 100;

  
  //10
  var x = 10;

function foo() {
  if (true) {
    var x = 20;
  }
  console.log(x);
}

foo();


//11
function sum() {
    var a = 10;
    return function(b) {
      return a + b;
    };
  }
  
  var addFive = sum();
  var result = addFive(5);

  
  //12
  function sum() {
    var a = 10;
    return function(b) {
      return a + b;
    };
  }
  
  var addFive = sum();
  var result = addFive(5);

  
  //13
  var x = 100;

function outer() {
  console.log(x);
}

function inner() {
  var x = 50;
  outer();
}

inner();


//14
function showMessage() {
    message = 'Hello, World!';
  }
  
  showMessage();

  
  //15
  function test() {
    let x = 5;
  
    if (true) {
      let x = 10;
    }
  
    return x;
  }
  
  var result = test();

  
  //16
  var x = 15;

function foo() {
  var x = 20;
  console.log(x);
}

foo();
console.log(x);

//17
function outer() {
    var x = 10;
  
    function inner() {
      var y = 5;
      console.log(x + y);
    }
  
    inner();
    console.log(x);
  }
  
  outer();
  var result = x;

  
  //18
  var x = 10;

function foo() {
  var x = 20;
  if (true) {
    var x = 30;
    console.log(x);
  }
  console.log(x);
}

foo();
console.log(x);


//19
var x = 5;

function foo() {
  var y = 10;

  function bar() {
    console.log(x + y);
  }

  bar();
}

foo();


//20
function outer() {
    if (true) {
      let x = 10;
    }
    console.log(x);
  }
  
  outer();
  var result = x;

  
  //21
  