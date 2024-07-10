console.log("#######################");
console.log("Project Euler Problem 1");
console.log("#######################\n");

let sum = 0;

for (let i = 1; i < 1000; i++) {
  //See if number is divisible by 3 or 5
  if (i % 3 === 0 || i % 5 === 0) {
    //if number is divisible by 3 or 5, add to the sum
    sum = sum + i;
  }
}

console.log("Problem 1 Answer is " + sum);
