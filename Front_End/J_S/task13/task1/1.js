let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];

let result = mix
  .map((item) => (typeof item === "string" ? item : "")) //if sammaries
  .reduce((acc, curr) => acc + curr);

console.log(result); // "Elzero"
