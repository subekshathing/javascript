//?short circuit => or ma euta true vaye paxi remaining check gardaina, and ma euta false vayepaxi aru check gardaina
// let c1 = true;
// let c2 = true;
// let c3 = false;
// let c4 = true;

// console.log(c1 || c2 || c3 || c4);
// console.log(c1 && c2 && c3 && c4);

//?conditional
//if else
//syntax
// if(condition){
//code
// }
// else{
//code
// }

// ?let x = 3;
// let y = 6;

// if (x > y) {
//   console.log("x is greater");
// } else {
//   console.log("y is greater");
// }

// let x = 40;
// if (x % 2 === 0) {
//   console.log(`${x} is even`);
// } else {
//   console.log(`${x} is odd`);
// }
// let userInput1 = prompt("Please enter a number:");
// let number1 = parseFloat(userInput1);
// let userInput2 = prompt("Please enter a number:");
// let number2 = parseFloat(userInput2);

// if (number1 < number2) {
//   console.log("greater");
// } else if (number1 > number2) {
//   console.log("small");
// } else {
//   console.log("equal");
// }

let x = 6;
let y = 8;
let z = 3;

if (x > y && x > z) {
  console.log("x is greater");
} else if (y > x && y > z) {
  //else if(y>z)
  console.log("y is greater");
} else if (z > x && z > y) {
  console.log("z is greater");
}
