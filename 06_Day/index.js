// Operators and Expressions
// 1. Arithmetic operator -> +,-,*,/,**,%,++,--
let a = 45;
let b = 4;
console.log("a+b = ", a + b);
console.log("a-b = ", a - b);
console.log("a*b = ", a * b);
console.log("a/b = ", a / b);
console.log("a**b = ", a ** b);
console.log("a%b = ", a % b);
console.log("++a = ", ++a);
console.log("a++ = ", a++);
console.log("--a = ", --a);
console.log("a-- = ", a--);
console.log("a = ", a);
console.log("a-- = ", a--);

//2. Assignment Operator -> =,+=,-=,*=,/=,%=,**=
console.log((b += 10));

//3.Comparision operator-> ==,!=,===,!==,>,<,>=,<=,?
/* 
== -> equals value then return true else false
!= -> not equals value then return true else false
=== -> equals value and type
!== -> not equals value or not equals type
*/
let comp1 = 6;
let comp2 = "6";
console.log("comp1 == comp2 is ", comp1 == comp2);
console.log("comp1 != comp2 is ", comp1 != comp2);
console.log("comp1 === comp2 is ", comp1 === comp2);
console.log("comp1 !== comp2 is ", comp1 !== comp2);

//4 . Logical Operators -> &&, ||,!
let x = 5;
let y = 6;
console.log(x < y && x == 5);
console.log(x > y || x == 5);
console.log(!false);
