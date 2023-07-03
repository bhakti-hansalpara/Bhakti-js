for(i=1; i<=2; i++){
    console.log(i);
}

let n = 5;
let string = "";
for (let i = 0; i < n; i++) {
  for (let j = 0; j< n; j++) {
    string += "*"+" ";
  }
  string += "\n";
}
console.log(string);

let n=5;
let string=" ";
for(let i=0; i<n; i++){
    string=+"*"+" ";
    console.log(string);
}

for(i=5; i>=1; i--){
  var starPrint=" ";
  for(j=i-1; j>=0; j--){
    starPrint=startPrint+"* ";
  }
  console.log(starPrint);
}