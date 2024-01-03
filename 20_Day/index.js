// map, filter, reduce

// map() -> creates a new array by performing some operation on each array element

let arr = [11, 12, 13, 14, 15];
arr.map((value, index, arr) => {
  console.log(value, index, arr);
});

let a = arr.map((_, ele) => {
  return _ + ele;
});
console.log(a);

// filter()
let b = arr.filter((a) => {
  if (a % 2 == 0) {
    return a;
  }
});
console.log(b);

//reduce
let c = arr.reduce((a, b) => {
  return a + b;
});
console.log(c);

const reduce_fn = (h1, h2) => {
  return h1 - h2;
};
let d = arr.reduce(reduce_fn);
console.log(d);
