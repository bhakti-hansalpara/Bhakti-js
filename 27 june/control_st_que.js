// 1

// function getGreetingMessage() {
//     const currentTime = new Date();
//     const currentHour = currentTime.getHours();
  
//     let greeting;
  
//     if (currentHour >= 5 && currentHour < 12) {
//       greeting = "Good morning!";
//     } else if (currentHour >= 12 && currentHour < 18) {
//       greeting = "Good afternoon!";
//     } else {
//       greeting = "Good evening!";
//     }
  
//     return greeting;
//   }
  
//   const greetingMessage = getGreetingMessage();
//   console.log(greetingMessage);
  

//   2
//   function getDayName(dayDigit) {
//     let dayName;
  
//     switch (dayDigit) {
//       case 1:
//         dayName = "Monday";
//         break;
//       case 2:
//         dayName = "Tuesday";
//         break;
//       case 3:
//         dayName = "Wednesday";
//         break;
//       case 4:
//         dayName = "Thursday";
//         break;
//       case 5:
//         dayName = "Friday";
//         break;
//       case 6:
//         dayName = "Saturday";
//         break;
//       case 7:
//         dayName = "Sunday";
//         break;
//       default:
//         dayName = "Invalid day digit. Please provide a value between 1 and 7.";
//     }
  
//     return dayName;
//   }
  

//   const dayDigit = 4;
//   const dayName = getDayName(dayDigit);
//   console.log(dayName);
  
// 3
// let n = 5; 
// let string = "";

// for(let i = 0; i < n; i++) { 
//   for(let j = 0; j < n; j++) { 
//     string += "*"+" ";
//   }
//   string += "\n";
// }
// console.log(string);

4

// let n = 5;
// let string = "";
// for (let i = 0; i < n; i++) {
//   for (let j = 0; j< n - i; j++) {
//     string += "*"+" ";
//   }
//   string += "\n";
// }
// console.log(string);

5
// function getNumberOfDays(monthNumber) {
//     const monthDays = [
//       31, // January
//       28, // February (assuming it's not a leap year)
//       31, // March
//       30, // April
//       31, // May
//       30, // June
//       31, // July
//       31, // August
//       30, // September
//       31, // October
//       30, // November
//       31  // December
//     ];
  
//     if (monthNumber >= 1 && monthNumber <= 12) {
//       return monthDays[monthNumber - 1];
//     } else {
//       return "Invalid month number. Please provide a value between 1 and 12.";
//     }
//   }
  
//   const monthNumber = 5; // January
//   const numberOfDays = getNumberOfDays(monthNumber);
//   console.log(numberOfDays);
  

// //   ---for leap year-----//
function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
  }
  
  function getNumberOfDays(monthNumber, year) {
    const monthDays = [
      31, // January
      28, // February
      31, // March
      30, // April
      31, // May
      30, // June
      31, // July
      31, // August
      30, // September
      31, // October
      30, // November
      31  // December
    ];
  
    if (monthNumber === 2 && isLeapYear(year)) {
      return 29; // February in a leap year
    } else if (monthNumber >= 1 && monthNumber <= 12) {
      return monthDays[monthNumber - 1];
    } else {
      return "Invalid month number. Please provide a value between 1 and 12.";
    }
  }

  const monthNumber = 2; // February
  const year = 2019; // Leap year
  const numberOfDays = getNumberOfDays(monthNumber, year);
  console.log(numberOfDays);


  7
  for (let i = 1; i <= 10; i++) {
    console.log(i);
  }

//   ------using if------//
let i = 1;

function printNumber() {
  console.log(i);
  i++;

  if (i <= 10) {
    printNumber();
  }
}

printNumber();


8
function printOddNumbers(start, end) {
    for (let i = start; i <= end; i++) {
      if (i % 2 !== 0) {
        console.log(i);
      }
    }
  }
  
  printOddNumbers(1, 10);
  
9
function printOddNumbers(start, end) {
    for (let i = start; i <= end; i++) {
      if (i % 2 == 0) {
        console.log(i);
      }
    }
  }
  
  printOddNumbers(1, 10);

  10
  function calculate(operation, num1, num2) {
    switch (operation) {
      case '+':
        return num1 + num2;
      case '-':
        return num1 - num2;
      case '*':
        return num1 * num2;
      case '/':
        return num1 / num2;
      case '%':
        return num1 % num2;
      default:
        return 'Invalid operation';
    }
  }
  
  console.log(calculate('+', 5, 6)); // 11
  console.log(calculate('/', 15, 3)); // 5
  console.log(calculate('%', 10, 3)); // 1
  console.log(calculate('@', 2, 5)); // Invalid operation
  

 11
 function getGrade(marks) {
    if (marks >= 90) {
      return 'A+';
    } else if (marks >= 80) {
      return 'A';
    } else if (marks >= 70) {
      return 'B';
    } else if (marks >= 60) {
      return 'C';
    } else if (marks >= 50) {
      return 'D';
    } else {
      return 'F';
    }
  }
  
  console.log(getGrade(85)); // A
  console.log(getGrade(72)); // B
  console.log(getGrade(60)); // C
  console.log(getGrade(45)); // F
   

 


  13
//   -------without using revance------//
function reverseString(str) {
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
      reversed += str[i];
    }
    return reversed;
  }
  console.log(reverseString('Hello')); // "olleH"
  console.log(reverseString('OpenAI')); // "IAneuqO"
  console.log(reverseString('12345')); 

//   --//--
  function reverseString(str) {
    return str.split('').reverse().join('');//join is need otherwise it op=['o','l','l','h']
  }
  
  console.log(reverseString('Hello')); // "olleH"
  console.log(reverseString('OpenAI')); // "IAneuqO"
  console.log(reverseString('12345')); // "54321"
  
  
13
function printObject(obj) {
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        console.log(`${key}: ${obj[key]}`);
      }
    }
  }
  
  const person = {
    name: 'Bhakti',
    lastname:'Patel',
    age:19,
    city:'Rajkot'
  };
  
  printObject(person);

 


  