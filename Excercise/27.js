/*Create a function that filters out an array of state names into two categories based on the second parameter.

Abbreviations abb
Full names full
filterStateNames(["Arizona", "CA", "NY", "Nevada"], "abb")
➞ ["CA", "NY"]

filterStateNames(["Arizona", "CA", "NY", "Nevada"], "full")
➞ ["Arizona", "Nevada"]

filterStateNames(["MT", "NJ", "TX", "ID", "IL"], "abb")
➞ ["MT", "NJ", "TX", "ID", "IL"]

filterStateNames(["MT", "NJ", "TX", "ID", "IL"], "full")
➞ []
Notes
State abbreviations will always be in uppercase.
*/
function filterstatename(arr, type) {
  //const sname=(arr,item)=>type === 'abb'?arr.filter(item=>/^[A-Z]+$/.test(item)):arr.filter(item=> /^[A-z][a-z]+$/.test(item))
  return arr.filter((el) => (type === "abb" ? el.length === 2 : el.length > 2));
}
console.log(filterstatename(["Arizona", "CA", "NY", "Nevada"], "full"))
console.log(filterstatename(["Arizona", "CA", "NY", "Nevada"], "abb"))
