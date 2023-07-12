
// var now = new Date();
// console.log(now);  //=>2023-07-09T12:23:01.587Z

// var now = new Date(0);
// console.log(now); //==>Thu Jan 01 1970 05:30:00 GMT+0530 (India Standard Time) when write 0 

//we passed 7 arguments in new DAte()
//==>(2022,3,4,18,1,2,3)
//==>(year,month,date,hours,mintes,secods,miliseconds)

// console.log(now.getDate());  //=>9
// console.log(now.toDateString());  //=>Sun Jul 09 2023
// console.log(now.getDay()); //=>0 menas sunday , 1 means Monday

// var then=new Date('October 2 2020');
// console.log(then.getDay()); //=>5 means friday

// console.log(now.getFullYear());  //=>2023
// var then=new Date('October 2 2020');
// console.log(then.getFullYear()); 
// console.log(now.getMonth()); //=>6

// ----time----//
// var time=new Date('October 2 2022');//=> when we write past day or month in case it always print 0 bcz of 12 day start whith 12 o clock then alwalys it print 0 in mintes,day,seconds everey method
// console.log(time.getHours());//=>18 means 6
// console.log(time.getMinutes());//=>16 means 6:16
// console.log(time.getSeconds());//=> 5 means 6:16:5
// console.log(time.getMilliseconds());//=>996
// console.log(time.getTime());
// document.write(now.toDateString());


// -------set method-----//
//it is print history and furue date ,time

// let current=new Date();
// console.log(current); //==>Mon Jul 10 2023 12:31:53 GMT+0530 (India Standard Time)

// current.setDate(20);
// console.log(current);  //==>Thu Jul 20 2023 12:33:37 GMT+0530 (India Standard Time)

// current.setFullYear(2020);
// console.log(current); //==>Mon Jul 20 2020 12:35:06 GMT+0530 (India Standard Time)

// current.setHours(24);
// console.log(current); //==>24 count it 12 o'clock //Tue Jul 21 2020 00:35:50 GMT+0530 (India Standard Time)
//                      //==> 27 count it 3 o'clock

// current.setMilliseconds(500000);
// console.log(current); //==.Tue Jul 21 2020 00:47:21 GMT+0530 (India Standard Time)

// current.setMinutes(67);
// console.log(current);  //==>Tue Jul 21 2020 01:07:30 GMT+0530 (India Standard Time)

// current.setTime(2);
// console.log(current); //==>Thu Jan 01 1970 05:30:00 GMT+0530 (India Standard Time)-why it give 5 o clock
// console.log(current.getTime()); //==>2

// current.setUTCDate(22);
// console.log(current); //==.Thu Jan 22 1970 05:30:00 GMT+0530 (India Standard Time) --UTC start from 1970

// current.setUTCFullYear(2030);
// console.log(current); //==.Tue Jan 22 2030 05:30:00 GMT+0530 (India Standard Time)


// // ---speaical---//
// let now= new Date();
// console.log(now);
// now.getTimezoneOffset();
// console.log(now);  //==>Mon Jul 10 2023 12:53:13 GMT+0530 (India Standard Time)   ---it return diffrence between local time and UTC time in mintes

// const date1 = new Date('August 19, 1975 23:15:30 GMT+07:00');
// const date2 = new Date('August 9, 1975 23:15:30 GMT-02:00');

// console.log(date1.getTimezoneOffset());
// // Expected output: your local timezone offset in minutes
// // (e.g., -120). NOT the timezone offset of the date object.

// console.log(date1.getTimezoneOffset() === date2.getTimezoneOffset());
// Expected output: true

// -moments-//
// moment().format('MMMM Do YYYY, h:mm:ss a'); // July 10th 2023, 2:34:00 pm
// moment().format('dddd');                    // Monday
// moment().format("MMM Do YY");               // Jul 10th 23
// moment().format('YYYY [escaped] YYYY');     // 2023 escaped 2023
// moment().format();  

// {moment().format('MMMM Do YYYY, h:mm:ss a'); // July 10th 2023, 2:34:00 pm
// moment().format('dddd');                    // Monday
// moment().format("MMM Do YY");               // Jul 10th 23 //Do 18th only D-18 it is differce 
// moment().format('YYYY [escaped] YYYY');     // 2023 escaped 2023
// moment().format();  
// }

// -now-//
// const start=Date.now();
// console.log(start);

// // --value of--//
// const d = new Date(); // 1970-01-01T00:00:00.000Z
// console.log(d.valueOf()); //  1688982040978

// const d = new Date(0); // 1970-01-01T00:00:00.000Z
// console.log(d.valueOf()); 0