/*write a function to convert two-dimensional array into an object. 

Examples:

2Darray([
         ["Max", 13],
         ["John", 16],
         ["dorry", 10],
         ["Marthin", 01]
       ]

 {
          "Max": 13,
          "John": 16,
          "dorry": 10,
          "Marthin": 01
        })

*/

function arrtoobj(arr) {
  let obj = {};

  arr.forEach((x) => {
    var key = x[0];
    var value = x[1];
    obj[key] = value;
  });
  return obj;
}

console.log(
  arrtoobj([
    ["Max", 13],
    ["John", 16],
    ["dorry", 10],
    ["Marthin", 01],
  ])
);
