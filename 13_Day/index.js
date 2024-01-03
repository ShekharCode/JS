//Strings
let firstName = 'Raja'; //Single - Quote
let lastName = "Raja"; //Double - Quote
console.log(firstName.length);
console.log(firstName[0]);
console.log(firstName[2]);
//Template literals
/*Template literals use backtics instead of quotes to define a string.*/

let boy1 = "Nithin";
let boy2 = "Vijay";
//Vijay is brother of Nithin
let sentence = `boy2 is a brother of boy1`;
console.log(sentence);
sentence = `${boy2} is a brother of ${boy1}`;
console.log(sentence);

//Escape Sequence characters
/*
\n -> new line 
\t -> tab
\r -> carriage return 
*/
let wish = 'Bana\'na';
console.log(wish);
