
/*Less Than 100?
Given two numbers, return true if the sum of both numbers is less than 100. Otherwise return false.

Examples
lessThan100(22, 15) ➞ true
// 22 + 15 = 37

lessThan100(83, 34) ➞ false
// 83 + 34 = 117

lessThan100(3, 77) ➞ true
*/

function lessThan100(n1,n2)
{
    return ((n1+n2) < 100)?true:false
}
console.log("The sum is",lessThan100(22,15))
console.log("The sum is",lessThan100(83,34))