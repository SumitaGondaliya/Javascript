/*
Word Numbers!
Create a function that returns a number, based on the string provided. Here is a list of all digits:

String	Number
"one"	1
"two"	2
"three"	3
"four"	4
"five"	5
"six"	6
"seven"	7
"eight"	8
"nine"	9
"zero"	0

Examples
word("one") ➞ 1

word("two") ➞ 2

word("nine") ➞ 9
Notes
All numbers will be single digit positive integers.*/

/*function word(str) {
  //const num =  Number("str")
  return num
}
console.log("Returned number from string is", word("one"))*/

function word(str){

    var num = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
	return num.indexOf(str)

}
console.log("Returned number from string is", word("one"))
console.log("Returned number from string is", word("two"))
console.log("Returned number from string is", word("three"))


