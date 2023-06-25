1
var x=5;
var y=4;
var z=2;
var ans=x+y*z;
console.log(ans);  //ans 13

2
var x=10;
var y=2;
var z=4;
var ans=x-y/z;
console.log(ans); //ans=9.5  here 1st evulated y/z after ans-x beacuse division presedence is higher value

3
var x=3;
var y=2;
var z=4;
var ans=x*(y+z);
console.log(ans);  //ans=18 here breaket is first consider after other oprestion perfom

4
var x=8;
var y=2;
var z=2;
var ans=x/(y+z);
console.log(ans); //ans=2 breakets ara first solve then other operation perform

5
var x=15;
var y=4;
var z=2;
var ans=x%y+z;
console.log(ans); //ans =5  here % is higher presedance than it move to left to right 


6
var x=20;
var y=4;
var z=2;
var ans=x/y-z;
console.log(ans); //ans=3  here / is higher presedance than it move to left to right 

7
var x=2;
var y=3;
var z=4;
var b=2;
var ans= x+ y* z / b;
console.log(ans);  //ans =8  when all value predence is same than see 
                            //associativity here move to right to left first / then multiplication than addistion 

8
var x=4;
var y=2;
var z=2;
var ans=x/y**z;
console.log(ans); //ans=1 in this 1st power than divison is evluted.

9
var x=10;
var y=2;
var z=3;
var ans=(x+y)/z;
console.log(ans);  //ans=4  first slove breakets

10
var x=6;
var y=2;
var z=4;
var ans=x*y%z;
console.log(ans); //ans=0  //precedence of multiplication is greater than remainder, so multiplication will be 
                           //first then remainder
          


11
var x=2;
var y=3;
var z=2;
var ans=x**y**z;
console.log(ans); //ans =512  2**9=512  


12
var x=4;
var y=2;
var z=3;
var ans=(x+y)**3;
console.log(ans); //ans=216  6*3= 216 //precedence of parenthesis is greater than exponentiations, so addition inside 
                                      //parenthesis will be first then exponentiations

13
var x=2;
var y=3;
var z=4;
var b=2;
var ans= x+ y* z ** b;
console.log(ans)  //ans=50 2+3*16  48+2  50

console.log(2 + 3 * 4 ** 2);

14
console.log( 6 * (2 + 4) / 3); //ans=12  here first slove breakts after *,/ presedance is same so it
                                        //  move to left to right to alove that

15
console.log( (10 - 2) / 4);// ans=2 //first slove breakts in addistion than dividtion

16
console.log(8 / (2 * 2)); //ans=2 //here fisrt slove brackts multiplication after divistion is apply

17
console.log( 15 % (4 + 2)); //ans-3 here brackets are first slove than % is apply

18
console.log( 20 / (4 - 2) );//ans=10 here brackts are first slove than apply /

19
console.log( 2 + (3 * 4) / 2);//ans=8 here brackets are first slove than division is apllly beacuse 
                                   //accoding to associtiy first alove / right to left than apply addision

20
console.log(4 / (2 ** 2));//ans=1 //first slove breackts after divistion

21
console.log((10 + 2) / 3);//ans=4 first slove brackets after divistion

22
console.log(6 * (2 % 4));//ans=12 //first slove breackets after mulipication

23
console.log(2 ** (3 ** 2));//ans=512 //first slove breackerts after power

24
console.log((4 + 2) ** 3);//ans=216  //first slove bfreackts after power

25
console.log( 2 + (3 * 4 ** 2));// right to left//ans=50 fist slove breackts in breackes ** is grater
                              // associtity first ** than * after addistion is apply

26
console.log( 6 * (2 + 4) % 3);//ans=0 frist slove breackets *,/ associvity is same to move left to right

27
console.log((10 - 2) / 4); //ans=2 here fisrt slove breackets after divistion

28
console.log(8 / (2 + 2));//ans=2 here first slove breackts addition than divistion is apply

29
console.log(15 % (4 - 2));//ans=1 here fisrt slove breackts sub(-) after % is apply

30
console.log( 20 / 4 - 2);//ans=3 here first slove divistion bcz / is higher associvity than -

31
console.log( 2 + 3 * (4 / 2));//r to l ans=8 here first slove brackets after * bcz in +and * 
                            //associvity is same than move to right to left .

32
console.log(4 / (2 ** 2));//ans1 here breacks are slove first than division is apply

33
console.log((10 + 2) / 3);//ans-4 here breacks are first apply than divistion is apply

34
console.log( 6 * (2 % 4) - 3);//ans=9 here breacks are first slove so slove in breacks % after * than -

35
console.log(2 ** (3 ** 2));//ans-512 here first slove bracks  after slove power** 

36
console.log((4 + 2) ** 3 - 1);//215 here first slove bracks additon after ** and than -

37
console.log(2 + (3 * 4 ** 2) / 2);//26 here fisrt slove bracks in bracks first slove ** and multiplication 
                                  //than diviston than addition 

38
console.log(6 * (2 + 4) % 3 + 1);//ans1 here slove brackets 1st after  * after % after + left to right

39
console.log((10 - 2) / 4 + 2);//4 here fist slove bracktes after divition than +

40
console.log(8 / (2 * 2) + 3);//ans-5 first slove breckts after divition than +

41
console.log(15 % (4 + 2) - 1);//ans-2 first slove brackets after % after -

42
console.log(20 / (4 - 2) + 1 );//ans11 first slove brackets agfter diviton after +

43
console.log( 2 + (3 * 4) / 2 - 1);//ans=7 first slove brackets after divition after plus

44
console.log(4 / (2 ** 2) + 3);//ans=4 first slove breackets after divition after +

45
console.log(4 / (2 ** 2) + 3);//ans=4 first slove brackts after divition than plus

46
console.log( 6 * (2 % 4) / 3 + 2 );//ans=6 first slove brackets after multiply after diviton after +

47
console.log(2 ** (3 ** 2) - 1);//ans=511 fisrt slove breackts after remainder after -

48
console.log( (4 + 2) ** 3 + 1);//217 first slove brackts after reminder after +

49
console.log( 2 + (3 * 4 ** 2) / 2 - 3);//ans=23 first slove brackets expolainsir than multiply after divition


50
console.log(6 * (2 + 4) % 3 + 1 - 2);//ans=-1 frist slove beackets after multiplaction after % after +after_

51
console.log( "5" + "3");//53   //both are string than concat two string ->53

52
console.log("7" - "2");//5  //minus(-) is used to substract two value

53
console.log( "10" * "2");//20 //multiplication(*) is used to multiply two number or string

54
console.log("15" / "5");//3//divison(/) is used to divide two number or string

55
console.log( "10" % "3" );//1 //Module(%) is used to return reminder string

56
console.log(("2.5") + 1.8);//2.51. //plus operator is used to concat two string if value are string

57
console.log( 4 - Number("2.5"));//ans=1.//Number is used to change string into number

58
console.log(1.5 * Number("3.2"));//ans=4.800000000000001 //string into number-multiply

59
console.log( 9.8 / Number("2"));//4.9   //string into number-divide

60
console.log( "7" + String(2.5));//ans=72.5 it in string + is unary,bainary.

61
console.log(10 - Number("2.5"));//7.5

62
console.log(3.5 * Number("2"));//ans=7

63
console.log(8 / Number("2.5")); //string into number-divide

64
console.log( String(1.2) + "0.5");//concat
// console.log( String(1.2) - "0.5");

65
console.log(6 - Number("1.2"));  //string into number-minus

66
console.log(10 * 2 / 5 + Math.pow(2, 3) - 4 % 3);//math-left to right(multiply-divide)-module-plus-minus

67
console.log( "hello" && 0);//ans=0  //first condition true than print second statement in &&

68
console.log( "" || "world");//ans=world /first condition false than print second statement in ||

69
console.log(null && true);//ans=null /first condition false than print 1st statement in ||

70
console.log(NaN || "value");//ans=value  ///first condition false than print second statement in ||

71
console.log(undefined && null);//ans=undefined ///first condition false than print first statement in &&

72
console.log(10 && "number");//number first condition true than print second statement in &&

73
console.log( " " || 0);//ans=0 //first condition false than print second statement in ||

74
console.log( NaN && "value");//NAN first condition false than print first statement in &&

75
console.log( null || undefined); //first condition false than print second statement in ||

76
console.log( false && "false");//false ///first condition false than print second statement in ||

77
console.log( "hello" || 0); ///first condition false than print second statement in ||

78
console.log( 0 && true);//ans=0///first condition false than print second statement in ||

79
console.log( NaN || null);//ans=null // //first condition false than print second statement in ||


80
console.log( undefined && "undefined" );//undefined //first condition false than print first statement in &&

81
console.log(10 || "number");//10 ");        
//first condition true than print first statement in ||


82
console.log(  "" && 0);//space print  //first condition false than print first statement in &&

83
console.log( NaN || "");//space //first condition false than print second statement in ||


84
console.log( null && undefined);//null //first condition false than print first statement in &&

85
console.log( false || "false");//string-false //first condition false than print second statement in ||


86
console.log( "hello" && 10);//10//first condition true than print second statement in &&

87
console.log( true ? "Yes" : "No");//yes/condition is true than print first statement

88
console.log( false ? 10 : 5);//5 //condition is false than print second statement

89
console.log(3 > 5 ? "Greater" : "Less");//less   //condition is false than print second statement

90
console.log( 10 === 10 ? "Equal" : "Not equal");//equal //condition is true than print first statement

91
console.log( false ? "Hello" : "World");//world   //condition is false than print second statement

92
console.log(null ? "NotNull" : "Null");//null  //condition is false than print second statement

93
console.log( undefined ? "Defined" : "Undefined");//undefined//condition is false than print second statement

94
console.log( 'a' !== 'b' ? "Different" : "Same");//diffrent //condition is true than print first statement

95
console.log(1 < 0 ? "True" : "False");//false//condition is false than print second statement

96
console.log( 0 ? "Truthy" : "Falsy");//falsy//condition is false than print second statement

97
console.log( "" ? "Truthy" : "Falsy");//falsy bcz it empty //condition is false than print second statement

98
console.log( NaN ? "Valid" : "Invalid");//invaild  //condition is false than print second statement

99
console.log( [] ? "NotEmpty" : "Empty");//not empty //condistion is true than print first statemnet

100
console.log( [1, 2] ? "Exists" : "Not exists");//Exists//condition is true than print first statement

101
console.log( {} ? "Object" : "Not object");//object//first condistion is ture than print first statement

102
console.log( 0.5? "True" : "False");//ture buz we have value when we write 0 than give false

103
console.log(undefined === null ? "Equal" : "Not equal");//not-equale first conditon is ture than print second statment

104
console.log( 10 > 5 ? "Greater" : "Less");//greater//condition is true than print first statement

105
console.log(null !== undefined ? "Different" : "Same");//it is ture than print diffreent;//condition is true than print first statement

106
console.log( true ? 1 : 0);//1 //condition is true than print first statement

107
var num1=9;
var num2=6;
var num3=5;

largest= (num1>num2)?(num1>num3?num1:num3):(num2>num3?num2:num3);
largest=(num1>num2)?(num1>num3):a(num2>num1)
// largest=(a > b) ? ((a > c) ? a : c) : ((b > c) ? b : c);
console.log(largest); 
//here fist cheack which number is bigger than two numbers than first cheack 1,2 num if 1st number is big than 
//2nd number so 1st is also cheack wich 3rd number than both condition ture than print 1st number

//same which 2nd number is great than 1st and 3rd than print it both condision is ture than print 2nd satatement
//if both acondidtion are false than 3rd is print.