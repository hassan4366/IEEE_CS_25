let n1 = [10, 30, 10, 20];
let n2 = [30, 20, 10];
console.log([...new Set(n1.concat(n2))].join("").slice(0, 2) * 21);
