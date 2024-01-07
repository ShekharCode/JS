let rand = Math.floor(Math.random() * 10);
console.log(rand);
let tries = 0;
let guess = prompt("Guess a number: ");
while (guess != rand) {
  tries++;
  if (guess > rand) {
    console.log("You guessed greater than");
  } else {
    console.log("You guesses lower than");
  }
  guess = prompt("Guess a number: ");
}
console.log("You guessed correct and you won worth is $", 10 - tries);
