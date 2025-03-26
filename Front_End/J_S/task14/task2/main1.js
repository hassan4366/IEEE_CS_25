function leapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

console.log(leapYear(2020)); // true
console.log(leapYear(2021)); // false
console.log(leapYear(1968)); // true
console.log(leapYear(1900)); // false
console.log(leapYear(2000)); // true
