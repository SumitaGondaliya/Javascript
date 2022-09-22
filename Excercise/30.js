/*Even Number Generator
Create a function that finds all even numbers from 1 to the given number.

Examples
findEvenNums(8) ➞ [2, 4, 6, 8]

findEvenNums(4) ➞ [2, 4]

findEvenNums(2) ➞ [2]
Notes
If there are no even numbers, return an empty array.*/

findEvenNums = (num) => {
  let evennum = []
  for (i = 1; i <= num; i++) {
    evennum.push(i)
  }
  evennum = evennum.filter((x) => x % 2 == 0)
  return evennum
}

console.log(findEvenNums(8))
