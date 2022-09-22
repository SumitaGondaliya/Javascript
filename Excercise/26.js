/*Create a function that applies a discount d to every number in the array.
getDiscounts([2, 4, 6, 11], "50%") ➞ [1, 2, 3, 5.5]

getDiscounts([10, 20, 40, 80], "75%") ➞ [7.5, 15, 30, 60]

getDiscounts([100], "45%") ➞ [45]

*/

function getDiscounts(num, d) {
    var parsed = parseInt(d);
	for(var i =0; i<num.length; i++){
		num[i] = num[i] * parsed /100;
	}
	return num;
}

console.log(getDiscounts([2, 4, 6, 11], "50%"))
console.log(getDiscounts([10, 20, 40, 80], "75%"))
