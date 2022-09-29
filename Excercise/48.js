/* write a function to find median of an array of numbers 

Examples:

median([2,6,8,9,4])=>6

*/

function median(arr) {
  var concat = arr;
  concat = concat.sort(function (a, b) {
    return a - b;
  });

  console.log(concat);
  var length = concat.length;

  if (length % 2 == 1) {
    console.log(concat[length / 2 - 0.5]);
    return concat[length / 2 - 0.5];
  } else {
    console.log((concat[length / 2] + concat[length / 2 - 1]) / 2);

    return (concat[length / 2] + concat[length / 2 - 1]) / 2;
  }
}
console.log("Median is", median([2, 6, 8, 9, 4]));
