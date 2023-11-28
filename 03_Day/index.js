// let vs var vs const in JS

// var is a globally scoped while let & const are block scoped
var a = 45;

{
  let a = "Raja";
  console.log(a);
}
console.log(a);

//var can be updated & redeclared within its scope
var b = 56;
var b = "Raja";

console.log(b);

//let can be updated but not re-declared
let c = "Hyderabad";
c = "Mumbai";
console.log(c);

//const can neither be updated not re-declared
const author = "Raja";

// var variables are intialised with undefined whereas let and const varibles are not initialised
var d;
let d2;
console.log(d);
console.log(d2);

//const variable must be initialised during declaration unlike let and var
const e = 45;
