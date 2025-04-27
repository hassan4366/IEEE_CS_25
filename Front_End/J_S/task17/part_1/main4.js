let theNumber = 100020003000;
console.log(+[...new Set(`${theNumber}`)].filter((e) => e !== "0").join(""));
