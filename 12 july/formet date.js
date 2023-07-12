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



function transform(formatDate) {
    var date = new Date();
    
    switch (format) {
      case 'yyyy-mm-dd':
        return formatDate(date, 'yyyy-mm-dd');
      case 'dd-mm-yyyy':
        return formatDate(date, 'dd-mm-yyyy');
      case 'yyyy:mm:dd':
        return formatDate(date, 'yyyy:mm:dd');
      case 'yyyy-dd-mm':
        return formatDate(date, 'yyyy-dd-mm');
      default:
        return 'Invalid format';
    }
  }
  
  console.log(transform('yyyy-mm-dd')); // Output: "2022-01-01"
  console.log(transform('dd-mm-yyyy')); // Output: "01-01-2022"
  console.log(transform('yyyy:mm:dd')); // Output: "2022:01:01"
  console.log(transform('yyyy-dd-mm')); // Output: "2022-01-01"
  console.log(transform('invalid-format')); 




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

function format(transform) {
    var date = new Date();
    
    var options = {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    };
    var op2={day:'2-digit', month:'2-digit',year:'numeric'};
  
    return date.toLocaleDateString(undefined, options);
  }
  
  console.log(format('dd-mm-yyyy')); 

  //----add 2days to current date//
  var date = new Date("1/2/2023"); // Create a Date object with the initial date

// Add two days
date.setDate(date.getDate() + 2);

console.log(date.toLocaleDateString()); // Output: "3/2/2023"