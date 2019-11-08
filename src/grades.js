const readlineSync = require("readline-sync");

const grade = Number(readlineSync.question("\nEnter a grade: "));

//Variables to represent the thresholds
const highA = 100;
const lowA = 90;
const highB = 89;
const lowB = 80;
const highC = 79;
const lowC = 70;
const highD = 69;
const lowD = 60;
const highF = 59;
const lowF = 0;



if (grade > highA || grade < lowF){
  console.log("\nInvalid\n")

}else if (grade <=highA && grade >= lowA){
  console.log("\nYou recieved an A.\n")

}else if (grade <lowA && grade >= lowB){
  console.log("\nYou recieved an B.\n")

}else if (grade <lowB && grade >= lowC){
  console.log("\nYou recieved an C.\n")

}else if (grade <lowC && grade >= lowD){
  console.log("\nYou recieved an D.\n")

}else if (grade <lowD && grade >= lowF){
  console.log("\nYou recieved an F.\n")

} else {

  console.log("\nInvalid\n")
}
