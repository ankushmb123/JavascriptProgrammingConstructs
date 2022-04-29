const prompt = require('prompt-sync')();
let number = Number(prompt('Enter the number: '));
//dynamic array
let primeFactorsArr = [];
// Print the number of 2s that divide n
while (number % 2 === 0) {
  primeFactorsArr.push(2);
  number = number / 2;
}
// n must be odd at this point. So we can skip  
// one element (Note i = i+2)  
for (let i = 3; i * i <= number; i = i + 2) {
  // While i divides n, print i and divide n  
  while (number % i === 0) {
    //The Array.push() method adds new items to the end of an array
    primeFactorsArr.push(i);
    number = number / i;
  }
}
// This condition is to handle the case when after division by 2 n  
// is a prime number greater than 2  
if (number > 2)
  primeFactorsArr.push(number);
console.log("Prime factors:")
console.log(primeFactorsArr);