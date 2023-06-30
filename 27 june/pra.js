
16
function printMessageBasedOnNumber(str) {
    const containsNumber = str.split('').filter(char => /\d/.test(char)).length > 0;
    if (containsNumber) {
      console.log("String contains a number");
    } else {
      console.log("String does not contain a number");
    }
  }
  
  printMessageBasedOnNumber("1212");    // String contains a number
  printMessageBasedOnNumber("sadfsd");  // String does not contain a number
  printMessageBasedOnNumber("sad2q");   // String contains a number
  

17
function getPositionOfDigit(str) {
    for (let i = 0; i < str.length; i++) {
      if (/\d/.test(str[i])) {
        return i;
      }
    }
    return -1; // bcz when it is not digit
  }
  
  // Example usage:
  console.log(getPositionOfDigit("abc123"));  // 3
  console.log(getPositionOfDigit("Hello"));   // -1
  console.log(getPositionOfDigit("1a2b3c"));  // 0
  
  
18
function getPositionOfFirstCapitalLetter(str) {
    for (let i = 0; i < str.length; i++) {
      if (/[A-Z]/.test(str[i])) {
        return i;
      }
    }
    return -1; // Return -1 if no capital letter is found
  }
  
  // Example usage:
  console.log(getPositionOfFirstCapitalLetter("helloWorld"));  // 5
  console.log(getPositionOfFirstCapitalLetter("openAI"));     // 0
  console.log(getPositionOfFirstCapitalLetter("lowercase"));  // -1

  
19
function printOdd(start, end) {
    for (let i = start; i <= end; i++) {
      if (i % 2 !== 0) {
        console.log(i);
      }
    }
  }
  
  // Example usage:
  printOdd(1, 10);

  20
  function printOdd(start, end) {
    let count = 0;
    for (let i = start; i < end; i++) {
      if (i % 2 !== 0) {
        console.log(i);
        count++;
        if (count === 10) {
          break;
        }
      }
    }
  }
  
  // Example usage:
  printOdd(1, 100);

  15 
  function isStringContainsNum(str) {
    return /\d/.test(str);
  }
  
  // Example usage:
  console.log(isStringContainsNum("assad")); // false
  console.log(isStringContainsNum("agfh1")); // true
  console.log(isStringContainsNum("ksjf"));
  console.log(isStringContainsNum("ag1sdf")); // true
  console.log(isStringContainsNum("111")); // true

  function convertToINR(currencyCode, amount) {
    const exchangeRates = {
      USD: 75.23, // Example exchange rate for USD to INR
      EUR: 87.12, // Example exchange rate for EUR to INR
      // Add more exchange rates for other currencies as needed
    };
  
    // Check if the currency code exists in the exchange rates object
    if (currencyCode in exchangeRates) {
      const exchangeRate = exchangeRates[currencyCode];
      const convertedAmount = amount * exchangeRate;
  
      // Return the converted amount rounded to two decimal places
      return parseFloat(convertedAmount.toFixed(2));
    } else {
    console.log("invaild example");
      return null;
    }
  }
  console.log(convertToINR('USD', 100)); // The converted amount in INR for 100 USD
  console.log(convertToINR('EUR', 200));


  for(i=1; i<=2; i++){
    console.log(i);
  }