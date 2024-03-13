//hof=>higher order  function
//1.function returning function
//2.function which accepts another function as argument eg:map(()=>{}) in map function there is arrow function as am argument
//?2.eg:map,filter,find,
//callback function =>passed function as an argument
// const getSum = (x, y, callbacck) => {
//   const sum = x + y;
//   callbacck(sum);
// };

// getSum(2, 4, (value) => {
//   console.log(value);
// });
//or
// const getSum = (x, y, printValue) => {
//   const sum = x + y;
//   printValue(sum);
// };
// const printValue = (value) => {
//   console.log(value);
// };
// getSum(2, 4, printValue);

//?1.
// const getSum = (x, y) => {
//   return () => {
//     let sum = x + y;
//     return sum;
//   };
// };
// const func = getSum(2, 3);
// const result = func();
//  console.log(result)

//or.....
// const getSum = (x, y) => {
//   const calculateSum = () => {
//     let sum = x + y;
//     return sum;
//   };
//   return calculateSum;
// };
// const result = getSum(2, 3)();
// console.log(result);

//closure=> function with its lexical environment,

const getProduct = (num1) => {
  const doMultiply = (num2) => {
    let product = num1 * num2;
    return product;
  };
  return doMultiply;
};
const doMul = getProduct(5);
doMultiply(6);
console.log(doMul);
