//hoisting=> pull up
// var a;
// console.log(a);

sayHello(); //due to hoisting this function is called
function sayHello() {
  console.log("hello");
}
//use let not var bcz there is hoisting issue=> human readable vayena
