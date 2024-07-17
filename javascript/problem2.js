console.log("#######################");
console.log("Project Euler Problem 2");
console.log("#######################\n");

let num1 = 0;
let num2 = 1;
let latestNum = 0;
let sumEvens = 0;

while (latestNum < 4000000) {
  if (latestNum % 2 == 0) {
    sumEvens = sumEvens + latestNum;
  }
  num1 = num2;
  num2 = latestNum;
  latestNum = num1 + num2;
}
console.log("Problem 2 answer is " + sumEvens);
