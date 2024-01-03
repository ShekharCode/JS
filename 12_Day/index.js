/* PS - 1
const marks = {
  Harry: 98,
  rohan: 76,
  raja: 19,
};

for (let i = 0; i < Object.keys(marks).length; i++) {
  console.log(
    "The marks of " +
      Object.keys(marks)[i] +
      " are " +
      marks[Object.keys(marks)[i]]
  );
}
*/

/* PS-2
const marks = {
  Harry: 98,
  rohan: 76,
  raja: 19,
};

for (let key in marks) {
  console.log("The marks of " + key + " are " + marks[key]);
}
*/

/*PS-3
let cn = 45;
let i
while(i!=cn){
    console.log("Try again")
    i = prompt("Enter a number")
}
console.log("Answer is matched")
*/

/* PS-4
const mean = (a, b, c, d) => {
  return (a + b + c + d) / 4;
};
let ans = mean(10, 20, 30, 40);
console.log(ans);
*/
