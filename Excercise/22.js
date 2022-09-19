/*
Rotate the Array by One 🔄
Given an array, rotate the values clockwise by one (the last value is sent to the first position).

Check the examples for a better understanding.

Examples
rotateByOne([1, 2, 3, 4, 5]) ➞ [5, 1, 2, 3, 4]

rotateByOne([6, 5, 8, 9, 7]) ➞ [7, 6, 5, 8, 9]

rotateByOne([20, 15, 26, 8, 4]) ➞ [4, 20, 15, 26, 8]
*/

const rotateByOne = (arr) => {

    let arr1 = arr.pop()
    arr.unshift(arr1)
    return arr
  }
  console.log("New array after rotation",rotateByOne([1, 2, 3, 4, 5]))
  console.log("New array after rotation",rotateByOne([6, 5, 8, 9, 7]))
  console.log("New array after rotation",rotateByOne([20, 15, 26, 8, 4]))
  