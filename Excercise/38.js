/*
Find Unique Positive Numbers from Array
Write a function that takes an array and returns a new array with unique positive (more than 0) numbers.

Examples
uniqueArr([-5, 1, -7, -5, -2, 3, 3, -5, -1, -1]) ➞ [1, 3]

uniqueArr([3, -3, -3, 5, 5, -6, -2, -4, -1, 3]) ➞ [3, 5]

uniqueArr([10, 6, -12, 13, 5, 5, 13, 6, 5]) ➞ [10, 6, 13, 5]
Notes
Return the elements in the order that they are found in the array.
Your function should also work for empty arrays.
*/

function uniqueArr(arr) {
  const p = arr.filter((i) => i > 0);
  const set = new Set(p);
  return Array.from(set);
}
/*let arr=[]
for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= 0) {return true} 
        break;
    }
}*/

console.log(uniqueArr([-5, 1, -7, -5, -2, 3, 3, -5, -1, -1]));
console.log(uniqueArr([10, 6, -12, 13, 5, 5, 13, 6, 5]));
