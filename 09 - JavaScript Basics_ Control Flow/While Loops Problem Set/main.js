/* Print all numbers between - 10 and 19
Print all even numbers between 10 and 40
Print all odd numbers between 300 and 333
Print all numbers divisible by 5 AND between 5 av 50
 */

// All numbers between -10 and 19

let num1 = -10;
console.log('All numbers between -10 and 19:')
while (num1 < 20) {
  console.log(num1);
  num1++;
}

// All even numbers between 10 and 40

let num2 = 10;
console.log('All even numbers between 10 and 40:')
while (num2 <= 40) {
  console.log(num2);
  num2 += 2;
}

// All odd numbers between 300 and 333

let num3 = 301;
console.log('All odd numbers between 300 and 333:')
while(num3 <= 333) {
  console.log(num3);
  num3 += 2;
}

// All numbers divisible by 5 AND between 5 and 50
let num4 = 5;
console.log('All numbers divisible by 5 AND between 5 and 50');
while(num4 <= 50) {
  if (num4 % 5 === 0 && num4 % 3 === 0) {
  console.log(num4);
  }
  num4++;
}