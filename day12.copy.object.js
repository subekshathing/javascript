//object copy

const laptop1 = {
  name: "Mac",
  brand: "apple",
  storage: {
    ram: 8,
    ssd: 56,
  },
};
//copy by reference=>object bandaina address matra copy hunxa(shallow copy)
// const laptop2 = laptop1;
// console.log(laptop2);
// laptop2.name = "dell";
// console.log(laptop2);
// console.log(laptop1);

//spread operator{...}
const laptop3 = { ...laptop1 }; //new object banxa, value copy

laptop3.storage.ram = 4;
// console.log(laptop3);
// console.log(laptop1); //nested object ko value copy hudaina address matra hunxa

//structuredClone(deep copy)
const laptop4 = structuredClone(laptop1); //nested object ko pani value copy garera naya object banauxa
laptop4.storage.ram = 12;
console.log(laptop4);
console.log(laptop1);
