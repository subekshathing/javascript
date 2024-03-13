//?Write a function that takes a number and prints value from 0 to that number (use while loop).
// function inputNum(num) {
//   let i = 0;
//   while (i > num) {
//     result = i;
//     i++;
//   }
//   return result;
// }

// inputNum(4);
//?WAF that calculates the given number is prime or not.
// let num = 9;
// let count = 0;
// for (let i = 1; i <= num; i++) {
//   let rem = num % i;
//   if (rem === 0) {
//     count = count + 1;
//   }
// }

// if (count == 2) {
//   console.log("prime");
// } else {
//   console.log("not");
// }

// let primeNum = (num) => {
//   let count = 0;
//   for (let i = 1; i <= num; i++) {
//     let rem = num % i;
//     if (rem === 0) {
//       count = count + 1;
//     }
//   }

//   if (count == 2) {
//     result = "prime";
//     // console.log("prime");
//   } else {
//     result = "not";
//     // console.log("not");
//   }
//   return result;
// };

// const value = primeNum(3);
// console.log(value);

// ? WAF that takes "Bearer abcd12345" as argument and return "abcd12345"

function extractToken(inputString) {
  // Check if the input string starts with "Bearer "
  if (inputString.startsWith("Bearer ")) {
    // If yes, extract the token part
    return inputString.substring(7);
  }
  //else {
  //   // If not, return null or handle the error accordingly
  //   return null;
  // }
}

// // Example usage:
const inputStr = "Bearer abcd12345";
const token = extractToken(inputStr);
console.log(token);
