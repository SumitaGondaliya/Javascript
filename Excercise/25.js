/*Move Zeroes
Create a function that takes an array arr of numbers and moves all zeros to the end, 
preserving the order of the other elements.

Examples
moveZeros([1, 0, 1, 2, 0, 1, 3]) ➞ [1, 1, 2, 1, 3, 0, 0]

moveZeros([0, 1, null, 2, false, 1, 0]) ➞ [1, null, 2, false, 1, 0, 0]

moveZeros(['a', 0, 0, 'b', 'c', 'd', 0, 1, 0, 1, 0, 3, 0, 1, 9, 0, 0, 0, 0, 9]) ➞
 ['a', 'b', 'c', 'd', 1, 1, 3, 1, 9, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]/ 
 */


 /*function moveZeros()
 {
 var arr = [1, 0, 1, 2, 0, 1, 3]
 var index0 = 0;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] != 0 && arr[i - 1] == 0) {
  }
}
} */
function moveZeros(arr, n)
{
    let count = 0; // j element zero nthi ene varible count set krvnu and value 0 api devni


    //jo element 0 na male to ene count index pr replace krvnu
    for (let i = 0; i<n; i++)//i=0;0<1;  true 
        if (arr[i] != 0)// if arr[0]!=0  false ==>to count increase 
            arr[count++] = arr[i]; //0++ =1
            //1++
          /* aiya jetla 0 nthi e bdha element front ma shift thy gya and "count" varible first "0" ni index par set*/                      
 /* have bdha element 0 krvna count thi lai ne end sudhi*/
    while (count <n)// 0<1 true ,to count ne 1 krvno and 0 thi intialize krvnu
        arr[count++] = 0;
        return count
}
 
    let arr = [1, 0, 1, 2, 0, 1, 3,0,0,6,89,0,2]
    let n = arr.length;
    moveZeros(arr, n);
    console.log("Array after pushing all zeros to end of array")
    for (let i = 0; i <n; i++)
        console.log(arr[i])

