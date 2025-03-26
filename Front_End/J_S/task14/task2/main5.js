function squareDigits(n) {
  return Number(
    n
      .toString()
      .split("")
      .map((digit) => digit ** 2)
      .join("")
  );
}
console.log(squareDigits(9119));

// function squareDigits(num) {
// return Number(num.toString().split('').map(digit => digit ** 2).join(''));
// }
//
///est cases
// console.log(squareDigits(9119)); // 811181
// console.log(squareDigits(2483)); // 416649
// console.log(squareDigits(3212)); // 9414
// console.log(squareDigits(765));  // 493625
// console.log(squareDigits(0));    // 0
//
