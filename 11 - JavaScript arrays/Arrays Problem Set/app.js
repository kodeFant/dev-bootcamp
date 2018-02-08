const printReverse = (arr) => {
  for (let i = arr.length - 1; i >= 0;i--) {
    console.log(arr[i]);
  }
}
// Here, forEach is a bad solution
/* const isUniform = (arr) => {
  const first = arr[0];
  let not = 0;
  arr.forEach((num) => {
    if (num !== first) {
      not = 1;
    } 
  });
  if (not === 1) {
    return false;
  } else {
    return true;
  }
} */

const isUniform = (arr) => {
  const first = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== first) {
      return false;
    }
  }
  return true;
}

const sumArray = (arr) => {
  let sum = 0;
  arr.forEach((num) => {
    sum += num;
  });
  return sum;
}

const max = (arr) => {
  let top = 0;
  arr.forEach((num) => {
    if (num > top) {
      top = num;
    }
  });
  return top;
}