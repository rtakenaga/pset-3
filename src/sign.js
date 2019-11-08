const readlineSync = require("readline-sync");

const number = Number(readlineSync.question("\nEnter a number: "));

if (!Number.isInteger(number)){
  console.log("\nInvaild\n")

}else if (number < 0 ){
  console.log("\nNegative.\n")

} else if (number > 0){
  console.log("\nPositive.\n")

}else if (number == 0){
  console.log("\nZero.\n")

}else if (number < (Number.MIN_SAFE_INTEGER)){
  console.log("\nInvaild.\n")

}else if (number > (Number.MAX_SAFE_INTEGER)){
  console.log("\nInvaild.\n")

}
