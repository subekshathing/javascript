//?2.Check if input variable is a number or not

// let x = 3;
// if (typeof x === "number") {
//   console.log("input variable is number");
// } else {
//   console.log("input variable is not a number");
// }

//? 5.Perform arithmetic operation based on the option provided. Set two variables with numbers. Create another variable called “option” which can be add/subtract/multiply/divide/power.
// Based upon the value of the option. Perform appropriate operation.
// e.g. if option is “add”, perform num1+num2
let num1 = 5;
let num2 = 8;

let option = "sum";

if (option === "sum") {
  console.log(`sum is ${num1 + num2}`);
} else if (option === "sub") {
  console.log(`sub is ${num1 - num2}`);
} else if (option === "mul") {
  console.log(`mul is ${num1 * num2}`);
} else if (option === "div") {
  console.log(`div is ${num1 / num2}`);
} else if (option === "power") {
  console.log(`power is ${Math.pow(num1, num2)}`);
} else {
  console.log("invalid option");
}
// let x = 4;
// let y = 9;
// let option = "multiply";

// let result;
// switch (option) {
//   case "add":
//     result = x + y;
//     break;
//   case "subtract":
//     result = x - y;
//     break;
//   case "multiply":
//     result = x * y;
//     break;
//   case "divide":
//     result = x / y;
//     break;
//   case "power":
//     result = Math.pow(x, y);
//     break;
//   default:
//     console.log("invalid option");
// }

// console.log(`Result of ${option}: ${result}`);

//?6.Find grades for student marks.
// If the mark is greater than or equal to 90, the grade is “A plus”.
// If the mark is greater than or equal to 80,the grade is “A”.
//  Grade “B”  from marks greater than equal to 70.
// “C” for marks greater than equal to 60.
// “F” for marks  less than 60.

// let marks = 60;
// if (marks >= 90) {
//   console.log("A plus");
// } else if (marks >= 80) {
//   console.log("A");
// } else if (marks >= 70) {
//   console.log("B");
// } else if (marks >= 60) {
//   console.log("C");
// } else {
//   console.log("F");
// }
