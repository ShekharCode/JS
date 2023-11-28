//Primitive and Objects in JS

//Primitive Data types are a set of basic data types in JS
//NN BB SS U
let a = null; // explicitly saying nothing is present
let b = 345;
let c = true; // can also be false
let d = BigInt("567") + BigInt("3");
let e = "Raja";
let f = Symbol("I am a nice symbol");
let g = undefined;

console.log(a, b, c, d, e, f, g);

// to check the type of the varible
console.log(typeof d);

// Non - Primitive Data type = Objects in JS ->  key-value pair
const items = {
  Maths: 45,
  Physics: 34,
  Chemistry: 76,
  Botany: undefined,
};
console.log(items["Maths"], items["Botany"], items["Zoology"]);
