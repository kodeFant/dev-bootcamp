var age = prompt("Hi there, what is your age?")

if (age < 0) {
  console.log('Error! Your age does not compute. You have not been born yet, and thus cannot enter the venue.')
} else if (age % Math.sqrt(age) === 0) {
  console.log("Perfect square!");
} else if (age % 2 !== 0) {
  console.log("Your age is odd")
} else if (age < 18) {
  console.log('Sorry, you are not old enough to enter the venue');
} else if (age < 21) {
  console.log('You can enter, but cannot drink');
} else if (age === 21) {
  console.log('happy 21st birthday!!')
} else {
  console.log('Come on in. You can drink')
}