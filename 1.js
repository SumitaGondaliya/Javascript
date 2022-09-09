//Write a JavaScript program to construct the following pattern, using a nested for loop.

var x, y, ch;
for (x = 1; x < 6; x++) {
  for (y = 1; y < x; y++) {
    ch = ch + "*"
  }
  console.log(ch)
  ch = ""
}
