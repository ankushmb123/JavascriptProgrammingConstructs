
// 3.Sort the array.
// array  of 10 [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
let numArray = new Array(10);
//set array length less
for (let i = 0; i < numArray.length; i++) {
  numArray[i] = Math.floor(Math.random() * 900) + 100;
}
//The Array.sort() method sorts the elements of an array.</p>
let sortedArray = numArray.sort();
console.log("Sorted array:");
//print sort array
console.log(sortedArray);
// for sort
console.log("Using sorting\n2nd largest element: " + sortedArray[(sortedArray.length - 2)]
  + "\n2nd smallest element: " + sortedArray[1]);