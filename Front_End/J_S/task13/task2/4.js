function minMax(arr) {
  return [Math.min(...arr), Math.max(...arr)]; // (... spreed opreator)
}

// Example usage:
console.log(minMax([3, 5, 1, 8, -2, 7])); // Output: [-2, 8]
