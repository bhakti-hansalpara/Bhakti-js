// -ceil-//

// console.log(Math.ceil(Infinity)); //=>infininty
// console.log(Math.ceil(-7.004)); //=>-7
// console.log(Math.ceil(-4));//=>-4
// console.log(Math.ceil(-0.95));//=>-0
// console.log(Math.ceil(-0));//=>-0
// console.log(Math.ceil(0));//=>0
// console.log(Math.ceil(0.95));//=>1
// console.log(Math.ceil(4));//=>4
// console.log(Math.ceil(7.004));//=>8
// console.log(Math.ceil(null));  //=>0
// console.log(Math.ceil());//=>NaN
// console.log(Math.ceil({}));//=>NaN
// console.log(Math.ceil({empty}));//=>error
// console.log(Math.ceil(empty));//=>error

//---floor---//
console.log(Math.floor(2.8));//=>2
console.log(Math.floor(-2.4));//=>-3
//same as ceil--

// ---round--//
console.log(Math.round(5.95), Math.round(5.5), Math.round(5.05));//=>6,6,5
console.log(Math.round(-5.05), Math.round(-5.5), Math.round(-5.95))//=>-5,-5,-6
console.log(Math.round(-Infinity));//=>infinty
console.log(Math.round(-20.51));//=>-21
console.log(Math.round(-20.5));//=>-20
console.log(Math.round(-0.1));//=>-0
console.log(Math.round(0));//=>0
console.log(Math.round(20.49));//=>20
console.log(Math.round(20.5));//=>21
console.log(Math.round(42));//=>42
console.log(Math.round(Infinity));

//---trun---//
console.log(Math.trunc(13.37));
// Expected output: 13

console.log(Math.trunc(42.84));
// Expected output: 42

console.log(Math.trunc(0.123));
// Expected output: 0

console.log(Math.trunc(-0.123));
// Expected output: -0

// ---max---//
console.log(Math.max(1, 30, 22));//=>30
console.log(Math.max(-1, -3, -2));//=>-1

const array1 = [1, 3, 2,33,67,298,756];
console.log(Math.max(...array1));//=>756


// --min--//
console.log(Math.max(1, 30, 22));//=>1
console.log(Math.max(-1, -3, -2));//=>-3

const array1 = [1, 3, 2,33,67,298,756];
console.log(Math.max(...array1));//=>1

// --sqrt--//
function calcHypotenuse(a, b) {
    return (Math.sqrt((a * a) + (b * b)));
  }
  
  console.log(calcHypotenuse(3, 4));
  // Expected output: 5
  
  console.log(calcHypotenuse(5, 12));
  // Expected output: 13
  
  console.log(calcHypotenuse(0, 0));
  // Expected output: 0
  console.log();
  console.log(Math.sqrt(Infinity));// Infinity

  console.log(Math.sqrt(9)); // 3

  console.log(Math.sqrt(2));// 1.414213562373095

  console.log(Math.sqrt(1));// 1

  console.log(Math.sqrt(0));// 0

  console.log(Math.sqrt(-0));// -0

  console.log(Math.sqrt(-1));// NaN


// ---cbrt---//
console.log(Math.cbrt(-1));
// Expected output: -1

console.log(Math.cbrt(1));
// Expected output: 1

console.log(Math.cbrt(Infinity));
// Expected output: Infinity

console.log(Math.cbrt(64));
// Expected output: 4


console.log(Math.cbrt(-Infinity));// -Infinity
console.log(Math.cbrt(-0)); // -0
console.log(Math.cbrt(-1));// -1
console.log(Math.cbrt(0));// 0
console.log(Math.cbrt(1)); // 1
console.log(Math.cbrt(2));// 1.2599210498948732
console.log();

// --pow--//
console.log(Math.pow(7, 3));
// Expected output: 343

console.log(Math.pow(4, 0.5));
// Expected output: 2

console.log(Math.pow(7, -2));
// Expected output: 0.02040816326530612
//                  (1/49)

console.log(Math.pow(-7, 0.5));
// Expected output: NaN

console.log(Math.pow(7, 2)); // 49
console.log(Math.pow(8, 1 / 3));//2
console.log(Math.pow(7, -2));//(1/49)=> 0.02040816326530612 
console.log(Math.pow(-7, 0.5));//NaN
console.log(Math.pow(-0, 1.5));//0
console.log(Math.pow(0.9, -Infinity));//=>imfintiy

// ---random---//
//it gives random value
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  
  console.log(getRandomInt(3));

  function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }

//   --abs--//
function difference(a, b) {
    return Math.abs(a - b);
  }
  
  console.log(difference(3, 5));  // Expected output: 2
  
  console.log(difference(5, 3));  // Expected output: 2

  console.log(difference(1.23456, 7.89012)); // Expected output: 6.6555599999999995

  console.log( Math.abs("-1"));//1
  console.log(Math.abs(-2)); // 2
  console.log( Math.abs(null)) // 0
  console.log( Math.abs(""))// 0
  console.log(Math.abs([2]))//2
  console.log( Math.abs({}))//nan