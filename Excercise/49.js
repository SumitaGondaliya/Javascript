/* Write a function to Convert a negative number to positive

Examples:
*/

function PtoN(num) {
  return num < 0 ? -num : num;
}
var x = -1;
var y = 13;

x = PtoN(x);
console.log(x);
y = PtoN(y);
console.log(y);
