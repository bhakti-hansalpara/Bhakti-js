// -final-//
// function formatDate(date, format) {
//     const year = date.getFullYear();
//     const month = String(date.getMonth() + 1).padStart(2, '0');
//     const day = String(date.getDate()).padStart(2, '0');
  
//     switch (format) {
//       case 'yyyy:mm:dd':
//         return `${year}:${month}:${day}`;
//       case 'dd/yyyy/mm':
//         return `${day}/${year}/${month}`;
//         case 'yyyy-mm-dd':
//             return `${year}-${month}-${day}`;
//       default:
//         return 'Invalid format';
//     }
//   }
  
//   const currentDate = new Date();
//   console.log(formatDate(currentDate, 'yyyy:mm:dd'));
//   console.log(formatDate(currentDate, 'dd/yyyy/mm'));
//   console.log(formatDate(currentDate, 'yyyy-mm-dd'));

  
// let objectDate = new Date();


// let day = objectDate.getDate();
// console.log(day); // 23

// let month = objectDate.getMonth();
// console.log(month + 1); // 8

// let year = objectDate.getFullYear();
// console.log(year); // 2022
// let format1 = month + "/" + day + "/" + year;
// console.log(format1); // 7/23/2022

// let format2 = day + "-" + month + "-" + year;
// console.log(format2); // 23/7/2022

// let format3 = month + ":" + day + ":" + year;
// console.log(format3); // 7-23-2022

// let format4 = day + " " + month + " " + year;
// console.log(format4); // 23-7-2022

// function formet(transform){
//     var a=new Date();
   
//     final_date=a.getDate()+'/'+a.getMonth()+'/'+a.getFullYear();
//     return final_date;
// }

// console.log(formet('dd/mm/yyyy'));

// function formet(transform){
//     var a=new Date();
   
//     final_date=a.getDate()+'/'+a.getMonth()+'/'+a.getFullYear();
//     return final_date;
// }

// console.log(formet('dd/mm/yyyy'));

// // ---using function---//


// function transform(date, formet) {
//   let currDate = new Date();
//   date = date.toUpperCase();
//   let dateObj = {
//     "YYYY/MM/DD": currDate.getFullYear() + formet +  (currDate.getMonth() + 1) + formet + currDate.getDate(),
//     "YYYY/DD/MM":currDate.getFullYear()+formet+(currDate.getMonth()+1)+formet+currDate.getDate(),
//     "DD/MM/YYYY": currDate.getDate() +formet + (currDate.getMonth() + 1) + formet+currDate.getFullYear(),
//     "MM/DD/YYYY": currDate.getMonth()+1+formet+currDate.getDate()+formet+currDate.getFullYear(),
//     "HH:MM:SS":currDate.getHours() +":" + currDate.getMinutes() +":" +currDate.getSeconds(),     
//   };
//   return dateObj[date];
// }
// console.log(transform("YYYY/MM/DD", "/"));
// console.log(transform("YYYY/DD/MM", "/"));
// console.log(transform("DD/MM/YYYY", "/"));
// console.log(transform("MM/DD/YYYY", "/"));
// console.log(transform("mm/dd/yyyy", "/"));
// console.log(transform("m/d/yyyy", "/"));

// console.log(transform(`HH:MM:SS`));



// function transform(formatDate) {
//     var date = new Date();
    
//     switch (format) {
//       case 'yyyy-mm-dd':
//         return formatDate(date, 'yyyy-mm-dd');
//       case 'dd-mm-yyyy':
//         return formatDate(date, 'dd-mm-yyyy');
//       case 'yyyy:mm:dd':
//         return formatDate(date, 'yyyy:mm:dd');
//       case 'yyyy-dd-mm':
//         return formatDate(date, 'yyyy-dd-mm');
//       default:
//         return 'Invalid format';
//     }
//   }
  
//   console.log(transform('yyyy-mm-dd')); // Output: "2022-01-01"
//   console.log(transform('dd-mm-yyyy')); // Output: "01-01-2022"
//   console.log(transform('yyyy:mm:dd')); // Output: "2022:01:01"
//   console.log(transform('yyyy-dd-mm')); // Output: "2022-01-01"
//   console.log(transform('invalid-format')); 




//   function transform(format) {
//     var date = new Date();
    
//     var formatOptions = {
//       'yyyy-mm-dd': { year: 'numeric', month: '2-digit', day: '2-digit' },
//       'dd-mm-yyyy': { day: '2-digit', month: '2-digit', year: 'numeric' },
//       'yyyy:mm:dd': { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' },
//       'yyyy-dd-mm': { year: 'numeric', day: '2-digit', month: '2-digit' }
//     };
  
//     var options = formatOptions[format];
//     if (options) {
//       return date.toLocaleDateString(undefined, options);
//     } else {
//       return 'Invalid format';
//     }
//   }
  
//   console.log(transform('yyyy-mm-dd')); // Output: "2022-01-01"
//   console.log(transform('dd-mm-yyyy')); // Output: "01-01-2022"
//   console.log(transform('yyyy:mm:dd')); // Output: "2022:01:01 00:00:00"
//   console.log(transform('yyyy-dd-mm')); // Output: "2022-01-01"
//   console.log(transform('invalid-format'));

// function format(transform) {
//     var date = new Date();
    
//     var options = {
//       day: '2-digit',
//       month: '2-digit',
//       year: 'numeric'
//     };
//     // var op2={day:'2-digit', month:'2-digit',year:'numeric'};
//     var op2={year:'numeric',day:'2-digit',month:'2-digit'};
  
//     return date.toLocaleDateString(undefined, options);
//   }
  
// //   console.log(format('dd-mm-yyyy')); 
//   console.log(format('yyyy-mm-dd'));

  //----add 2days to current date//
//   var date = new Date("31/1/2023"); // Create a Date object with the initial date

// // Add two days
// date.setDate(date.getDate() + 2);

// console.log(date.toString()); // Output: "3/2/2023"

// function calculateAge(birthdate) {
//     var today = new Date();
//     var birthdate = new Date(birthdate);
//     var age = today.getFullYear() - birthdate.getFullYear();
  
//     var monthDiff = today.getMonth() - birthdate.getMonth();
//     var dayDiff = today.getDate() - birthdate.getDate();
  
//     switch (true) {
//       case monthDiff < 0:
//         age--;
//         break;
//       case monthDiff === 0 && dayDiff < 0:
//         age--;
//         break;
//       default:
//         break;
//     }
  
//     return age;
//   }
  
//   // Example usage
//   var myAge = calculateAge("1990-05-15");
//   console.log(myAge);

//   function calculateAge(birthdate) {
//     var today = new Date();
//     var birthdate = new Date(birthdate);
//     var age = today.getFullYear() - birthdate.getFullYear();
//     var monthDiff = today.getMonth() - birthdate.getMonth();
    
//     if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthdate.getDate())) {
//       age--;
//     }
    
//     return age;
//   }
  
//   // Example usage
//   var myAge = calculateAge("1990-05-15");
//   console.log(myAge);

// const d1 = new Date('2020-01-01')
// const d2 = new Date('2020-01-01T00:00')
// console.log(d1.getFullYear(), d2.getFullYear())

// var date = new Date("2021-10-20");
// var formattedDate = date.toLocaleDateString();
// console.log(formattedDate);

// octbor 2 2023 
// output 10/02/2023
// var date = new Date("Octbor-2-2023");
// var formattedDate = date.toLocaleDateString();
// console.log(formattedDate);

// var time = new Date("2021-10-20T14:30:00");
// var formattedTime = time.toLocaleTimeString("en-US");
// console.log(formattedTime);

// var time = new Date("10/2/2023:12:20:29");
// var formattedTime = time.toLocaleTimeString("en-US");
// console.log(formattedTime);

// var date = new Date("2021-10-20");
// var dayOfWeek = date.toLocaleDateString("en-US", { weekday: 'long' });
// console.log(dayOfWeek);

// Create a new Date object
// var currentDate = new Date();
// var utcDate = currentDate.getUTCDate();
// console.log("UTC Date: " + utcDate);

// --------compare 2 dates how many days between that date--------//
// var date_diff_indays = function(date1, date2) {
//     var dt1 = new Date(date1);
//      var dt2 = new Date(date2);
//      var dt3=dt1.getTime();
//      var dt4=dt2.getTime();
//      var dt10=dt3-dt4;
//      var dt20=dt10/(24*3600*1000);
//      return dt20;
//     //  return dt4-dt3;
//     // return (dt4-dt3)*30;
    
//     // return Math.floor((Date(dt2.getFullYear(), dt2.getMonth(), dt2.getDate()) - Date(dt1.getFullYear(), dt1.getMonth(), dt1.getDate()) ) /(1000 * 60 * 60 * 24));
//     }
//     console.log(date_diff_indays('2023/8/17', '2023/7/12'));//=>5
//     console.log(date_diff_indays('12/02/2020', '11/04/2018')); //====>it is not run 

//     let date1=new Date("2020-10-20")
//     let date2 =new Date("2020-10-04");
//     let diff=date2.getTime()-date1.getTime();
//     let diffDays=diff/(1000*3600*24);
//    console.log( Math.abs(diffDays));//=>16
//     console.log(diffDays);    //=>-16



// Write a JavaScript function to get time differences in months between two dates.
// function diff_months(dt2, dt1) 
// {

//  var diff =(dt2.getTime() - dt1.getTime()) / 1000;
//   diff /= (60 * 60 * 24 * 7 * 4);
//  return Math.abs(Math.round(diff));
 
// }

// dt1 = new Date(2014,10,2);
// dt2 = new Date(2014,10,11);
// console.log(diff_months(dt1, dt2));

// dt1 = new Date("June 13, 2014 08:11:00");
// dt2 = new Date("October 19, 2014 11:13:00");
// console.log(diff_months(dt1, dt2));
// var date_diff_inMonth = function(date1, date2) {
//     var dt1 = new Date(date1);
//      var dt2 = new Date(date2);
//      var dt3=dt1.getTime();
//      var dt3=dt1.getTime();
//      var dt4=dt2.getTime();
//      var dt10=(dt3-dt4)*30;
//     //  var dt10=(dt3-dt4)/24*3600*1000;
  
//      return dt10;
//     //  return dt4-dt3;
//     // return (dt4-dt3)*30;
    
//     // return Math.floor((Date(dt2.getFullYear(), dt2.getMonth(), dt2.getDate()) - Date(dt1.getFullYear(), dt1.getMonth(), dt1.getDate()) ) /(1000 * 60 * 60 * 24));
//     }
//     console.log(date_diff_inMonth('2023/8/17', '2023/7/12'));//=>5
//     console.log(date_diff_inMonth('12/02/2020', '11/04/2018')); 

// function dateModifier(year, month, date, hour, minute, second) {
//     let OGDate = new Date();
//     let mdfYear, mdfMonth, mdfDate, mdfHour, mdfMinute, mdfSecond;
//     mdfYear = OGDate.getFullYear() + year; 
  
//     mdfMonth = OGDate.getMonth() + month; 
   
//     mdfDate = OGDate.getDate() + date; 
   
//     mdfHour = OGDate.getHours() + hour; 
  
//     mdfMinute = OGDate.getMinutes() + minute; 

//     mdfSecond = OGDate.getSeconds() + second; 

//     return `Year : ${mdfYear}, Month :  ${mdfMonth}, Date :  ${mdfDate}, Hour :  ${mdfHour}, Minute :  ${mdfMinute}, Second : ${mdfSecond}`
// }
// // console.log(dateModifier(7 , 3, 4,5,2,50));
// console.log(dateModifier(6,1,22,23,36,36));
//it is not perfect bcz of give date 35,above 31 and minte and seconds also above seconds remove that add some condition

// function dateModifier(year, month, date, hour, minute, second) {
//     let OGDate = new Date();
//     let mdfYear, mdfMonth, mdfDate, mdfHour, mdfMinute, mdfSecond;
  
//     mdfYear = OGDate.getFullYear() + year;
  
//     // Adjust month
//     mdfMonth = (OGDate.getMonth() + month) % 12;
  
//     // Adjust date (valid range: 1 to 31)
//     mdfDate = OGDate.getDate() + date;
//     if (mdfDate > 31) {
//       mdfMonth++; // Move to the next month
//       mdfDate = mdfDate % 31; // Wrap around to the next month's valid range
//     }
  
//     mdfHour = (OGDate.getHours() + hour) % 24;
  
//     mdfMinute = (OGDate.getMinutes() + minute) % 60;

//     mdfSecond = (OGDate.getSeconds() + second) % 60;
  
//     return `Year: ${mdfYear}, Month: ${mdfMonth}, Date: ${mdfDate}, Hour: ${mdfHour}, Minute: ${mdfMinute}, Second: ${mdfSecond}`;
//   }
  
//   console.log(dateModifier(1,1,20,56,8,7));
  
// ---toJSON----//
//when you passed wrong formet of date then it giveNaN not give any error
// const jsonDate = new Date(0).toJSON(); // '1970-01-01T00:00:00.000Z'
// const backToDate = new Date(jsonDate);

// console.log(jsonDate); // 1970-01-01T00:00:00.000Z

// const jesondate=new Date();
// const backdate=jesondate.toJSON();
// console.log(jesondate);//2023-07-13T05:05:27.049Z
// console.log(backdate);//2023-07-13T05:05:27.049Z

// const currentDate = new Date();
// console.log(currentDate);
// const jsonString = JSON.stringify({ date: currentDate });

// console.log(jsonString);


// --toISOtring--//
//it convert ISO 8601 format form
//when you right wrong date formet it give error in case of JSON it give NaN not give any eror in JSON
// const event = new Date('13 july 2023');
// console.log(event.toString());
// // console.log(event.toLocalstring());
// console.log(event.toISOString());// "2011-10-05T14:48:00.000Z"

