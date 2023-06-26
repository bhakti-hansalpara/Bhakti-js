//if is use to check condistion if conditon is true than print stetment other-wise out the loop
var x=200;
var y=300;
if(x>250){
    console.log("x is big");
}
//if conditon is false than it out the loop and not print anthing

var x=600;
var y="100";
if(x===y){
    console.log("both valure is same");
}

var x="bhakti";
var y="bhakti";
if(x==y){
    console.log("both name is same");
}

//if else ----//
//when you check two condition 1st is wrong than print 2nd stetment


var x=15;
if(x>30){
    console.log("x is Greater");
}else{
    console.log("x is smaller");
}

var x=100;
if(x==100){
    console.log("x is same");
}else{
    console.log("x is not same");
}

var x='100';
if(x===100){
    console.log("x is same");
}else{
    console.log("x is not same");
}

var name="bhakti";
var gender="female";
if(gender=="male"){
    console.log("hello Mr."+name);
}else{
    console.log("hello Miss."+name);
}


//when you have mulipale statemets and condison than use if-else-if 

var time=32;
if(time<10){
    console.log("good moring");
}else if(time<20){
console.log("good day");
}else if(time<30){
    console.log("good evening");
}
else{
    console.log("good night");
}


var per=32;

if(per>=80 && per<=100){
    console.log("you are in merit");
}else if(per>=60 && per<80){
    console.log("you pass with a gred");
}else if(per>=50 && per<60){
    console.log("you pass with b+ gerad");
}else if(per>=40 && per<50){
    console.log("you pass with b gerad");
}else if(per>=33 && per<40){
    console.log("you are just pass");
}else{
    console.log("not pass you are fail");
}
