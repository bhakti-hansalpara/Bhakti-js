let number=[1,2,['bhakti','kristi','misri'],4,5];
console.log(number[2][1]);

// length

var contect=['1','bhakti',8,9];
console.log(contect.length);

// push

var contect=['1','bhakti',8,9];
contect.push('niyti','3')
console.log(contect);

//pop

var contect=['1','bhakti',8,9,'niyti','3',6,5,3];
contect.pop()
console.log(contect);

//unsift

var contect=['1','bhakti',8,9,'niyti','3',6,5,3];
contect.unshift('prachi')
console.log(contect);

//shift


var contect=['1','bhakti',8,9,'niyti','3',6,5,3];
contect.shift('prachi')
console.log(contect);

//splice for pop in middle // first define posstion of pop element and 2nd is number of pop elements of pop//

var contect=['1','bhakti',8,9,'niyti','3',6,5,3];
contect.splice(1,1)
console.log(contect);

//hole pop

var contect=['1','bhakti',8,9,'niyti','3',6,5,3];
contect=[]
console.log(contect);

// find posstion of the elements

var contect=['1','bhakti',8,9,'niyti','3',6,5,3,'disha'];
let posstion= contect.indexOf(9);
console.log(posstion);

//text into array//
var text='my name is bhakti hansalpara';
let wordarray=text.split(' ');
console.log(wordarray);