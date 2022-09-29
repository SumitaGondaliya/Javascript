/*Create a function that calculates how many numbers in the given array are less/equal 
to the given value using the percentile formula ?

 Examples:
 percentile([1, 5,7,8,2,2,0], 8)=>92.85714285714286

*/

const percentile = (arr, val) => {
  let res = 0;

  for (let i in arr) {
    res = res + (arr[i] < val ? 1 : 0) + (arr[i] === val ? 0.5 : 0);
  }

  let resDisplay = (res / arr.length) * 100
  console.log(resDisplay)
}
console.log("Numbers in array", percentile([1, 5, 7, 8, 2, 2, 0], 8));
//console.log("Numbers in array", percentile([1, 5,7,8,9,0,1,2,3], 2));
console.log("Numbers in array", percentile([1, 2, 3, 4, 5, 6], 5))
