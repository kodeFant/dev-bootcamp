//create secretNumber
var secretNumber = 4;
//ask user gor guess
var stringGuess = prompt("Guess a number");
var guess = Number(stringGuess);

//check guess
if (guess === secretNumber) {
  alert("YOU GOT IT RIGHT!!");
} 
//otherwise, check if higher
else if (guess > secretNumber) {
  alert("Too high. Guess again!")
} else {
  alert("Too low. Guess again!")
}