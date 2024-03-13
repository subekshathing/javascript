//?comparision => we need at least two entity to compare
//comparision operator
//? ==, ===, !=, !==, <, >, <=, >=,
// == weak comparision => only checks value
// === strong/stict comparision => both checks value and datatype

// let x = "2500";
// let y = 2500;

// let isEqual = x == y;
// console.log(isEqual);

// let a = "hello";
// let b = "hello";
// console.log(a === b);

// console.log(a != b);
// console.log(x !== y);

// console.log("5" === 5);
// console.log("5" == 5);
// console.log(5 !== 10);
// console.log(100 > 10);
// console.log(100 > 100);
// console.log(100 >= 100);
// console.log(5 < 10);
// console.log("Dinesh" === "dinesh");
// let x = "hello";
// console.log(Number(x));

let a = 2;
let b = -3;
let c = 5;
let d = 10;
let e = 9;

console.log(a > b && c <= d);
console.log(a + b < c || d * a >= c);
console.log((a ** c === d && d === e + a - 1) || d % e !== 1);
console.log(2 ** a + b > d || c - d > b);

let isEarthRound = true;
console.log(!isEarthRound);
