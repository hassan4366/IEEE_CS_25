function Boom(arr) {
  return arr.some((num) => num.toString().includes(7))
    ? "Boom!"
    : "there is no 7 in the array";
}
console.log(Boom([1, 2, 3, 4, 5, 6, 7])); // "Boom!"
// 7 contains the number seven.

console.log(Boom([8, 6, 33, 100])); //"there is no 7 in the array"
// None of the items contain 7 within them.

console.log(Boom([2, 55, 60, 97, 86])); // "Boom!"
// 97 contains the number seven.
