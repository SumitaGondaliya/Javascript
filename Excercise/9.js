/*
Hamming Distance
Hamming distance is the number of characters that differ between two strings.

To illustrate:

String1: "abcbba"
String2: "abcbda"

Hamming Distance: 1 - "b" vs. "d" is the only difference.
Create a function that computes the hamming distance between two strings.

Examples
hammingDistance("abcde", "bcdef") ➞ 5

hammingDistance("abcde", "abcde") ➞ 0

hammingDistance("strong", "strung") ➞ 1
Notes
Both strings will have the same length.
*/

function hammingDistance(str1,str2)
{
    var i = 0// i=1,i=2,i=3.....
    count = 0 
    while (i < str1.length)//0<strong.length
    {
        if (str1[i] != str2[i])//strong[0] not equal to strung[0]???//True?   //condition will false at index 3 that is "o" in string 1=strong
            count++;//count +1
        i++;//i +1
    }
    return count;
}
console.log("Hamming Distance between both strings are",hammingDistance("strong","strung"))//1
console.log("Hamming Distance between both strings are",hammingDistance("abcde","abcde"))
console.log("Hamming Distance between both strings are",hammingDistance("abcde","bcdef"))