//object=> key value pair
//primitive data types
//string
//boolean
//number
//undefined
//null

//non-primitive=>collection of primitive datatypes
//object=> key value pair=>complex data structure
//key is also called property

// let student1 = {
//   firstName: "subu",
//   lastName: "rai",
//   age: 22,
//   perAdd: "hetauda",
//   temAdd: "ktm",
//   phone: 9876543210,
//   isMarried: false,
//   isGrad: true,
// };
// console.log(typeof student1,student1);
//CRUD operation
//?read opration=>using dot operator or square operator
//console.log(student1.age); //or console.log(student1["age"])
//console.log(student1["temAdd"]);

//{}=>scope,object create
//&=>ampersand

//?delete operation
// delete student1.temAdd;
// console.log(student1);

//?upsert=> update or insert

// const countryDetails = {
//   name: "Nepal",
//   population: "3cr",
//   states: 7,
//   isRepublic: true,
// };
//update
// countryDetails.states = 45;
// console.log(countryDetails);

//insert
// countryDetails.district = 77;
// console.log(countryDetails);

// const laptopDetails = {
//   name: "GF75",
//   brand: "MSI",
//   ram: 16,
//   ssd: 256,
//   display: "15.3",
//   graphics: "NVIDIA GeForce RTX 3060",
//   battery: "51 Whr",
//   processor: "i7 10750H",
// };
// ? display laptop name with battery capacity
// console.log(`${laptopDetails.name} has ${laptopDetails.battery} battery.`);

// ?change ram size to 18 gigs
// laptopDetails.ram = 18;
// console.log(laptopDetails);

// ?add another property called  memoryFrequency with 3200MHz value
// laptopDetails.memoryFrequency = "3200MHZ";
// console.log(laptopDetails);

// ? add another property called weight whose value is 3kg
// laptopDetails.weight = "3kg";
// console.log(laptopDetails);

// ? update ssd size by 300 GB
// laptopDetails.ssd = laptopDetails.ssd + 300;
// console.log(laptopDetails);

//?delete processor property

// delete laptopDetails.processor;
// console.log(laptopDetails);

// ?2.Create an object named myHouseDetails and add following properties
// numberOfRooms
// numberOfMembers
// colorOfHouse
// builtYear
// numberOfStorey

// const myHouseDetails = {
//   numberOfRooms: 9,
//   numberOfMembers: 10,
//   colorOfHouse: "green",
//   builtYear: 2001,
//   numberOfStorey: 3,
// };
// ?A.Delete numberOfMembers property
// delete myHouseDetails.numberOfMembers;
// console.log(myHouseDetails);

// ?B.Update numberOfRooms by new value
// myHouseDetails.numberOfRooms = 7;
// console.log(myHouseDetails);

// ?C.Add a  new property called estimatedPriceOfHouse
// myHouseDetails.estimatedPriceOfHouse = "10 million";
// console.log(myHouseDetails);

// D.Print out all properties on the console like “I have a green coloured house  with 9 rooms where 10 people are  living. The house is 3 storey and was built in 2011 with an estimated budget of 2 crores.”
// console.log(
//   `I have a ${myHouseDetails.colorOfHouse} colored house with ${myHouseDetails.numberOfRooms} rooms where ${myHouseDetails.numberOfMembers} people are living. The house is ${myHouseDetails.numberOfStorey} storey and was built in ${myHouseDetails.builtYear} with an estimated budget of ${myHouseDetails.estimatedPriceOfHouse}.`
// );
//***************************************************************************************
//?nested object
let myDetails = {
  firstName: "subu",
  lastName: "rai",
  age: 22,
  address: {
    perAdd: "hetauda",
    temAdd: "ktm",
  },
};
// myDetails.address.perAdd = "ktm";
// console.log(myDetails);

delete myDetails.address["temAdd"];
console.log(myDetails);
