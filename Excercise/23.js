/*Sum of Numbers in an Array
Create a function that takes an array of numbers nums as an argument. 
Square each number in the array if the number is even and square root √ the number if it is odd. 
Return the sum of the new array rounded to two decimal places.

Example:

[2, 4, 9]  ➞ 23
2 ^ 2 + 4 ^ 2 + √9 = 4 + 16 + 3 = 23
Examples
arraySum([1, 3, 3, 1, 10]) ➞ 105.46

arraySum([2, 3, 4, 5]) ➞ 23.97

arraySum([1, 31, 3, 11, 0]) ➞ 11.62
Notes
No empty array in Tests.
Each array element ≥ 0*/

const arr =[1, 3, 3, 1, 10]
const arraySum = (arr = []) => {
   const res = arr.map(i => {
      if(i % 2 === 0){
         return i * i;
      }else{
         return Math.sqrt(i);
      }
   })
   const sum = res.reduce((accumulator, currentvalue) => accumulator + currentvalue);
   const result = sum. toFixed(2)
   return result

}
console.log(arraySum(arr))
console.log(arraySum([1, 31, 3, 11, 0]))

