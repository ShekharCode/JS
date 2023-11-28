/*
for loop -> loop a block of code number of times
for in loop -> loops through the keys of an object
for of loop -> loops through the values of an object(iterable)
*/

// for loop in JS
for (let i = 0; i < 5; i++) {
  console.log(i);
}
let n = 6;
let sum = 0;
for (let i = 1; i <= n; i++) {
  sum += i;
}
console.log(sum);

// for-in loop
let obj = {
  Harish: 45,
  Raja: 78,
  Sony: 98,
};
for (let a in obj) {
  console.log("Marks of " + a + " is" + obj[a]);
}
// for-in loops alse work with arrays which will be discussed later in section

// for-of loop
for (let b of "Raja") {
  console.log(b);
}
