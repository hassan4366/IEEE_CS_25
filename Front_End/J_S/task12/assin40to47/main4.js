let website = "Go";
let words = [`${website}ogle`, "Facebook", ["Elzero", "Web", "School"]];

console.log(words[2][0].slice(2, 6).toUpperCase()); // ZERO

console.log(words[2][0].slice(website.length).toUpperCase()); // ZERO
