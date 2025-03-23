function specialMix(...data) {
  let sum = 0;
  let hasNumber = false;

  for (let item of data) {
    if (typeof item === "number") {
      sum += item;
      hasNumber = true;
    } else if (typeof item === "string") {
      let num = parseInt(item);
      if (!isNaN(num)) {
        sum += num;
        hasNumber = true;
      }
    }
  }

  return hasNumber ? sum : "All Is Strings";
}

console.log(specialMix(10, 20, 30)); // 60
console.log(specialMix("10Test", "Testing", "20Cool")); // 30
console.log(specialMix("Testing", "10Testing", "40Cool")); // 50
console.log(specialMix("Test", "Cool", "Test")); // All Is Strings
