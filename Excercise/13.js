/*Is the String a Palindrome?
A palindrome is a word that is identical forward and backwards.
mom
racecar
kayak
Given a word, create a function that checks whether it is a palindrome.

Examples
checkPalindrome("mom") ➞ true

checkPalindrome("scary") ➞ false

checkPalindrome("reviver") ➞ true

checkPalindrome("stressed") ➞ false
Notes
All test input is lower cased.*/

function checkPalindrome(str)
{
    const length = str.length;
    for (var i = 0; i < length/2; i++) {
        if (str[i] !== str[length - 1 - i])
         { 
            return false; 
         }
}
return true
}
console.log("String is",checkPalindrome("scary"))
console.log("String is",checkPalindrome("stressed"))
console.log("String is",checkPalindrome("MOM"))
console.log("String is",checkPalindrome("reviver"))
console.log("String is",checkPalindrome("subhgopi"))






 