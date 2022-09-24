/* Create a function to extract words from a given String

word(TOday is a good day)->TOday
is
a 
good
day
 */

function words(str) {
  str = str.split(" ")
  for (let i = 0; i < str.length; i++) {
    console.log(str[i] + " ")
  }
}

words("TOday is a Good day")
