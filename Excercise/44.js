/*
Days in a Month
Create a function that takes the month and year (as integers) and returns the number of days in that month.

Examples
days(2, 2018) ➞ 28

days(4, 654) ➞ 30

days(2, 200) ➞ 28

days(2, 1000) ➞ 28
Notes
Don't forget about leap years!*/

function days(m, y) {
  let leap = y % 4 == 0;
  if (m == 9 || m == 4 || m == 6 || m == 11) return 30;
  else if (m == 2 && leap == true) return 29;
  else if (m == 2) return 28;
  else return 31;
}
console.log(days(2, 2018));
console.log(days(4, 654));
