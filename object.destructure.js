//?destructure
// const laptop1 = {
//   name: "Mac",
//   brand: "apple",
// };
//object ko opposite => only key rakhne
// const { name, brand } = laptop1;
// console.log(name, brand);

//?double destructure
// const laptop2 = {
//   name: "Mac",
//   brand: "apple",
//   variant: {
//     color1: "white",
//     color2: "black",
//   },
// };

// const {
//   name,
//   brand,
//   variant: { color1, color2 },//double destructure
// } = laptop2;

// console.log(color1, color2);

const firstName = "subu";
const student1 = {
  firstName: "sona",
  lastName: "rai",
  address: {
    temporary: "ktm",
    permanent: "lalitpur",
  },
};
const {
  firstName: fname, //rename key
  lastName,
  address: { temporary, permanent },
} = student1;

console.log(firstName);
console.log(fname);
