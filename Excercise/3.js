/*You are given one input: an array containing eight 1's and/or 0's. 
Write a function that takes an 8 bit binary number and converts it to decimal.

Examples
binaryToDecimal([1, 1, 1, 1, 1, 1, 1, 1]) =>255

binaryToDecimal([0, 0, 0, 0, 0, 0, 0, 0]) => 0

binaryToDecimal([1, 0, 1, 1, 1, 1, 0, 0]) => 188

Notes
Return an integer.
*/

function binaryToDecimal(binary) {
  let index = binary.length - 1;
  let decimal = 0;
  for (let i = 0; i < binary.length; i++) //0; 0<8 ? true
  {
    decimal += binary[i] * Math.pow(2, index);// += will add the value of i and will assign it to decimal variable, 8[1]*math.pow(2,0)
    index--;//index value decrement by 1
  }
  return decimal;
}
console.log(binaryToDecimal([1,0,1,1,1,1,0,0]))