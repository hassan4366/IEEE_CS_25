let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];

let result = numsAndStrings
  .filter((item) => typeof item === "number")
  .map((num) => -num);

console.log(result);
