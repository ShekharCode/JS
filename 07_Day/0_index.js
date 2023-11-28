//Conditional Expressions
/*
if statement
if-else statement
if-elseif-else statement
*/
let a = prompt("Hey whats your age?");
console.log(typeof a);
a = Number.parseInt(a); // Converting the string to a number
console.log(typeof a);

if (a < 0) {
  alert("This is an invalid age");
} else if (a <= 9) {
  alert("You are a kid and you cannot think of driving itself");
} else if (a < 18 && a > 9) {
  alert("You are kid but can learn the basics");
} else {
  alert("You can drive");
}
