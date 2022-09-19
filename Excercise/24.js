/*Eliminate Odd Numbers within an Array
Create a function that takes an array of numbers and returns only the even values.

Examples
noOdds([1, 2, 3, 4, 5, 6, 7, 8]) ➞ [2, 4, 6, 8]

noOdds([43, 65, 23, 89, 53, 9, 6]) ➞ [6]

noOdds([718, 991, 449, 644, 380, 440]) ➞ [718, 644, 380, 440]
Notes
Return all even numbers in the order they were given.
All test cases contain valid numbers ranging from 1 to 3000.*/

function noOdds(arr) {
  //var arr=[1, 2, 3, 4, 5, 6, 7, 8]

  var even = arr.filter((n) => {
    return n % 2 === 0
  })
  return even;
}
//console.log("even values are",even)
console.log("Even values are", noOdds([43, 65, 23, 89, 53, 9, 6]))
console.log("Even values are", noOdds([718, 991, 449, 644, 380, 440]))
