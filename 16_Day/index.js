let marks = [91, 56, 67, 23, 87, 98, "not present"];
console.log(marks);
for (let i = 0; i < marks.length; i++) {
  console.log(marks[i]);
}
console.log(marks[7]); //out of index values are undefined
marks[7] = 54; //adding the new element
marks[4] = 28; //changing the existing element -> mutable
console.log(marks);
console.log(typeof marks);
