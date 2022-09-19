
/*Leap Year Function ⌚
Write a function that returns true if a year is a leap, otherwise return false.

A year is a "leap year" if it lasts 366 days, instead of 365 in a typical year.
 That extra day is added to the end of the shortest month, creating February 29.

A leap year occurs every four years, and will take place if the year is a multiple of four. 
The exception to this is a year at the beginning of a century (for example, 1900 or 2000), 
where the year must be divisible by 400 to be a leap year.

Look at the examples, and if you need help, look at the resources panel.

Examples
leapYear(1990) ➞ false

leapYear(1924) ➞ true

leapYear(2021) ➞ false
Notes
Do not overthink this challenge.
You can solve the problem with a few lines of code.*/

function leapYear(year)
{
    return year%4==0 ? true:false
}
console.log("The year is",leapYear(1990))
console.log("The year is",leapYear(1924))
console.log("The year is",leapYear(2022))


