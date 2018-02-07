const isEven = (num) => {
  return num % 2 === 0;
}

/* const factorial = (num) => {
  if (num === 0) {
    return 1;
  }
  let fact = num;
  for (i = num - 1; i >= 1; i--) {
    fact *= i;
  }
  return fact;
} */

const factorial = (num) => {
  let fact = 1;
  for (let i = 2; i <= num; i++) {
    fact *= i;
  }
  return fact;
}

const kebabToSnake = (str) => {
  const snake = str.replace(/-/g, "_")
  return snake;
}