/*Write a function to get tomorrow’s date in a string format in JavaScript
 */
const tomorrow = () => {
  let d = new Date();
  d.setDate(d.getDate() + 1);

  let year = d.getFullYear();
  let month = String(d.getMonth() + 1);
  let day = String(d.getDate());
  month = month.length == 1 ? month.padStart("2", "0") : month;

  day = day.length == 1 ? day.padStart("2", "0") : day;
  console.log(`${year}-${month}-${day}`);
};
console.log(tomorrow());
