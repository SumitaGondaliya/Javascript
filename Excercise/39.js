/*
Find Unique Character Strings
Create a function that returns only strings with unique characters.

Examples
filterUnique(["abb", "abc", "abcdb", "aea", "bbb"]) ➞ ["abc"]
// "b" occurs in "abb" more than once, "b" occurs in "abcdb" more than once, etc.

filterUnique(["88", "999", "989", "9988", "9898"]) ➞ []

filterUnique(["ABCDE", "DDEB", "BED", "CCA", "BAC"]) ➞ ["ABCDE", "BED", "BAC"]
*/

function filterUnique(str) {
  let ch = ""

  for (let i = 0; i < str.length; i++) {
    if (ch.includes(str[i]) === false) {
      ch += str[i]
    }
  }
  return ch;
}
console.log("Unique char is",filterUnique(["88", "999", "989", "9988", "9898"]))
console.log("Unique char is",filterUnique(["ABCDE", "DDEB", "BED", "CCA", "BAC"]))