/*Negative Image
Suppose an image can be represented as a 2D array of 0s and 1s. 
Write a function to reverse an image. Replace the 0s with 1s and vice versa.

Examples
reverseImage([
  [1, 0, 0],
  [0, 1, 0],
  [0, 0, 1]
]) ➞ [
  [0, 1, 1],
  [1, 0, 1],
  [1, 1, 0]
]

reverseImage([
  [1, 1, 1],
  [0, 0, 0]
]) ➞ [
  [0, 0, 0],
  [1, 1, 1]
]

reverseImage([
  [1, 0, 0],
  [1, 0, 0]
]) ➞ [
  [0, 1, 1],
  [0, 1, 1]
]
*/
function reverseImage(arr)
{
    /*let arr1=[]
    arr.forEach((e2) => arr1.push(item.map(e2 =>e2 ?0:1))*/

    for(let i = 0; i < arr.length; i++) {
		for(let n =0;n < arr[i].length ;n++) {
			if(arr[i][n] == 0) {
				arr[i][n] = 1
			}
			else {
				arr[i][n] = 0
			}
		}
	}
	return arr
}
        

    console.log(reverseImage( [1, 0, 0],[0, 1, 0],[0, 0, 1]))
