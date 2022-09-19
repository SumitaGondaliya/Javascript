/*
Return the Four Letter Strings
Create a function that takes an array of strings and returns the words that are exactly four letters.

Examples
isFourLetters(["Tomato", "Potato", "Pair"]) ➞ ["Pair"]

isFourLetters(["Kangaroo", "Bear", "Fox"]) ➞ ["Bear"]

isFourLetters(["Ryan", "Kieran", "Jason", "Matt"]) ➞ ["Ryan", "Matt"]
Notes
You can expect valid strings for all test cases.
*/


function maxWord(arr)
{
    return arr.filter((maxWord) => maxWord.length === 4)

}

console.log("This words has four letters",maxWord(["Tomato","Potato","Pair"]))
console.log("This words has four letters",maxWord(["Kangaroo", "Bear", "Fox"]))
console.log("This words has four letters",maxWord(["Ryan", "Kieran", "Jason", "Matt"]))