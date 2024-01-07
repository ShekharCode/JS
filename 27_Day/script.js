alert("Enter a number");
let a = prompt("Enter a number", "5678");

a = Number.parseInt(a);
alert("You entered a of type " + typeof a);

let write = confirm("Do you want to write it to page");

if (write) {
  document.write(a);
} else {
  document.write("Please allow me to write");
}
