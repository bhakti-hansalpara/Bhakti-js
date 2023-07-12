// var date1 = new Date("11/7/2023");
// var date2 = new Date("02/10/2023");
  

// var Difference_In_Time = date2.getTime() - date1.getTime();
  
// var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
  
// console.log("number of days "
//            + Difference_In_Days +"days");     


// ------practic-2------//
//find how many days that month
// var getDaysInMonth = function(month,year) {
    
//    return new Date(year, month, 0).getDate();
//   };
//   console.log(getDaysInMonth(1, 2012));
//   console.log(getDaysInMonth(2, 2012));
//   console.log(getDaysInMonth(9, 2012));
//   console.log(getDaysInMonth(12, 2012));

//   ------practic-3-------//
//which date id big 

// function compareDates(date1, date2) {
//     if (date1 > date2) {
//       return "Date 1 is big";
//     } else if (date1 < date2) {
//       return "Date 2 is big";
//     } else if(date1>date2){
//       return "Date 1 is equal to Date 2.";
//     }else{
//         return "enter vaild date";
//     }
//   }
//   var firstDate = new Date('2023-10-01');
//   var secondDate = new Date('2023-12-01');
//   var thiedDate=new Date('10/12/2023')
  
//   console.log(compareDates(firstDate, secondDate,thiedDate));




  //------------date formet------------//
// enter date and give output in words like tuseday, wednesday...



// -----give age how yaers you old------//
// function calculate_age(dob) { 
//     var diff_ms = Date.now() - dob.getTime();
//     var age_dt = new Date(diff_ms); 
  
//     return Math.abs(age_dt.getUTCFullYear() - 1970);
// }

// console.log(calculate_age(new Date(1982, 11, 4)));

// console.log(calculate_age(new Date(1962, 1, 1)));
// console.log(calculate_age(new Date(2023, 10, 2)));


    


  
    

  