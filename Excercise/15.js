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


function maxWord(arr){
    var longestWord= arr[0];
    for(var i = 0; i < arr.length;i++){
        word = arr[i];
        if(word.length > longestWord.length){
            longestWord = word;
        }

    }
    return longestWord;
}

console.log("This words has four letters",maxWord(["Tomato","Potato","Pair"]))