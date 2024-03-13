//loop
//iteration=> repetition
//for , while,do..while
//1.for
//syntax :
// for(initial value;condition;increment/decrement){
//     ..code
// }

// for (let i = 0; i <= 3; i++) {
//   console.log("hi", i);
// }
// for (let i = 1; i <= 10; i++) {
//   console.log(i);
// }
// for (let i = 10; i >= 1; i--) {
//   console.log(i);
// }
// for (let i = 12; i <= 24; i++) {
//   console.log(i);
// }
// for (let i = 100; i >= 50; i--) {
//   console.log(i);
// }
//even
// for (let i = 100; i >= 50; i=i-2) {
//   console.log(i);
// }
// for (let i = 100; i >= 50; i--) {
//   let rem = i % 2;
//   if (rem === 0) {
//     console.log(i);
//   }
// }
// for (let i = 30; i <= 100; i++) {
//   let rem = i % 2;
//   if (rem === 0) {
//     console.log(`${i} is even`);
//   } else {
//     console.log(`${i} is odd `);
//   }
// }
//WAP to print sum of numbers from 1 to 10
// let sum = 0;
// for (let i = 1; i <= 10; i++) {
//   sum = sum + i;
// }
// console.log(sum);
// let product = 1;
// for (let i = 1; i <= 5; i++) {
//   product = product * i;
// }
// console.log(product);

let product1 = 1;
for (let i = 5; i >= 1; i--) {
  product1 = product1 * i;
}
console.log(product1);
