

// 4
[
	{
		"id": "0001",
		"type": "donut",
		"name": "Cake",
		"ppu": 0.55,
		"batters":
		{
			"batter":
				[
					{ "id": "1001", "type": "Regular" },
					{ "id": "1002", "type": "Chocolate" },
					{ "id": "1003", "type": "Blueberry" },
					{ "id": "1004", "type": "Devil's Food" }
				]
		},
		"topping":
			[
				{ "id": "5001", "type": "None" },
				{ "id": "5002", "type": "Glazed" },
				{ "id": "5005", "type": "Sugar" },
				{ "id": "5007", "type": "Powdered Sugar" },
				{ "id": "5006", "type": "Chocolate with Sprinkles" },
				{ "id": "5003", "type": "Chocolate" },
				{ "id": "5004", "type": "Maple" }
			]
	},
	{
		"id": "0002",
		"type": "donut2",
		"name": "Raised",
		"ppu": 0.55,
		"batters":
		{
			"batter":
				[
					{ "id": "1001", "type": "Regular" }
				]
		},
		"topping":
			[
				{ "id": "5001", "type": "None" },
				{ "id": "5002", "type": "Glazed" },
				{ "id": "5005", "type": "Sugar" },
				{ "id": "5003", "type": "Chocolate" },
				{ "id": "5004", "type": "Maple" }
			]
	},
	{
		"id": "0003",
		"type": "donut3",
		"name": "Old Fashioned",
		"ppu": 0.55,
		"batters":
		{
			"batter":
				[
					{ "id": "1001", "type": "Regular" },
					{ "id": "1002", "type": "Chocolate" }
				]
		},
		"topping":
			[
				{ "id": "5001", "type": "None" },
				{ "id": "5002", "type": "Glazed" },
				{ "id": "5003", "type": "Chocolate" },
				{ "id": "5004", "type": "Maple" }
			]
	},
	{
		"id": "0004",
		"type": "donut1",
		"name": "Old Fashioned",
		"ppu": 0.55,
		"batters":
		{
			"batter":
				[
					{ "id": "1001", "type": "Regular" }
				]
		},
		"topping":
			[
				{ "id": "5001", "type": "None" },
				{ "id": "5002", "type": "Glazed" },
				{ "id": "5003", "type": "Chocolate" },
				{ "id": "5004", "type": "Maple" }
			]
	}
]
 1
function toppingChocolate(array) {
    let a = donuts.filter((value, index, arr) => {
        let topping = value.topping;
        for (let i = 0; i < topping.length; i++) {
            if (topping[i].type == "Chocolate"){
                console.log(value.type+":");
                console.log(value);
                return value;
            }
        }
    });
    console.log(a);
  }
  toppingChocolate(donuts);

console.log(toppingChocolate);


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


function convertToNumbers(sentence) {
    const words = sentence.split(" ");
    const convertedWords = words.map(word => {
      if (word.length <= 2) {
        return word; // Do not convert if word has 2 or fewer characters
      } else {
        const firstChar = word[0];
        const lastChar = word[word.length - 1];
        const middleChars = (word.length - 2).toString();
        return `${firstChar}${middleChars}${lastChar}`;
      }
    });
    return convertedWords.join(" ");
  }
  
  const sentence = "Every developer likes to mix kubernetes and javascript";
  const convertedSentence = convertToNumbers(sentence);
  console.log(convertedSentence);
  
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

// --or 11--
// function shortenWords(sentence) {
//   let words = sentence.split(' ');
//   let result = words.map(word => {
//     if (word.length > 3) {
//       return word.charAt(0) + (word.length - 2) + word.charAt(word.length - 1);
//     } else {
//       return word;
//     }
//   });
//   return result.join(' ');
// }
// let input = "Every developer likes to mix kubernetes and javascript";
// let output = shortenWords(input);
// console.log(output); // Output: "E3y d7r l3s to mix k8s and j8t"

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
// function makeNewObject(arrayName){
//     let newObject={};

// }


  
// ------Q 13-----//

// const employees = [
//   { name: "John", salary: 50000, department: "IT" },
//   { name: "Jane", salary: 60000, department: "HR" },
//   { name: "Bob", salary: 55000, department: "IT" },
//   { name: "Sophie", salary: 75000, department: "HR" },
//   { name: "Mike", salary: 65000, department: "IT" },
//   { name: "Emily", salary: 80000, department: "HR" },
//   { name: "David", salary: 70000, department: "IT" },
// ];

// // 2
// function propertyCounter(arrayName) {
//       let newObject = {};
//       let IT = arrayName.filter(value => value.department == "IT");
//       let HR = arrayName.filter(value => value.department == "HR");
//       let a = arrayName.salary;
//       let b = arrayName.salary;
//       newObject.IT = a;
//       newObject.HR = b;
//       return newObject 
//   }
//   console.log(propertyCounter(employees));

// function departWiseSalary(arr) {
//   let a = arr.filter(val => val.department === "IT").map(val => val.salary)
//   let b = arr.filter(val => val.department === "HR").map(val => val.salary)
//   let c = {IT:a,HR:b};
//   return c
// }
// console.log(departWiseSalary(employees));

// count the average salary of each department
// function averagePrice(employees) {
//       let a = 0;
//       let b = 0;
//       let c = 0;
//       let d = 0;
//       for (let i = 0; i < employees.length; i++) {
//           if (employees[i].department == "IT") {
//               a += employees[i].salary;
//               b++;
//               // console.log(a);
//           } else if (employees[i].department == "HR") {
//               c += employees[i].salary;
//               d++;
//               // console.log(c);
//           }
//       }
//       return { IT: a / b, HR: c / d }
//   }
//   let aveObject = averagePrice(employees);
//   console.log(aveObject);


//   ------------?---------------//
//when null and undefined it not give any error it will run
const obj = {
    a: {
      b: [
        { name: "Jenny" },
        { name: "Janu" },
        { name: "jenisha" }
      ]
    }
  };
  
  const names = obj?.a?.b?.map(item => item.name);
  console.log(names);
  
// 14
function groupDataByFirstLetter(strings) {
    const groupedData = {};
  
    strings.forEach((str1) => {
      const firstLetter = str1.charAt(0).toUpperCase();
      if (groupedData[firstLetter]) {
        groupedData[firstLetter].push(str1);
      } else {
        groupedData[firstLetter] = [str1];
      }
    });
  
    return groupedData;
  }
  
  const strings = [
    "Jeel",
    "Prakhar",
    "Bhakti",
    "Vansh",
    "Meghna",
    "Bhaumik",
    "Pujan",
    "Rudra",
    "Sachin",
    "Dhruval",
  ];
  const groupedData = groupDataByFirstLetter(strings);
  
  console.log(groupedData);

//   15
function flat(arr) {
    const flattened = [];
  
    arr.forEach((item) => {
      if (Array.isArray(item)) {
        flattened.push(...flat(item));
      } else {
        flattened.push(item);
      }
    });
  
    return flattened;
  }
  
  const nestedArray = [1, [2, [3, [4, 5], 6], 7], 8, [9, 10]];
  const flattenedArray = flat(nestedArray);
  
  console.log(flattenedArray);

//   ----with depth----//
function flat(arr, depth = 1) {
    const flattened = [];
  
    arr.forEach((item) => {
      if (Array.isArray(item) && depth > 0) {
        flattened.push(...flat(item, depth - 1));
      } else {
        flattened.push(item);
      }
    });
  
    return flattened;
  }
  
  const nestedArray = [1, [2, [3, [4, 5], 6], 7], 8, [9, 10]];
  const flattenedArray = flat(nestedArray, 2);
  
  console.log(flattenedArray);

  
  16
//   ----filter-----//
function myFilter(condition, array) {
    const filteredArray = [];
    for (let i = 0; i < array.length; i++) {
      if (condition(array[i])) {
        filteredArray.push(array[i]);
      }
    }
    return filteredArray;
  }

//   for ex=
const numbers = [1, 2, 3, 4, 5, 6];

// Filter even numbers
const filteredNumbers = myFilter((x) => x % 2 === 0, numbers);
console.log(filteredNumbers);  // Output: [2, 4, 6]

// Filter odd numbers
const filteredNumbers = myFilter((x) => x % 2 !== 0, numbers);
console.log(filteredNumbers);  // Output: [1, 3, 5]

17
// ----map----//
function myMap(transform, array) {
    const mappedArray = [];
    for (let i = 0; i < array.length; i++) {
      mappedArray.push(transform(array[i]));
    }
    return mappedArray;
  }

//   for ex=
const numbers = [1, 2, 3, 4, 5];

// Double each number
const doubledNumbers = myMap((x) => x * 2, numbers);
console.log(doubledNumbers);  // Output: [2, 4, 6, 8, 10]

// Square each number
const squaredNumbers = myMap((x) => x * x, numbers);
console.log(squaredNumbers);  // Output: [1, 4, 9, 16, 25]

18

  
