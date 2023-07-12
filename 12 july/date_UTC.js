//----using get mehtod
const birthday = new Date('August 19, 1975 23:15:30');
const date1 = birthday.getDate();

console.log(date1);//=>19

//using UTCget Date
const date1 = new Date('August 19, 1975 23:15:30 GMT+11:00');
console.log(date1.getUTCDate());//=>19
