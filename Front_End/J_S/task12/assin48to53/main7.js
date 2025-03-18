let start = 1;
let mix = [1, 2, 3, "A", "B", "C", 4];
let arr = [];

for (let i = 1; i < mix.length; i++) {
  if (typeof mix[i] === "number") {
    arr.push(mix[i]);
    // console.log(arr);
  }
}
console.log(arr);
