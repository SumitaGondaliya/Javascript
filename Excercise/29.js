/*
Get the File Extension
Write a function that maps files to their extension names.

Examples
getExtension(["code.html", "code.css"])
➞ ["html", "css"]

getExtension(["project1.jpg", "project1.pdf", "project1.mp3"])
➞ ["jpg", "pdf", "mp3"]

getExtension(["ruby.rb", "cplusplus.cpp", "python.py", "javascript.js"])
➞ ["rb", "cpp", "py", "js"]
*/

function getExtension(arr) {
  /*let ext=f1.split('.').pop()
  let ext2=f2.split('.').pop()
  let res= ("f1"+"f2")
  return res*/

  for (i = 0; i < arr.length; i++) {
    arr[i] = arr[i].slice(arr[i].indexOf(".") + 1)
  }
  return arr
}

console.log("File Extension is", getExtension(["code.html", "code.css"]));
