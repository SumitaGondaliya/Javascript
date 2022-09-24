/*Equality of 3 Values
Create a function that takes three integer arguments (a, b, c) and returns the amount of integers
 which are of bigger value.

Examples
equal(3, 4, 3) ➞ 4
equal(3, 4, 1) ➞ 4
*/



function equal(a,b,c)   
{ 

    if ( a > b && a > c )
        return a
    else if ( b > a && b > c )
        return b;
    else if ( c > a && c > b )
        return c
}
console.log(equal(3,4,3))

console.log(equal(1,1,1))
