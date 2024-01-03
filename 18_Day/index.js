// More javascipt array methods

//delete operator
let num = [10, 20, 30, 40, 50];
console.log(num.length);
delete num[1]; //it doesnot alter the length of the array
console.log(num);
console.log(num.length);

// concat()
let num1 = [10, 20, 30];
let num2 = [40, 50, 60];
let num3 = [70, 80, 90];
let concated_num = num1.concat(num2, num3); // it concated to a new array but it doesn't change existing array
console.log(concated_num);
console.log(num1, num2, num3);

//sort()
num = [50, 30, 10, 20];
num.sort(); // it sort the alphabetically and modifies the original array
console.log(num);

// sort with compare
let compare = (a, b) => {
  return b - a;
};
num = [50, 30, 10, 20];
num.sort(compare);
console.log(num);

//reverse
num = [10, 20, 30, 40, 50];
num.reverse();
console.log(num);

//splice
num = [10, 20, 30, 40, 50, 60];
let deleted_arrray = num.splice(2, 3, 2020, 2021, 2022, 2023); //it returns the the deleted array elements and modifies the array
console.log(deleted_arrray, typeof deleted_arrray);
console.log(num);

//slice
num = [10, 20, 30, 40, 50, 60];
let sliced = num.slice(2, 5); //it slices the array from start index and doesn't modify the array
console.log(sliced);
