//array destucture
const nums = [11, 12, 44];
// const num1 = nums[0];
// const num2 = nums[1];
// const num3 = nums[2];
// console.log(num1, num2, num3);

// const [num1, nunm2, num3] = [11, 12, 44];
// console.log(num1, nunm2, num3);

// const [value, func] = [
//   3,
//   () => {
//     console.log("hello");
//   },
// ];
// console.log(value);
// func();

//?array copy
const scores = [25, 35, 45, 55];
//address copy
//const newScores=scores
// newScores[0]=20
// console.log(scores)

//spread operator
// let newScores = [...scores];
// newScores[0] = 5;
// console.log(newScores);

//?structuredClone
//?when array has objects  or array inside
// const studentData = [{ name: "A" }, { name: "B" }];
// const newStudent = structuredClone(studentData);
// newStudent[0].name = "Z";
// console.log(studentData);

//?reverse
// const marks = [3, 5, 67, 8, 6];
// marks.reverse();
// console.log(marks);

const students = ["sona", "rina", "jivana", "asha"];
//ascending order
students.sort();
console.log(students);

//descending order
students.sort().reverse();
console.log(students);
