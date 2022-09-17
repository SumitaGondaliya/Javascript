/*Integer Digits Count
Create a function that counts the integer's number of digits.

Examples
count(318) ➞ 3
count(-92563) ➞ 5
count(4666) ➞ 4
count(-314890) ➞ 6
count(654321) ➞ 6
count(638476) ➞ 6

Notes
For an added challenge, try to solve this without using strings.
Alternatively, you can solve this via a recursive approach.*/

function count(n) {
  if (n / 10 == 0){return 1}

  return 1 + count(parseInt(n / 10));
}
console.log("Integer count is", count(654));
