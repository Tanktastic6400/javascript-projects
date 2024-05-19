
const input = require('readline-sync');
let name = Number(input.question("Enter the first number that you want to add: "));
let num2 = Number(input.question("Enter the second number you want to add: "));

console.log("Your total is: ", name + num2);
console.log("Sorry your actual total is: ", name + num2);