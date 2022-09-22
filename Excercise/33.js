/*
Find NaN in an Array
Create a function to find NaN in an array of numbers. 
The return value should be the index where NaN is found. If NaN is not found in the array, then return -1.

Examples
findNaN([1, 2, NaN]) ➞ 2

findNaN([NaN, 1, 2, 3, 4]) ➞ 0

findNaN([0, 1, 2, 3, 4]) ➞ -1

NaN will occur in the input array only once.*/

function findNaN(arr) {
  i = 0;
  l = arr.length;
  while (i < l) {
    if (isNaN(arr[i])) {
      return i;
    }
    ++i;
  }
  return -1;
}
console.log("Index of NaN", findNaN([NaN, 1, 2, 3, 4]))
console.log("Index of NaN", findNaN([0, 1, 2, 3, 4]))//-1
