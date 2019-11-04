const readlineSync = require("readline-sync");

const number = Number(readlineSync.question("Enter an integer: "));

if (Number.isNaN(number) || !Number.isInteger(number)||number < Number.MIN_SAFE_INTEGER || number > Number.MAX_SAFE_INTEGER){
  console.log("\nInvalid.");
}
else if ((number % 2) == 0){
  console.log("\nEven.");
}
else {
  console.log("\nOdd.");
}
