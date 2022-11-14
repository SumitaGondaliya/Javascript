/* Create a function that takes an array and a string as arguments and returns the index of the string. */ 


const findIndex = (arr,s) => {
    let a;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] !== s) {
        a = i;
      } else {
        return i;
      }
    }
  }
  
  console.log(findIndex(["Gopi","JAvascript","Subh","ssd"], "ssd"));
console.log(findIndex(["1", "SOG", "URvisha", "Sumita"], "1"));