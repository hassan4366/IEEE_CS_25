let theName = "Elzero";
console.log(theName.split(""));
console.log([...theName]);
console.log(Array.from(theName));
console.log(Object.assign([], theName));
console.log(Array.prototype.slice.call(theName));
console.log(Array.prototype.slice.apply(theName));
