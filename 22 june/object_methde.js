const a={b:10};
const arr=[a]
console.log(arr);
a.b=15;
console.log(arr);

//object_assign()
const fname={
    name:"bhakti"

}
const lname={
    name1:"patel"
}
const fullname=Object.assign(fname,lname);
console.log(fullname);
const copy=Object.assign({},fullname);
console.log(copy);

let obj1 = { a: 1 }
let obj2 = { b: 2 }
let obj3 = Object.assign(obj1, obj2,{c:3})
console.log(obj3) 

function fullName(opstion){
const deaflut={
    fname:"bhakti",
    lname:"patel"
};
opstion=Object.assign(deaflut,opstion);
console.log(`${opstion.fname} ${opstion.lname}`);
}
fullName({
    fname:"shlok"
});

//object methode.is() is compair to value and get output in ture and false

console.log(Object.is('1', 1));
// Expected output: false

console.log(Object.is(NaN, NaN));
// Expected output: true

console.log(Object.is(-0, 0));
// Expected output: false

const obj = {};
console.log(Object.is(obj, {}));
// Expected output: false
console.log(object.is('',[]));
console.log(Object.is("9",9));
console.log(Object.is(" ",[]));
console.log(Object.is(null,undefined));
console.log(Object.is(null," "));

//objects.key  ----is display of the all key names
const person={
    name:"bhakti",
    age:"18",
    school:"Dholkiya",
    city:"rajkot"
};
const keys=Object.keys(person);
console.log(keys);


function nameType(){
    daitls={
        name:"bhakti",
        std:"4"
    }
    const store=Object.keys(daitls);
    console.log(store);
    
    
        //    std:"665"
};
nameType();


//object.values
const person={
    name:"bhakti",
    age:"18",
    school:"Dholkiya",
    city:"rajkot"
};

const ans=Object.values(person);
console.log(ans);


//object.entries

const person={
    name:"bhakti",
    age:"23"
}
console.log(Object.entries(person)[1]);

//using for loop
const person={
    name:"bhakti",
    age:"23"
}
for (const[key,value]of Object.entries(person)){
    console.log(`key=> ${key }| Value => ${value}`);
}

//using url
const person={
    name:"bhakti",
    age:"23"
}
const params=new URLSearchParams(Object.entries(person));
console.log(params.toString());

//accessing object properties
//has 3 method  1. object.property
            //2.object['pro']
            //3.const{propty}=obje

 var name={
    fullname:"bhkti patel",
    course:"computer",
    age:20,
   
 }        
 console.log(name.course);   
 console.log(name['age']);
 const{age}=name;
 console.log(age);
 console.log('fullname');
 const mykey='5years';
 const myvalue=name[mykey];
 const{[mykey]:mynewvalue,}=name;
 console.log(mynewvalue);

 //--spuare---
 function myFunction(x, y, z) { //not run
    var met={
        name:"bhakti",
        age:20
    }
 }
const args = [0, 1, 2];
myFunction(...args);


spred=function(){
    var mat=['ft','hfg','hfc'];
}
console.log(...mat);

spred=function(){
    var mat=['ft','hfg','hfc'];
    var mat2=[...mat,'jgh',5,6]
}
console.log(mat2);

spred=function(){
    var mat=[1,2,3];
    var mat2=[...mat,4,5,6];
    console.log(mat2);
}

