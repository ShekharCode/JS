//Array methods

//toString()
let num = [10, 20, 30];
let a = num.toString();
console.log(a, typeof a);

//join()
let b = num.join("-");
console.log(b, typeof b);

//pop()
let num1 = [1, 2, 3, 4, 5];
c = num1.pop(); //it updates the original array  and returns the popped element
console.log(c);
console.log(num1);

//push()
let num2 = [10, 20, 30, 40, 50];
let d = num2.push(60); //updates the original array and returns the new array length
console.log(d);
console.log(num2);

//shift()
let num3 = [10, 20, 30, 40, 50];
let e = num3.shift(); //remove an element the start of the array
console.log(e);
console.log(num3);

//unshift()
let num4 = [10, 20, 30, 40, 50];
let f = num4.unshift(60); // adds the element and returns the length of modified array
console.log(f);
console.log(num4);
