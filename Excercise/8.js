/*
Filter Strings from Array

Create a function that takes an array of strings and numbers, 
and filters out the array so that it returns an array of integers only.

Examples
filterArray([1, 2, 3, "a", "b", 4]) ➞ [1, 2, 3, 4]

filterArray(["A", 0, "Edabit", 1729, "Python", "1729"]) ➞ [0, 1729]

filterArray(["Nothing", "here"]) ➞ []
*/

function filterArray(arr) {

    return arr.filter(numbers => typeof(numbers) === 'number' && Number.isInteger(numbers));

}
console.log("Filtered array is", filterArray([1, 2, 3, "a", "b", 4]))
console.log("Filtered array is", filterArray(["A",0,"Edaabit",1729,"python","1729"]))
console.log("Filtered array is", filterArray(["Nothing","Here"]))
