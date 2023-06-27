let a = "java";
let b = a.concat('script');
console.log(b);   // javascript

console.log("welcome");
console.log('Bhakti');
console.log(`days`);

//string store in virable using primitive// save is like string
var str='hello';
console.log(str);
console.log(typeof(str));
console.log(str,(typeof str));

let myvar;
myvar=String('bhakti');
console.log(myvar,(typeof myvar));

let boolenVar='ture';
console.log(boolenVar,(typeof boolenVar));
let boolenVar=String(ture);
console.log(boolenVar,(typeof boolenVar));

let date=new Date();
console.log(date,(typeof Date));
let date=String(new Date());
console.log(date,(typeof Date));

let arr=String([1,2,3,4]);
console.log(arr,(typeof arr));


//string store in variable using constructor // save is like object
var str=new String('hello');
console.log(str);
console.log(typeof(str));
console.log(typeof str);
console.log(str, (typeof str));

//in one sentence not allow doubtime doubcodes or singlecods//
console.log("hello everione i m 'bhakti'");
console.log('hello I am "bhakti"from rajkot');
console.log(`helo 'good morning'`);
console.log("godd one that `is`");
console.log(`hello
      gyes what about you
      what are you doing`);
      console.log('helo');

      //lenth -proprty also count space
    var str="bhakti";
      console.log(str.length);
      var str='Dhruv and Dhara';
      console.log(str.length);
      console.log(str[4]);
      console.log(str[20]);
      console.log(str[-1]);
      console.log(str[str.length-1]);
      let arr=String([1,2,3,4,5]);   //string count char //here ans=9
      console.log(arr.length,(typeof arr));
      let arr=[1,2,3,4,5];                     //arry count element//here ans=5
      console.log(arr.length,(typeof arr));
     
// lengh 2nd methode to call is tostring
      let i=8;
      console.log(i.toString());

    //   counvrting value of string
    var number=7;
    number=number.toString();
    console.log(typeof number);//in this methde a problem in null and undifend
    var num;
    var boolen=true;
    var type=null;
    var number=9;
    console.log(String(num),typeof num);
    console.log(String(boolen));
    console.log(String(type,typeof null));
    console.log(String(number));


//compairing string

var str1="bhakti";
var str2="bhakti";
console.log(str1.compareTo(str2));

var str1="bhakti";
var str2="bhakti";
console.log(str1.localeCompare(str2));//it gives 0 bcz both are same

var str1="bhkti";
var str2='KRISTI';
console.log(str1.localeCompare(str2));//it gives -1 bcz value of k unicode is less than k. 


var str1="bhkti";
var str2='amisha';
console.log(str1.localeCompare(str2));//it gives 1 bcz value of a unicode is less than b

//-----charAt-----method------//
//it returns at a specified index(position) in string.
var str1="hello everyone";
console.log(str1.charAt(4));
console.log(str1.charAt());

//------AT-----methd ------//
//it use in arry to specifeid index(position) in array.
var arr=[1,22,4,35,5];
console.log(arr.at(2));

//-----charcodeAT----methd----//
//it return of specified index numb er unicode.
var name="bhakti";
console.log(name.charCodeAt(9));
console.log(name.charCodeAt(1));

//---stratwith---methd----//
//it show that we define a word in prifix is that if yes than return ture ot than return false
var name="bhakti patel";
console.log("reuslut: "+name.startsWith("bha"));
var name="bhakti";
console.log("reuslut: "+name.startsWith("bha"));

//
//---stratwith---methd----//
//it show that we define a word in suffix is that if yes than return ture ot than return false
//it gives boolen value only

var name="bhakti";
console.log("reuslut: "+name.endsWith("ti"));

//includes ----it check that this element or this char or that number is in this string or not
//it gives also only boolean value ture and false
var a="bhakti!";
var b=a.includes(5);
console.log(b);

var a="hello gyus! I am Bhakti."
console.log(a.includes("I",13));
console.log(a.includes("gyus"));
console.log(a.length);
console.log(a.includes("h",1));

//--indexOf---//
//it check that the char is which index no id belong which you search//
//when it gives -1 than that means this is not found in this statement.
var str="java-script is complex language";
console.log(str.indexOf("t"));
console.log(str.indexOf("-",10));
console.log(str.indexOf("e",22));
console.log(str.indexOf("is"));

//lastIndexOf--//
//it cheack to last find index no .
var str="good Mornig-one Every-one";
console.log(str.lastIndexOf("one"));
console.log(str.indexOf("one"));

//--match---//
//in when the value not found than it gives null.
var a="9887kjb ssdkn389uhbjb";
console.log(a.match(/87/));
console.log(a.match("ssd"));
console.log(a.match("9887kjb"));
console.log(a.match("bhakti"));
console.log(a.matchAll("ssd"));

//---matchAll----//
var a="I am Bhakti Patel";
console.log(a.matchAll("Bhakti"));

//---padstart---//
//syntax that padstart after index no
//total index-number is space than our elelment is inclued.
"abc".padStart(10);
var a="bhakti";
console.log(a.padStart(10));
console.log(a.padStart(20,"123456789"));

//---padEnd----//
//in this space is not allowed //
var a="good evening";
console.log(a.padEnd(10));
console.log(a.padEnd(10,"bhakti"));
console.log("abc".padEnd(10,'bha'));
console.log("good".padEnd(10,'bhs'));

//---replace---//
//it is use to replace elememt or word.
//sntax is that .respace("replace word",("write the word which you replace"))
var a="heloo every-one and sir,mam";
console.log(a.replace("and","&"));//here and is replace by &
console.log(a.replace(" ","&"));  //WHEN YOU NOT DEFINED WHICH ELELMT YOU RESPCE THAN IT CHOOCE SPACE.
console.log(A.replace(/d/g,"22"));

//----search----//

//it not count space
let a = 'i am bhakti';
let b = a.search(/am/g);
console.log(b);        






//----split-----//
//it romeve the elemet which you split
var a="b hakti how are you";
// console.log(a.split(" "));
// console.log(a.split("k"));
console.log(a.split("kti"));

let a = "cow is a animal"
let b = a.split('s');
console.log(b); 


//----slice-----//
//frist is that to start and 2nd is when end 
var a="bhakti what are you doing";
console.log(a.slice(1,4));//ans=hak
console.log(a.slice(-1));//g
console.log(a.substring(1,4));//ans=hak
console.log(a.slice(0));
console.log(a.slice(-15));

//----subSrting-------//
//in subString 1st strat from and 2nd is stop but 2nd is not print.
var str="bhakti how are you"
console.log(str.substring(2,6));

//----toUpperCase-----//
var a="bhakti when you come?"
console.log(a.toUpperCase());

//----toLowerCase-----//
var a="where are you going?"
console.log(a.toLowerCase(0,1));

//----trim-----//
var a="    bhakti    ";
console.log(a.trim());

//---trim-start-----//
var a="     whrer are you     ";
console.log(a.trimStart());

//----trim-end------//
var a="    whre are you  ";
console.log(a.trimEnd());
console.log("contect :"+a.trimEnd()+" ");
console.log("contect :"+a.trimLeft()+" ");
console.log("contect :"+a.trimRight()+" ");
var alphabats="\t\n  A  B\n  C  D...\n";

console.log(alphabats.trimStart());
console.log(alphabats);


var a="Bhakti";
console.log(a.length);

12

const str = "HelloWorld";
console.log(str.toLowerCase());


13
helloworld
const sentence = "I love JavaScript!";
console.log(sentence.indexOf("JavaScript"));

14

const name = "John";
const greeting = `Hello, ${name}!`;
console.log(greeting);

15
const text = "Hello, World!";
console.log(text.substring(7));

16
const message = "Hello, World!";
console.log(message.replace("World", "Universe"));

17
const words = "apple, banana, orange";
const fruits = words.split(", ");
console.log(fruits);

18

const text = "   Hello, World!   ";
console.log(text.trim());

19
const sentence = "The quick brown fox jumps over the lazy dog.";
console.log(sentence.includes("dog"));

20
const str = "Hello, World!";
console.log(str.endsWith("!"));


21
const sentence = "JavaScript is fun!";
console.log(sentence.charAt(4));


22
const str1 = "Hello";
const str2 = "World";


23

const sentence = "JavaScript is awesome!";
console.log(sentence.slice(0, 10));

24
const text = "Hello, World!";
console.log(text.repeat(3));

25
const sentence = "The quick brown fox";
console.log(sentence.split(" "));

26
const str = "Hello, World!";
console.log(str.indexOf("o"));

27
const sentence = "JavaScript is fun!";
console.log(sentence.substring(4, 10));

28
const text = "Hello, World!";
console.log(text.charAt(7));

29
const sentence = "I love JavaScript!";
console.log(sentence.split("o"));

30
const str = "Hello, World!";
console.log(str.includes("World"));

31
const sentence = "JavaScript is cool!";
console.log(sentence.lastIndexOf("o"));

32
const text = "Hello, World!";
console.log(text.startsWith("Hello"));

33
const str = "Hello, World!";
console.log(str.toUpperCase());

34
const sentence = "JavaScript is awesome!";
console.log(sentence.toLowerCase());

35
 const str = "Hello, World!";
console.log(str.charAt(13));

36
const sentence = "JavaScript is fun!";
console.log(sentence.substr(4, 10));

37
 const text = "Hello, World!";
console.log(text.includes("WORLD"));

38
 const sentence = "JavaScript is amazing!";
console.log(sentence.replace("amazing", "awesome"));

39
 const str = "Hello, World!";
console.log(str.charCodeAt(4));

40
 const sentence = "JavaScript is powerful!";
console.log(sentence.split(" ").length);

41
 const text = "Hello, World!";
console.log(text.search("W"));

42
 const sentence = "JavaScript is dynamic!";
 console.log(sentence.slice(-7));

 43
const str = "Hello, World!";
console.log(str.concat(" Goodbye!"));

44
 const sentence = "JavaScript is flexible!";
console.log(sentence.charAt(sentence.length - 1));//lat element

45
const sentence = "JavaScript is interesting!";
console.log(sentence.substring(10));// is interesting!

46
 const str = "Hello, World!";
console.log(str.search("World"));

47
 const sentence = "JavaScript is versatile!";
console.log(sentence.split(" ").reverse().join(" "));//versatile! is JavaScript

48
 const sentence = "JavaScript is powerful!";
console.log(sentence.substring(4, 10));

49
 const str = "Hello, World!";
console.log(str.charCodeAt(0));

50
 const sentence = "JavaScript is amazing!";
console.log(sentence.slice(4, 10));
51
 const text = "Hello, World!";
console.log(text.indexOf("o", 5));

52
 const sentence = "JavaScript is fun!";
console.log(sentence.startsWith("Java"));

53
 const str = "Hello, World!";
console.log(str.endsWith("!"));

54
 const sentence = "JavaScript is amazing!";
console.log(sentence.lastIndexOf("a",12));//3  -- if 12 romeve than op=16--it shaw 12 beforw where is a

55
 const text = "Hello, World!";
console.log(text.substring(7, 2));//llo

56
 const sentence = "JavaScript is cool!";
console.log(sentence.concat(" I love it!"));

57
 const str = "Hello, World!";
console.log(str.toUpperCase().charAt(7));

58
 const str = "Hello, World!";
console.log(str.toUpperCase().charAt(7));

59
const sentence = "JavaScript is amazing!";
console.log(sentence.replace("amazing", "awesome").toUpperCase());

60
function is_string(input){
    if(typeof input==='string')
            return true;
   else return false;
}
console.log(is_string('w3resource'));      // true
console.log(is_string([1, 2, 4, 0]));       // false

61
function is_Blank(input){
    if(input=='')
          return true;
   else return false;
 }
 console.log(is_Blank(''));          // true
 console.log(is_Blank('abc'));    // false
 console.log(is_Blank(""));        // true
 console.log(is_Blank(“ “)):       // false

//try
let abc="hello world";
abc.replace("world"," ");
console.log(abc());
 62
 function string_to_array(input){
    return input.split(‘ ‘);
}
console.log(string_to_array("Robin Singh"));   // ["Robin", "Singh"]
console.log(string_to_array(“Robin Singh Chaddha”));
// [ “Robin “Singh”, “Chaddha”]


63
function truncate_string(input,num){
    return input.slice(0,num);
}
console.log(truncate_string("Robin Singh",4)); // "Robi"//starting from 0 and stop when 4


64
function protect_email(email){
    return email.replace(email.substring(5,email.indexOf('@')),'...');
}
console.log(protect_email("robin_sing@example.com")); 
// robin…@example.com
console.log(protect_email("pratham.pandya@example.com")); 
// prath…@example.com


66
function capitalize(input){
    return input.charAt(0).toUpperCase()+input.slice(1);
}
console.log(capitalize('js string exercises'));  // Js string exercises
console.log(capitalize('hello it is me'));  // Hello it is me


67
function capitalize_words(input){
    const words = input.split(' ');
    for(var i=0; i< words.length;i++){
    words[i] = words[i].charAt(0).toUpperCase()+words[i].slice(1);
  }
  return words.join(" ");
}
console.log(capitalize_words('js string exercises'));   // Js String Exercises


68



















