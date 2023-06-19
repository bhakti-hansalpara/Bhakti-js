let dev1={ name:'bhakti'}  // in this case both dev1 and dev2 are same beacuse dev2 is copy of dev1.
let dev2=dev1;
console.log(dev1);
console.log(dev2);

//1st methode//
let dev1={name:'bhakti'}
let dev2=Object.assign({},dev1);
dev2.name='shlok';
console.log(dev1);
console.log(dev2);

//2nd methode//
let dev1={name:'bhakti'}
let dev2={...dev1};
dev2.name='shlok';
console.log(dev1);
console.log(dev2);

//in this case when change compter to mechinacl in neasted loop it not change -it is problem in neased loop//

let dev1={name:'bhakti',feild:{
    new:'computer',
    old:'civil'
}}
let dev2={...dev1};
dev2.name='shlok';
dev2.feild.new='mechincal'
console.log(dev1);
console.log(dev2);  //op is dev1=computer,  dev2=computer.//

//3rd case cahnge in neasted object//
let dev1={name:'bhakti',feild:{
    new:'computer',
    old:'civil'
}}
let dev2=JSON.parse(JSON.stringify(dev1));
dev2.name='shlok';
dev2.feild.new='mechincal'
console.log(dev1);
console.log(dev2);  

//in array//

let name={
    a:10, 
    b:20,
    c:30
}
let array=['a','b','c']
console.log(name[array[1]]);

//in variable//

let name1='b';
let name={
    a:10, 
    b:20,
    c:30
}
console.log(name[name1]);



