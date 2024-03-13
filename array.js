//?array=> object data type
// c=>collection of same data type
//js=>collection of any data type

// const studentList = ["prithvi", 12, true, null, undefined];
// console.log(typeof studentList, studentList);

//?we can acccess values in array using index
//index always starts from
// console.log(studentList[0]);
// console.log(studentList[3]);
// console.log(studentList[8]);

//?array length
// console.log(studentList.length);

// const carBrands = ["Tesla", "BMW", "Thar", "Hyundai", "Toyota"];
// for (let i = 0; i <= carBrands.length - 1; i++) {
//   console.log(carBrands[i]);
// }

//?****************array methods***********
//?push => adds element to end of array

// const studentList = ["Prithvi"];
// studentList.push("sona");
// studentList.push("rina", "sumitra");
// console.log(studentList);

//?pop=> removes last items from array
// studentList.pop();
// console.log(studentList);

//?unshift=> add items to start of array
// const studentList = ["Prithvi", "rina"];
// studentList.unshift("sona", "ram");//can add multiple items
// console.log(studentList);

//?shift=>removes item from strat of array
// const studentList = ["Prithvi", "rina"];
// studentList.shift(); //removes one item
// console.log(studentList);

//?map =>holds arrow function that has item,index,self as a parameters and return new array
//use to modify array elements/items and obtain new array
//original array and return array has same length
// const scores = [23, 45, 6, 7, 4];
// scores.map((item, index, self) => {
//   console.log(item, index, self);
// });

//newScores=[]
// const newScores = scores.map((item, index, self) => {
//   let newScore = item + 10;
//   return newScore;
// });
// console.log(scores);
// console.log(newScores); //same length as original array

// const newList = scores.map((item, index, self) => {
//   let newScore = item - 10;
//   console.log(newScore);
//   return newScore;
// });
// console.log(newList);

// const newList = scores.map((item, index, self) => item + 10);
// console.log(newList);

// const nameList = ["Prithi", "Rina", "Sona"];
// let newName = nameList.map((item, index, self) => {
//   let newItem = item.toLocaleLowerCase();
//   return newItem;
//   //   console.log(newItem);
// });
// console.log(newName);

// const nameList = ["Prithi", "Rina", "Sona"];
// let newName = nameList.map((item, index, self) => {
//   if (item === "Rina") {
//     return item;
//   }
//   let newItem = item.toLocaleLowerCase();
//   return newItem;
//   //   console.log(newItem);
// });
// console.log(newName);

//?find=>first matching(only one) item return garxa on the basis of index of array, filter le sabai return garxa as a array based on condition

// const scores = [2, 4, 5, 7, 8, 9, 11, 23, 17];
// const newScore = scores.find((item) => {
//   if (item > 10) {
//     return item;
//   }
// });
// console.log(newScore);

//push,pop,map,filter,find
//?push
// const nations = ["Nepal", "India", "Chaina"];
// nations.push("Thailand");
// console.log(nations);

//?pop
// nations.pop();
// console.log(nations);

//?map
const prices = [100, 30, 50, 80];
// const newPrice = prices.map((item) => {
//   const newItem = item - 20;
//   return newItem;
// });
// console.log(newPrice);

// const newPrice = prices.map((item) => {
//   if (item === 30) {
//     let newItem = item + 100;
//     return newItem;
//   } else {
//     return item;
//   }
// });
// console.log(newPrice);

const studentData = [
  {
    name: "A",
    score: 85,
  },
  {
    name: "B",
    score: 91,
  },
  {
    name: "C",
    score: 75,
  },
];
// const newStudentData = studentData.map((item) => {
//   let newScore = item.score + 5;
//   let newItem = { ...item, score: newScore };
//   return newItem;
// });
// console.log(newStudentData);

// const newStudent = studentData.filter((item) => {
//   if (item.score > 80) {
//     return item;
//   }
// });
// console.log(newStudent);

//?sort=> dictionary order
// const nameList = ["Nepal", "India", "America", "Australia"];
// nameList.sort();
// console.log(nameList);

const nums = [1, 3, 22, 4, 555, 111, 233, 5677];
// nums.sort();
// console.log(nums);

//a-b=> ascending sort
//b-a=> descending sort

// nums.sort((a, b) => {
//   return a - b;
// });
// console.log(nums);

// nums.sort((a, b) => {
//   return b - a;
// });
// console.log(nums);

//aray of words
// const words = ["spray", "elite", "exuberant", "destruction", "present"];

// const newWord = words.filter((item) => {
//   if (item.length > 6) {
//     return item;
//   }
// });
// const newWord = words.filter((item) => item.length > 6);
// console.log(newWord);

// const fName="sona" //["s","o","n","a"]

//?reduce

const scores = [45, 55, 65, 72];
// let sum = 0;
// scores.map((item) => {
//   sum = sum + item;
// });
// console.log(sum);

// const totalSum = scores.reduce((sum, item) => {
//   sum = sum + item;
//   return sum;
// }, 0);
// console.log(totalSum);

let values = [10, 25, 35, 5];
//calculate total value by multiplying each other

const totalProduct = values.reduce((mul, item) => {
  mul = mul * item;
  return mul;
}, 1);
console.log(totalProduct);
