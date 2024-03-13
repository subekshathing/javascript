//? Create an array called friendsList and add your friends name. Print out your friend's name one by one.
// let friendList = ["sona", "rina", "subu", "jivana"];
// console.log(friendList[0]);
// console.log(friendList[1]);
// console.log(friendList[2]);
// console.log(friendList[3]);

//? Create an array called favourite sportsPerson and use a for loop to print the player's name.
let sportsPerson = ["Ronaldo", "Messi", "Neymar", "Mbappe"];
// for (let i = 0; i <= sportsPerson.length - 1; i++) {
//   console.log(sportsPerson[i]);
// }
// sportsPerson.forEach((item, index, self) => {
//foreach() new array banaudaina
//   console.log(item);
// });

//? Create an array called myFavourite actors and print out who is your best actor among all actors.
// const myFavourite = ["Sarukh", "Rajesh", "Downy"];
// console.log(`${myFavourite[2]} is my best actor among all actors`);

//? Make an array of numbers that double the items.
// let numList = [2, 4, 6, 8, 9];
// let newNum = numList.map((item, index, self) => {
//   let newItem = item * 2;
//   return newItem;
// });
// console.log(newNum);
//? Make an array of numbers and print whether the numbers are odd or even.

// const oddEven = (num) => {
//   let rem = num % 2;
//   let result;
//   if (rem === 0) {
//     result = "even";
//   } else {
//     result = "odd";
//   }
//   return result;
// };
// let numberList = [2, 3, 4, 5, 9];

// numberList.forEach((item, index, self) => {
//   const result = oddEven(item);
//   console.log(`${item} is ${result}`);
// });

// for (let i = 0; i <= numberList.length - 1; i++) {
//   let rem = numberList[i] % 2;
//   if (rem === 0) {
//     console.log("even");
//   } else {
//     console.log("odd");
//   }
// }

//? Create an array called laptopPriceList and run map,filter, find, slice,splice,every,some,findIndex,reverse on it.
let laptopPriceList = [2000, 50000, 27000, 60000];
//map
// laptopPriceList.map((item, index, self) => {
//   let newItem = item + item * 0.01;
//   console.log(newItem);
// });
//filter
// laptopPriceList.filter((item) => {
//   if (item > 30000) {
//     console.log(item);
//   }
// });
// laptopPriceList.sort();
// console.log(laptopPriceList);
//? There is array called laptopBrands = [“Dell”,”Asus”,”Acer”,”Hp”],
// ?	Run map on it and print all elements
// let laptopBrands = ["Dell", "Asus", "Acer", "Hp"];
// laptopBrands.map((item, index, self) => {
//   console.log(item);
// });

// ?	Filter out Hp only
let laptopBrands = ["Dell", "Asus", "Acer", "Hp"];
// let newLapto = laptopBrands.filter((item, index, self) => {
//   if (item === "Hp") {
//     return item;
//   }
// });
// console.log(newLapto);
// ?	Use slice,splice, sort,reverse on this array.
// console.log(laptopBrands.slice(2));
// console.log(laptopBrands.slice(-1));
// console.log(laptopBrands.slice(2, -1));
// console.log(laptopBrands.slice());

// laptopBrands.splice(4, 2, "mac");
// console.log(laptopBrands);

// laptopBrands.sort();
// laptopBrands.reverse();
// console.log(laptopBrands);

//?filter=> filters out values from array not for changing the value in array
//?returned array has max probability of having different sizes
//?returns array
// let numberList = [-8, 2, 3, -5, 4, 5, 9];
// const newNum = numberList.filter((item, index, self) => {
//   if (item > 0) {
//     return item;
//   }
// });
// console.log(newNum);

// const oddEven = (num) => {
//   let rem = num % 2;
//   let result;
//   if (rem === 0) {
//     result = "even";
//   }
//   return result;
// };
const scoreList = [25, 26, 78, 79, 35, 45, 47, 55];
// get an array with even scores

// const newScore = scoreList.filter((item, index, self) => {
//   const result = oddEven(item);
//   return result; //truthy value  return garxa
// });
// console.log(newScore);

//falsy value=> in JS  0,-0,false,null,undefined(  bahek sabai truly value)

let laptopList = [
  {
    name: "TUF F15",
    brand: "asus",
    price: 1044,
  },
  {
    name: "GF63",
    brand: "msi",
    price: 900,
  },
  {
    name: "macbook air m2",
    brand: "apple",
    price: 1400,
  },
  {
    name: "nitro",
    brand: "acer",
    price: 800,
  },

  {
    name: "inspiron 55",
    brand: "dell",
    price: 700,
  },
];

// const newLaptop = laptopList.map((item, index, self) => {
//   let newItem = item.price + item.price * 0.1;
//   item.price = newItem;
//   return item;
// });
// console.log(newLaptop);
// ? due to sudden rise in tax, add 10% to the price of each laptop
// const newLaptop = laptopList.map((item, index, self) => {
//   let newPrice = item.price + item.price * 0.1;
//   let newItem = {
//     ...item,
//     price: newPrice,
//   };
//   return newItem;
// });
// console.log(newLaptop);
// ? decrease price of each laptop by 20 percent
// const newLaptopList = laptopList.map((item, index, self) => {
//   let newPrice = item.price - item.price * 0.2;
//   let newItem = { ...item, price: newPrice };
//   return newItem;
// });
// console.log(newLaptopList);
// ? remove laptops whose price is greater than 1000
// laptopList.filter((item) => {
//   if (item.price < =1000) {
//     console.log(item);
//   }
// });
// ? remove laptops whose brand is apple
// laptopList.filter((item) => {
//   if (item.brand !== "apple") {
//     console.log(item);
//   }
// });
// ? increase price of asus laptop by 5%
laptopList.map((item) => {
  if (item.brand === "asus") {
    item.price = item.price + item.price * 0.05;
  }
  console.log(item);
});
