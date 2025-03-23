let nums = [2, 12, 11, 5, 10, 1, 99];

let result = nums.reduce((acc, curr) => {
  return curr % 2 === 0 ? acc * curr : acc + curr;
}, 1); //if  the sammaries

console.log(result); // 500
