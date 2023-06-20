// Nullish coalescing operator/

// it check undefined and null

// let user={
//     student:{
//         name:"bhakti",
//         age:18
//     }
// };
// console.log(user.student.name);

// let user={                          //error undefined
//     student:{
//         // name:" ",
//         age:18
//     }
// };
// console.log(user.student.name);

// let user={                          //nothing output
//     student:{
//         name:" ",
//         age:18
//     }
// };
// console.log(user.student.name || 'unknow');  


// let user={                          //op-20
//     student:{
//         name:" bhakti",
//         // age:' '
//     }
// };
// console.log(user.student.name || 20);
// console.log(user.student.age||20);  


// let user={                          //op-20
//     student:{
//         name:' ',
//         age:0
//     }
// }   
// console.log(user.student.name ?? 'unkonwn');
// console.log(user.student.age ?? 20);  

// nullis is first chek in left-hand-side if the 
// expesen is null and undifend than it move to right-hand -side and return it

// const name=" ";
// const lname="bhakti";
// const disply=name??lname;
// console.log(disply);

// const name=;
// const lname="bhakti";
// const disply=name||lname;
// console.log(disply);

//diffrence between ?? and ||
// in ?? check null and undefined if left-side value is false but not null and undefined than it return value left-side
// in || the left-side value is false than it return value of right-handside.


// const name=0;
// const lname="bhakti";
// const disply=name??lname;
// console.log(disply); //not null than write 0

// const name=null;
// const lname="bhakti";
// const disply=name??lname;
// console.log(disply); //null than write bhakti

// var a=29;
// var b=9;
// var c=a||b;
// console.log(c);

// var a=29;
// var b=9;
// var c=a<b||"bhakti";
// console.log(c); // leftside is wrong than return right-side value



// !! is unary operator not not

// var b1;
// b1=!!"bhakti";
// console.log(b1);
// it is not change the value 





