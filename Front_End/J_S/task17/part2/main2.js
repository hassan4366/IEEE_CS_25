let specialNames = "Os10O OsO Os100O Osa100O Os1000 Os100m";
let regex = /\bOs\d*O\b/g;

let matches = specialNames.match(regex);
console.log(matches);
console.log(matches.length);
