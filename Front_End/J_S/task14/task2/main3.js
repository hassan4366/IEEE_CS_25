function possibleBonus(a, b) {
  return b > a && b - a <= 6;
}

console.log(possibleBonus(6, 8));

console.log(possibleBonus(1, 9));
