let needle = "JS";
let haystack = ["PHP", "JS", "Python"];

console.log(haystack.includes(needle));

if (haystack.indexOf("JS") === 1) {
  console.log("found");
}

haystack.includes("JS") === 1;
console.log("found");
