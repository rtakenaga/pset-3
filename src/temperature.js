const readlineSync = require("readline-sync");

const temp = Number(readlineSync.question("\nEnter a temperature: "));
const scale = readlineSync.question("Enter a scale: ")

const fahrenheitFreezingPoint = 32;
const fahrenheitBoilingPoint = 212;
const celsiusFreezingPoint = 0;
const celsiusBoilingPoint = 100;
const kelvinFreezingPoint = 273;
const kelvinBoilingPoint = 373;


if (temp < (Number.MIN_SAFE_INTEGER) || temp > Number.MAX_SAFE_INTEGER) {
      console.log("\nInvalid.\n")

} else if (temp <= fahrenheitFreezingPoint && (scale == "F" || scale == "f")){
      console.log("\nSolid.\n")

} else if ((temp > fahrenheitFreezingPoint && temp < fahrenheitBoilingPoint) && (scale == "F" || scale == "f")){
      console.log("\nLiquid.\n")

} else if (temp >= fahrenheitBoilingPoint && (scale == "F" || scale == "f")){
      console.log("\nGas.\n")

} else if (temp <= celsiusFreezingPoint && (scale == "C" || scale == "c")){
      console.log("\nSolid.\n")

} else if ((temp > celsiusFreezingPoint && temp < celsiusBoilingPoint) && (scale == "C" || scale == "c")){
      console.log("\nLiquid.\n")

} else if (temp >= celsiusBoilingPoint && (scale == "C" || scale == "c")){
      console.log("\nGas.\n")

} else if (temp <= kelvinFreezingPoint && (scale == "K" || scale == "k")){
      console.log("\nSolid.\n")

} else if ((temp > kelvinFreezingPoint && temp < kelvinBoilingPoint) && (scale == "K" || scale == "k")){
      console.log("\nLiquid.\n")

} else if (temp >= kelvinBoilingPoint && (scale == "K" || scale == "k")){
      console.log("\nGas.\n")

} else {
      console.log("\nInvalid.\n")
}
