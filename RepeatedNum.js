// 2.Find repeated digits between 0-100.
//dyanmic blank array
repeatedDigitsArr = [];
//in for loop tabke 10 to 100 value
for (let i = 10; i < 100; i++) {
    //ex =  88 % 10 = 8
  let onesDigit = i % 10;
  // 88 - 8 /10 = 8
  let tensDigit = (i - onesDigit) / 10;
 // 8 == 8
  if (onesDigit == tensDigit) {
      //88
    console.log(i);
    //push into blank array
    repeatedDigitsArr.push(i);
  }
}
console.log("Repeated digits content:")
// op array
console.log(repeatedDigitsArr);