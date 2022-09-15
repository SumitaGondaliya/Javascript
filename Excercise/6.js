/*Sum of the Odd Numbers

Create a function which returns the total of all odd numbers up to and including n. 
n will be given as an odd number.

Examples
addOddToN(5) ➞ 9
// 1 + 3 + 5 = 9//3*3
addOddToN(13) ➞ 49//1+3+5+7+9+11+13= 49  => 7*7 =>49
addOddToN(47) ➞ 576//1+3+5+7+9+11+13+15+17+19+21+23+25+27+29+31+33+35+37+39+41+43+45+47 => 576 => 24*24 =>576

Notes
Curiously, the answers are all square numbers!*/

function addOddToN(n) {
  var total = 0;
  for (var i = 1; i <= n; i += 2) {
    total += i;
  }

  return total;
}
console.log("Sum of all odd num is", addOddToN(13));
