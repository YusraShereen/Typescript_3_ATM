console.log('\n\n***************************\tWELCOME TO SIMPLE CALCULATOR*********************************\n\n');
var readlineSync = require('readline-sync');
var num1 = Number(readlineSync.question('\nPlease enter 1st number: '));
var num2 = Number(readlineSync.question('\nPlease enter 2nd number: '));
console.log('\n\nFor Addition press +\nFor Subtraction press -\nFor Multiplication press *\nFor division press /');
var op = readlineSync.question("\n\nPlease enter operator: ");
switch (op) {
    case "+":
        console.log("\n\nSum of numbers is : " + String(num1 + num2));
        break;
    case "-":
        console.log("\n\nDifference of numbers is : " + String(num1 - num2));
        break;
    case "*":
        console.log("\n\nProduct of numbers is : " + String(num1 * num2));
        break;
    case "/":
        console.log("\n\nQuotient of numbers is : " + String(num1 / num2));
        break;
    default:
        console.log("\n\nInvalid Operator!!!");
}
