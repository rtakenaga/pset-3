const readlineSync = require("readline-sync");


const number1 = Number(readlineSync.question("\nEnter three numbers.\n"));
const number2 = Number(readlineSync.question(""));
const number3 = Number(readlineSync.question(""));

if (number1, number2, number3 < (Number.MIN_SAFE_INTEGER) || number1, number2, number3 > Number.MAX_SAFE_INTEGER) {
   console.log("\nInvalid.\n")

} else if (number1 == number2 & number2 == number3) {
      console.log("\nEqual.\n")
      //Tests the numbers to see if they are equal
} else if (number1 > number2 && number2 > number3) {
      console.log("\nStrictly decreasing.\n")
      //All numbers are less than each other in order
} else if (number1 < number2 && number2 < number3) {
      console.log("\nStrictly increasing.\n")
//All numbers are greater thatn each other in order
} else if (number1 >= number2 && number2 >= number3) {
      console.log("\nDecreasing.\n")
//Numbers may be eqaul or
} else if (number1 <= number2 && number2 <= number3) {
      console.log("\nIncreasing.\n")

} else if ((number1 >= number2 && number2 <= number3) || (number1 <= number2 && number2 >= number3)) {
      console.log("\nUnordered.\n")

} else {
      console.log("\nInvalid.\n")
}
