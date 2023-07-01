

// 4
// [
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

/ //1
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
const arr=[];
arr.filter(item1 =>item1.topping.filter(top=>topping.type===value));
J

//2
// const result = donuts.filter(donut => donut.batters.batter.some(batter => batter.type === 'Regular')
//  && donut.topping.some(topping => topping.type === 'Chocolate'));

//3
// const result = donuts.filter(donut => donut.topping.some(topping => topping.type === 'Chocolate' || topping.type === 'Sugar'));

//4
// const result = donuts.filter(donut => donut.ppu > 0.5);

//5
// const result = [].concat(...donuts.map(donut => donut.batters.batter));

//6
// const result = donuts.filter(donut => donut.batters.batter.length >= 2);

// console.log(result);


// --------Q 10--------//
// function FirstName(name) {
//     const words = name.split(" ");
//     const res = words.map(word => word[0].toUpperCase()).join("");
//     return res;
//   }
  
//   const name1 = "George Raymond Richard Martin";
//   const res = FirstName(name1);
//   console.log(res); // Output: "GRRM"

// let string="George Raymond Richard Martin";
// let result=string.split(" ").map((words)=>words.charAt(0)).join("").toUpperCase(0);
// console.log(result);


  
// function generateInitials(name) {
//     const words = name.split(" ");
//     const initials = words.map(word => word[0].toUpperCase()).join("");
//     return initials;
//   }
//   const name2 = "george raymond Richard Martin";
//   const initials2 = generateInitials(name2);
//   console.log(initials2); // Output: " GRRM"


//   ------ Q 11-------//


// function convertToNumbers(sentence) {
//     const words = sentence.split(" ");
//     const convertedWords = words.map(word => {
//       if (word.length <= 2) {
//         return word; // Do not convert if word has 2 or fewer characters
//       } else {
//         const firstChar = word[0];
//         const lastChar = word[word.length - 1];
//         const middleChars = (word.length - 2).toString();
//         return `${firstChar}${middleChars}${lastChar}`;
//       }
//     });
//     return convertedWords.join(" ");
//   }
  
//   const sentence = "Every developer likes to mix kubernetes and javascript";
//   const convertedSentence = convertToNumbers(sentence);
//   console.log(convertedSentence);
  
// //   -------Q 12--------//
// function convertToNumbers(sentence) {
//     const words = sentence.split(" ");
//     const convertedWords = [];
    
//     for (let i = 0; i < words.length; i++) {
//       const word = words[i];
      
//       if (word.length <= 2) {
//         convertedWords.push(word); // Do not convert if word has 2 or fewer characters
//       } else {
//         const firstChar = word[0];
//         const lastChar = word[word.length - 1];
//         const middleChars = (word.length - 2).toString();
//         const convertedWord = `${firstChar}${middleChars}${lastChar}`;
//         convertedWords.push(convertedWord);
//       }
//     }
    
//     return convertedWords.join(" ");
//   }
  
//   const sentence = "Every developer likes to mix kubernetes and javascript";
//   const convertedSentence = convertToNumbers(sentence);
//   console.log(convertedSentence);


// ----Q-12----//

// const products = [
//     { name: "Product 1", price: 20, category: "Electronics" },
//     { name: "Product 2", price: 30, category: "Clothes" },
//     { name: "Product 3", price: 40, category: "Electronics" },
//     { name: "Product 4", price: 50, category: "Clothes" },
//     { name: "Product 5", price: 60, category: "Clothes" },
//     { name: "Product 6", price: 70, category: "Electronics" },
//     { name: "Product 7", price: 80, category: "Clothes" },
//     { name: "Product 8", price: 90, category: "Electronics" },
//   ];
  
// function makeNewObject(arrayName) {
//     let newObject = {};
//     let Clothes = arrayName.filter(value => value.category == "Clothes");
//     let Electronics = arrayName.filter(value => value.category == "Electronics");
//     let a = Clothes.length;
//     let b = Electronics.length;
//     newObject.Clothes = a;
//     newObject.Electronics = b;
//     return newObject;
// }
// let newObj = makeNewObject(products);
// console.log(newObj);

//count the total average of each category price.
function makeNewObject(arrayName){
    let newObject={};

}
  

  



