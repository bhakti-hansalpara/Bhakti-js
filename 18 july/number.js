// -----Number-----//
// var a='99';

// var a="22 55" //=>it get NaN bcz space is not allowed between number =>in parse it give 99 it give 1st value 
// //when you write number small n that is wrong N is alwalys print cpital
// var num=Number(a);
// console.log(num+'1'); //991
// console.log(num+1);//100
// // document.write(num);

// var a="88.88";
// var num=Number(a);
// console.log(num); //=>88.88 give 

// var a="055";
// var num=parseInt(a);
// console.log(num); //=>55
// var a=" abc55";
// var num=parseInt(a);
// console.log(num); //=>55 not give NaN


// ----parseInt----//
//it give return without desimal number
// var a="88 55";
// var num=parseInt(a);
// console.log(num); //=>88 not give NaN

// var a=" ";
// var num=parseInt(a);
// console.log(num); //=> NaN

// var a="88ab 55";
// var num=parseInt(a);
// console.log(num); //=> give 88

// var a="88.88";
// var num=parseInt(a);
// console.log(num); //=>88 only no give desimal number

// var a="052";
// var num=parseInt(a);
// console.log(num); //=>52 bcz 0 is not any value number 

// ------diffrence between parseInt and Number-------//
// ====>dount//
// function parseNumber() {
// 	let string = '1100';
// 	let number1 = parseInt(string,2);
// 	let number2 = Number(string);

// 	console.log("Output of parseInt is: " + number1);
// 	console.log("Output of Number is: " + number2);
// }

// parseNumber();

//2
// function parseNumber() {
// 	let string = '3.1415';
// 	let number1 = parseInt(string);
// 	let number2 = Number(string);

// 	console.log("Output of parseInt is: " + number1);
// 	console.log("Output of Number is: " + number2);
// }

// parseNumber();

//3
// function parseNumber() {
// 	let string = '10.6 objects';
// 	let number1 = parseInt(string);
// 	let number2 = Number(string);

// 	console.log("Output of parseInt is: " + number1);
// 	console.log("Output of Number is: " + number2);
// }

// parseNumber();




// ------parseFloat------//
//it same as parseInt only diffrence that it give float value also return value in  disimal number
// var a="88.55";
// var num=parseFloat(a);
// console.log(num); //=>88.55

// var a="10 40";
// var num=parseFloat(a);
// console.log(num);//=>10

// var a="10 year";
// var num=parseFloat(a);
// console.log(num);//=>10

// var a="10.40 year";
// var num=parseFloat(a);
// console.log(num);//=>10.4 //=>0 not consider bcz 0 has not any value


// -------isFinite------//
//it check the number is finite or not i=f it finite than give true otherwise give false
// var a="66";
// var num=isFinite(a);
// console.log(num);//=>true

// var a="66 99";
// var num=isFinite(a);
// console.log(num);//=>false

// var a="66.55";
// var num=isFinite(a);
// console.log(num);//=>true

// var a="abc66";
// var num=isFinite(a);
// console.log(num);//=>false

// var a="66abc";
// var num=isFinite(a);
// console.log(num);//=>false

// var a=" ";
// var num=isFinite(a);
// console.log(num);//=>true

// // var a={ };
// var num=isFinite(a);
// console.log(num);//=>false

// var a=[];
// var num=isFinite(a);
// console.log(num);//=>true


// var a="hrllo";
// var num=isFinite(a);
// console.log(num);//=>false


// var a=Infinity;
// var a='infinity';//=>false
// var num=isFinite(a);
// console.log(num);//=>false

// var a='0';
// var num=isFinite(a);
// console.log(num);//=>true

// var a=NaN;
// var num=isFinite(a);
// console.log(num);//=>false

// var a=undefined;
// var num=isFinite(a);
// console.log(num);//=>false

// var a=55;
// var num=isFinite(a);
// var a="hello"
// console.log(num);//=>true

// var a="2e44";
// var num=isFinite(a);
// console.log(num);//=>true

// const checkFinite = (x) => {
//     if (Number.isFinite(1000 / x)) {
//       return 'Number is NOT Infinity.';
//     }
//     return 'Number is Infinity!';
//   }
// //   console.log(checkFinite(0));==>is Infinity//
//   console.log(checkFinite(1));//==> is not infinity//

// console.log(Number.isFinite(Infinity))
// console.log(Number.isFinite(NaN))
// console.log(Number.isFinite(-Infinity))
// console.log(Number.isFinite(0))
// console.log(Number.isFinite(2e64))
// console.log(Number.isFinite('0'))//=>in this case it gives Flase bcz 
// console.log(Number.isFinite(null))
// ----diffrence between isFinite and Number.isFinite()-----//
//isFinite() returns true if a value is a finite number. Number. isFinite() returns true if a number is a finite number.

// -----------isInteger-------------//
// isInteger is complasery to use Number word before it//

// var a=Infinity;
// var num=Number.isInteger(a);
// console.log(num);//=>false

// var a="56";
// var num=Number.isInteger(a);
// console.log(num);//=>false

// var a=56;
// var num=Number.isInteger(a);
// console.log(num);//=>ture

// var a="ab";
// var num=Number.isInteger(a);
// console.log(num);//=>false

// var a="88";
// var num=Number.isInteger(a);
// console.log(num);//=>false

// var a=[];//=>false
// var a={};//=>false
// var a=[87];//=>false
// var num=Number.isInteger(a);
// console.log(num);//=>false

// var a=30.6;
// var num=Number.isInteger(a);
// console.log(num);//=>false //=>it not true in not finite value

// var a=-88;
// var num=Number.isInteger(a);
// console.log(num);//=>ture

// var a=-0;
// var num=Number.isInteger(a);
// console.log(num);//=>ture

// var a=10-7;
// var num=Number.isInteger(a);
// console.log(num);//=>true

// var a=20.00-6;
// var num=Number.isInteger(a);
// console.log(num);//=>ture

// var a=10.00;
// var num=Number.isInteger(a);
// console.log(num);//=>ture//=>it give true in 0 desimal value -not any desimal value of number

// var a=true;
// a=Number(a);
// var num=Number.isInteger(a);
// console.log(num);//=>ture bcz of before we concnt in number after than cvheck it is intger or not

// -----tofixed----//
// var a=7.8569;
// var num=a.toFixed(a);
// console.log(num);//=>we you give same para than it use that value

// var a=7.57989;
// var num=a.toFixed(3);
// console.log(num);//=>70.580

// var a=7.57989;
// var num=a.toFixed(9);
// console.log(num);//=>7.579890000

// function financial(x) {
//     return Number.parseFloat(x).toFixed(2);
//   }
  
//   console.log(financial(123.456));//=> "123.46"
  
//   console.log(financial(0.004));//=> "0.00"
//   console.log(financial('1.234567788e+5'));//=>123456.78

// ----toPrecision---//
//it give upper value when value id big than0.5 otherwise print lower value//it also convernt roundup value

// var a=5.2344;
// var num=a.toPrecision(2);
// console.log(num);//=>5.2

// var a=5.6844;
// var num=a.toPrecision(2);
// console.log(num);//=>5.7

// var a=5.-2344;
// var num=a.toPrecision(2);
// console.log(num);//=>-2.3e+3


// ---toLocalString----//
