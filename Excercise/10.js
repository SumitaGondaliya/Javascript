/*Find the Smallest Number in an Array
Create a function that takes an array of numbers and returns the smallest number in the set.

Examples
findSmallestNum([34, 15, 88, 2]) ➞ 2

findSmallestNum([34, -345, -1, 100]) ➞ -345

findSmallestNum([-76, 1.345, 1, 0]) ➞ -76

findSmallestNum([0.4356, 0.8795, 0.5435, -0.9999]) ➞ -0.9999

findSmallestNum([7, 7, 7]) ➞ 7*/

function findSmallestNum(arr)
{
    //var numbers=Math.min(arr)
    
     let minimum=Math.min.apply(null,arr)
     return minimum
}
console.log("Smallest number is the set is",findSmallestNum([34,15,88,2]))
console.log("Smallest number is the set is",findSmallestNum([34,-345,-1,100]))
console.log("Smallest number is the set is",findSmallestNum([-76,1.345,1,0]))
console.log("Smallest number is the set is",findSmallestNum([7,7,7]))
console.log("Smallest number is the set is",findSmallestNum([0.4356,0.8795,0.5435,-0.9999]))