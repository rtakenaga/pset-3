const readlineSync = require("readline-sync");

const MIN = 0.01;
const MAX = 0.99;

//Questions
const amount = Number(readlineSync.question("\nEnter a dollar amount: "));

quarter = 0.25
dime = 0.1
nickel = 0.05
penny = 0.01

//Tests the number and gives a different result depending on the number
if (Number.isNaN(amount)) {
    console.log("Invalid");
} else if (amount < MIN || amount > MAX) {
    console.log("Invalid");
} else {

    let Quarters = Math.floor(amount/quarter);
    let amount1 = amount % quarter;
    let Dimes = Math.floor(amount1/dime);
    let amount2 = amount1 % dime;
    let Nickels = Math.floor(amount2/nickel);
    let amount3 = amount2 % nickel;
    let Pennies = Math.ceil(amount3/penny);

    console.log("\n" + Quarters + " quarters, " + Dimes + " dimes, " + Nickels + " nickels, and " + Pennies + " pennies." );
}
