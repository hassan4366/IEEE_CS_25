function isOmnipresent(arr, val) {
  return arr.every((subArr) => subArr.includes(val));
}
console.log(isOmnipresent([[3, 4], [8, 3, 2], [3], [9, 3], [5, 3], [4, 3]], 3));
