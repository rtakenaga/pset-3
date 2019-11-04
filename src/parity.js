
const readlineSync = require("readline-sync");

const number = Number(readlineSync.question("\nEnter an integer: "));

if (Number.isNaN(number) || number > Number.MAX_SAFE_INTEGER || number < Number.MIN_SAFE_INTEGER){
  console.log("\nInvalid.");
}
else if ((number % 2) == 0){
  console.log("\nEven.");
}
else {
  console.log("\nOdd.");
}
