let num = [11, 12, 13, 14, 15];

for (let i = 1; i <= num.length; i++) {
  console.log(num[i - 1]);
}

// for each - . calls  a function,once for each array element
num.forEach((element) => {
  console.log(element * element);
});

//Array.from
let arr = Array.from("Harry");
console.log(arr);

// for of
for (let item of num) {
  console.log(item);
}

//for in
for (let i in num) {
  console.log(i, num[i]);
}
