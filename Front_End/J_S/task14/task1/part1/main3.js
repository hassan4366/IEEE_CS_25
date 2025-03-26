//    Nested-object
let total = {
  a: 1,
  threeNums: {
    b: 2,
    c: 3,
    d: 4,
  },
  twoNums: {
    e: 5,
    f: 6,
  },
};
console.log(total.a);
console.log(total.threeNums.b);
console.log(total.threeNums.c);
console.log(total.threeNums.d);
console.log(total.twoNums.e);
console.log(total.twoNums.f);

/*
  a: 1
  b: 2
  c: 3
  d: 4
  e: 5
  f: 6
*/
