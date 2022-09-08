const num = Number(prompt("Insira um número:"));

if (num % 2 === 0 && num % 3 === 0) {
  console.log(`O número ${num} é divisivel por 2 e por 3!`);
} else if (num % 2 === 0) {
  console.log(`O número ${num} é divisivel por 2!`);
  if (num % 3 === 0) {
    console.log(`O número ${num} é divisivel por 3!`);
  }
} else if (num % 3 === 0) {
  console.log(`O número ${num} é divisivel por 3!`);
} else {
    console.log(`O número ${num} não é divisivel por 2 nem por 3!`);
}
