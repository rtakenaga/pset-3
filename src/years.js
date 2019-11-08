const readlineSync = require("readline-sync");

const min = 0;
const max = Number.MAX_SAFE_INTEGER;

const year = Number(readlineSync.question("\nEnter a year: "));

    if (Number.isNaN(year)) {
    console.log("\nInvalid.")
  } else if (year < min || year > max) {
    console.log("\nInvalid.")

  } else if (year % 4 == 0) {
    console.log("\n" + year + " is a leap year.")

  } else {
    console.log("\n" + year + " is not a leap year.")
    //If the year is not divisible by 4, it is not a leap year 
  }
