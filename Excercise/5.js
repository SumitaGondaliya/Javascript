//Write a JavaScript function to get the last day of a month.

var lastday = function(y,m){
    return new Date(y, m +1, 0).getDate();
 }
    console.log(lastday(2020,0))
    console.log(lastday(2021,1))
    console.log(lastday(2022,11))