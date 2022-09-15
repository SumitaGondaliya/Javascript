/*
Summing the Squares

Create a function that takes a number n and returns the sum of all square numbers up to and including n.

squaresSum(3) ➞ 14
// 1² + 2² + 3² =
// 1 + 4 + 9 =
//14
Examples
squaresSum(3) ➞ 14
squaresSum(12) ➞ 650
squaresSum(13) ➞ 819

Notes
Remember that n is included in the total.
*/ 

function squaresSum(n)
{
    var sum=0
    for(i=1;i<=n;i++)
{
    sum+=i*i
}    
    return sum
}
console.log("Sum of all square num is",squaresSum(13))