// // Using slice, create newCar from myCar.
// const myHonda = {
//     color: "red",
//     wheels: 4,
//     engine: { cylinders: 4, size: 2.2 },
//   };
//   const myCar = [myHonda, 2, "cherry condition", "purchased 1997"];
//   const newCar = myCar.slice(0, 2);
  
//   console.log("myCar =", myCar);
//   console.log("newCar =", newCar);
//   console.log("myCar[0].color =", myCar[0].color);
//   console.log("newCar[0].color =", newCar[0].color);
  
//   // Change the color of myHonda.
//   myHonda.color = "purple";
//   console.log("The new color of my Honda is", myHonda.color);
  
//   console.log("myCar[0].color =", myCar[0].color);
//   console.log("newCar[0].color =", newCar[0].color);
  

// //   ------array map --------//
// // simple method
// const number=[1,2,3];
// const result=number.map(x=>x*2)
// console.log(result);

// const number=[1,2,3];
// function squre(number){
//     return number*number
// }
// const result=number.map(squre);
// console.log(result);

// const number=[1,2,3];
// function doub(number){
//     return number*2
// }
// const result=number.map(doub);
// console.log(result);

// const num=[1,2,3,4,5,6];
// function odd(num){
//     if (num %2===0){
//         return num
//     }else{
//         return num!==undefined;
//     }
// }
// const res=num.map(odd);
// console.log(res);


// In the context of the map method, how would you write a callback 
// function that filters out even numbers and returns only the odd numbers
// const numbers = [1, 2, 3, 4, 5];

// const oddNumbers = numbers.map(function(num) {
//   if (num % 2 !== 0) {
//     return num;
//   }
// }).filter(function(num) {
//   return num !== undefined;
// });

// console.log(oddNumbers);
// Output: [1, 3, 5]

// const num=[1,2,3,4,5,6];
// function odd(num){
//     if (num %2===0){
//         return num
//     }else{
//         return num!==undefined;
//     }
// }
// const res=num.filter(odd);
// console.log(res);

// const numbers = [1, 2, 3, 4, 5];

// const oddNumbers = numbers.filter(function(num) {
//   return num % 2 !== 0;
// });

// console.log(oddNumbers);
// Output: [1, 3, 5]

// const number=[{"name":"bhakti",
//                "type":"Women",
//                "hobby":
//                [{"h1":"drawing","h2":"dancing"}]
//               }]
//               console.log(number[0].hobby[0].h2);
             

              
// const number=[{"name":"bhakti",
//                "type":"Women",
//                 "hobby":
//                  [{"h1":"drawing","h2":"dancing"},
//                 {"h3":"craft"}]
                 
//                   }]
// // console.log(number[0].hobby[0].h2);
// // console.log(number[0].hobby[1].h3);
// for(let key in number){
//     console.log(number[key]);
// }

// const fav=[{"games":"any",
//              "moive":"RRR"},{"subject":"Maths",
//              "feild":
//               [{"f1":"computer","f2":"Mechinal"},
//                 {"f3":"civil"}]}]
//                 // console.log(fav[1].feild[1].f3);
//                 const keys = [];
//                 fav.map(obj=>{Object.keys(obj).forEach(key=>{keys.push(key);})})
//                 console.log(keys);
// // ----using forEach-----//
//               fav.forEach(obj => {
//               Object.keys(obj).forEach(key => {
//              keys.push(key);
//              });
//            });
//                 console.log(keys);


// const donuts=[
// 	{
// 		"id": "0001",
// 		"type": "donut",
// 		"name": "Cake",
// 		"ppu": 0.55,
// 		"batters":
// 		{
// 			"batter":
// 				[
// 					{ "id": "1001", "type": "Regular" },
// 					{ "id": "1002", "type": "Chocolate" },
// 					{ "id": "1003", "type": "Blueberry" },
// 					{ "id": "1004", "type": "Devil's Food" }
// 				]
// 		},
// 		"topping":
// 			[
// 				{ "id": "5001", "type": "None" },
// 				{ "id": "5002", "type": "Glazed" },
// 				{ "id": "5005", "type": "Sugar" },
// 				{ "id": "5007", "type": "Powdered Sugar" },
// 				{ "id": "5006", "type": "Chocolate with Sprinkles" },
// 				{ "id": "5003", "type": "Chocolate" },
// 				{ "id": "5004", "type": "Maple" }
// 			]
// 	},
// 	{
// 		"id": "0002",
// 		"type": "donut2",
// 		"name": "Raised",
// 		"ppu": 0.55,
// 		"batters":
// 		{
// 			"batter":
// 				[
// 					{ "id": "1001", "type": "Regular" }
// 				]
// 		},
// 		"topping":
// 			[
// 				{ "id": "5001", "type": "None" },
// 				{ "id": "5002", "type": "Glazed" },
// 				{ "id": "5005", "type": "Sugar" },
// 				{ "id": "5003", "type": "Chocolate" },
// 				{ "id": "5004", "type": "Maple" }
// 			]
// 	},
// 	{
// 		"id": "0003",
// 		"type": "donut3",
// 		"name": "Old Fashioned",
// 		"ppu": 0.55,
// 		"batters":
// 		{
// 			"batter":
// 				[
// 					{ "id": "1001", "type": "Regular" },
// 					{ "id": "1002", "type": "Chocolate" }
// 				]
// 		},
// 		"topping":
// 			[
// 				{ "id": "5001", "type": "None" },
// 				{ "id": "5002", "type": "Glazed" },
// 				{ "id": "5003", "type": "Chocolate" },
// 				{ "id": "5004", "type": "Maple" }
// 			]
// 	},
// 	{
// 		"id": "0004",
// 		"type": "donut1",
// 		"name": "Old Fashioned",
// 		"ppu": 0.55,
// 		"batters":
// 		{
// 			"batter":
// 				[
// 					{ "id": "1001", "type": "Regular" }
// 				]
// 		},
// 		"topping":
// 			[
// 				{ "id": "5001", "type": "None" },
// 				{ "id": "5002", "type": "Glazed" },
// 				{ "id": "5003", "type": "Chocolate" },
// 				{ "id": "5004", "type": "Maple" }
// 			]
// 	}
// ]
 

// function toppingChocolate(array) {
//     let a = donuts.filter((value, index, arr) => {
//         let topping = value.topping;
//         for (let i = 0; i < topping.length; i++) {
//             if (topping[i].type == "Chocolate"){
//                 console.log(value.type+":");
//                 console.log(value);
//                 return value;
//             }
//         }
//     });
//     console.log(a);
//   }
//   toppingChocolate(donuts);

// console.log(toppingChocolate);

// const result = donuts.filter(donut => donut.batters.batter.filter(batter => batter.type === 'Regular')
//  && donut.topping.filter(topping => topping.type === 'Chocolate'));
//  console.log(donuts);

// const result = donuts.filter(donut => donut.topping.filter(topping => topping.type === 'Chocolate' || topping.type === 'Sugar'));
// console.log(donuts);

// const result=donuts.filter(donut=>donut.ppu>0.5);
// console.log(result);

// const result = [].concat(...donuts.map(donut => donut.batters.batter));
// console.log(result);

// const result = donuts.filter(donut => donut.batters.batter.length >= 2);
// console.log(result);

// ---new queston--//
// const info=[{"name":"bhakti",
//   "id":"20",
//    "choice":"dance"
//     "b1":
//    [{
//      "id":"30",
//      "choice":"singing"

//    }]}
// ]
// const dance=info.filter(obj=>int(obj.id)>20);
// console.log(dance);


// const filteredObjects = info.filter(obj => parseInt(obj.id) > 20);
// console.log(filteredObjects);

// const info = [
//     {
//       "name": "bhakti",
//       "id": "20",
//       "choice": "dance",
//       "b1": [
//         {
//           "id": "30",
//           "choice": "singing"
//         },
//         {
//             "id":"45",
//             "choice":"drawing"
//         },
//         {
//             "id":"10",
//             "choice":"craft"
//         }
//       ]
//     }
//   ];
  
//   const filteredObjects = info.filter(obj => parseInt(obj.id) > 20);
//   console.log(filteredObjects);
  // Output: [{ "name": "bhakti", "id": "30", "choice": "singing" }]
  

//   const info = [
//     {
//       "name": "bhakti",
//       "choice": "dance",
//       "b1": [
//         {
//           "id": "30",
//           "choice": "singing"
//         },
//         {
//           "id": "45",
//           "choice": "drawing"
//         },
//         {
//           "id": "10",
//           "choice": "craft"
//         }
//       ]
//     }
//   ];
  
//   const filteredObjects = info.filter(obj => {
//     const b1Array = obj.b1;
//     const filteredB1Array = b1Array.filter(b1 => parseInt(b1.id) > 20);
//     return filteredB1Array.length > 0;
//   });
  
//   console.log(filteredObjects);
  // Output: [{ "name": "bhakti", "id": "20", "choice": "dance", "b1": [{ "id": "30", "choice": "singing" }, { "id": "45", "choice": "drawing" }] }]
  
  const info = [
    {
      "name": "bhakti",
      "choice": "dance",
      "b1": [
        {
          "id": "30",
          "choice": "singing"
        },
        {
          "id": "45",
          "choice": "drawing"
        },
        {
          "id": "10",
          "choice": "craft"
        }
      ]
    }
  ];
  
  const filteredObjects = info.filter(obj => {
    return obj.b1.filter(item => parseInt(item.id) > 20).length > 0;
  });
  
  console.log(filteredObjects);
  // Output: [{ "name": "bhakti", "choice": "dance", "b1": [{ "id": "30", "choice": "singing" }, { "id": "45", "choice": "drawing" }]
  
