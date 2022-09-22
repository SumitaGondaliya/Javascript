/*Recursion: Array Sum
Write a function that finds the sum of an array. Make your function recursive.

Examples
sum([1, 2, 3, 4]) ➞ 10

sum([1, 2]) ➞ 3

sum([1]) ➞ 1

sum([]) ➞ 0
Notes
Return 0 for an empty array.
Check the Resources tab for info on recursion.*/

function sum(a,n) {
  if (n <= 0) {
    return 0;
  }
  return sum(a, n - 1) + a[n - 1];
}

var A = [1, 2, 3, 4];
var N = A.length;
console.log(sum(A, N));

/*console.log(sum([1,2]))*/
