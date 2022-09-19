
/*Convert All Array Items to String

Create a function that takes an array of integers and strings. Convert integers to strings and return the new array.

Examples
parseArray([1, 2, "a", "b"]) ➞ ["1", "2", "a", "b"]
parseArray(["abc", 123, "def", 456]) ➞ ["abc", "123", "def", "456"]
parseArray([1, 2, 3, 17, 24, 3, "a", "123b"]) ➞ ["1", "2", "3", "17", "24", "3", "a", "123b"]
parseArray([]) ➞ []
Notes
Return [] if array is empty.*/

function parseArray(arr)
{
    const str = arr.toString()
    const arr1 = str.split('')
    //let arr2=str.split('')
    return arr1
    //console.log(arr2)
}
console.log("Converted array is",parseArray([1, 2, "a", "b"]))
console.log("Converted array is",parseArray(["abc", 123, "def", 456]))

