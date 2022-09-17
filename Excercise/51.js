//String is palindrome or not?

var str1="MOM"
var str2=str1

//console.log(str1)
//console.log(str2)

function palindrome(str)
{
var i=0
for( i=0;str.length ;i++)
{
   for(j=str.length;j>=0;j--)
   {
    if(str[i]!==str[j])
    {
        return false
    }
   }
}
return true
}
console.log(palindrome("MOM"))
console.log(palindrome("malayalam"))