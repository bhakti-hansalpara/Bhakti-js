myString="This is my code";
for(let char in myString)   {
    console.log(myString[char]);
}


const object = { a: 1, b: 2, c: 3 };

for (const property in object) {
  console.log(`${property}: ${object[property]}`);
}



const obj = { a: 1, b: 2, c: 3 };

for (const prop in obj) {
  console.log(`obj.${prop} = ${obj[prop]}`);
}

// Logs:
// "obj.a = 1"
// "obj.b = 2"
// "obj.c = 3"


//-----for of-------
let people=["bhakti","Kristi","pooja","diya"];

for(let name of people){
    console.log(name);
}

