// first example, using only raining and temperature as base conditionals
const raining = false; //define if it is raining or not
const temperature = -41; //define exterior temperature

if (raining) { //check if it is raining
  console.log("Don't forget your umbrella!");
}

if (temperature < 0) { //determine log output based on temperature
  console.log("Make sure you pick out a scarf!");
} else if (temperature < 15) {
  console.log("Short sleeves won't cut it!");
} else {
  console.log("Short sleeves are fine.");
}

console.log("Now you're ready to go outside!");

//second example, using logical operators for voting
const isCitizen = true;
const age = 26;
if (isCitizen === true && age > 18) {
  console.log("You are eligible to vote.")
}


//futher conditionals using logical operators for weather case
if (temperature < -40 || temperature > 40) {
  console.log("Maybe going outside isn't such a great idea...")
}

//further conditionals to use !raining 

if (!raining) {
  console.log("Leave your umbrella at home!")
}