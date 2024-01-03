//length
let firstName = "harry";
console.log(firstName.length); //-> property

let lastName = "Ra'ja";
console.log(lastName);
console.log(lastName.length);

//toUpperCase and toLowerCase
let wish = "happy birthday Rajesh";
console.log(wish.toUpperCase()); //->function
console.log(wish.toLowerCase());

//slice
let college = "IITISM";
console.log(college.slice(2, 4));
console.log(college.slice(3));
console.log(college.slice());

//replace
console.log(college.replace("ISM", "Dhanbad"));

//concat
console.log(firstName.concat(lastName));

//trim
let to_trim = "     Raja    ";
console.log(to_trim.trim());

//access the elements in the string
let frnd = "Sreeleela";
for (let i = 0; i < frnd.length; i++) {
  console.log(frnd[i]);
}
frnd[1] = "a"; //this is not possible
console.log(frnd);
