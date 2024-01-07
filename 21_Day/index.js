// Chapter - 5 - PS

/*Question -1 
let arr = [1, 2, 3, 4, 5, 6, 7, 8];
let a = prompt("Enter a number : ");
a = Number.parseInt(a);
arr.push(a);
console.log(arr);
*/

/*Quesstion - 2
let arr = [1, 2, 3];
let a;
do {
  a = prompt("Enter a number: ");
  a = Number.parseInt(a);
  arr.push(a);
} while (a != 0);
console.log(arr);
*/

/*Question - 3
let arr = [10, 3, 20, 5, 6, 60];
const filter_func = (a) => {
  if (a % 10 == 0) {
    return a;
  }
};
let a = arr.filter(filter_func);
console.log(a);
*/

/*Question - 4
let arr = [1, 2, 3, 4, 5];
let a = arr.map((x) => {
  return x * x;
});
console.log(a);
*/

/*Question - 5 
let arr = [1, 2, 3, 4, 5, 6];
let n = arr.reduce((x1, x2) => {
  return x1 * x2;
});
console.log(n);
*/
