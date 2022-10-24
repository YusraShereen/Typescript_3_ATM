console.log('\n\n***************************\tWELCOME TO SIMPLE CALCULATOR*********************************\n\n');
const readlineSync = require('readline-sync');

let num1: number= Number(readlineSync.question('\nPlease enter 1st number: '));
let num2: number = Number(readlineSync.question('\nPlease enter 2nd number: '));

console.log('\n\nFor Addition press +\nFor Subtraction press -\nFor Multiplication press *\nFor division press /');

let op:string = readlineSync.question("\n\nPlease enter operator: ");

switch(op)
{
  case "+":
    console.log("\n\nSum of numbers is : "+String(num1+num2));
    break;

  case "-":
    console.log("\n\nDifference of numbers is : "+String(num1-num2));
    break;

  case "*":
    console.log("\n\nProduct of numbers is : "+String(num1*num2));
    break;

  case "/":
    console.log("\n\nQuotient of numbers is : "+String(num1/num2));
    break;

  default:
    console.log("\n\nInvalid Operator!!!");
}