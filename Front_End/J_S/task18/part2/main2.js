const date1 = new Date("October 25, 1982 00:00:00");

const date2 = new Date(1982, 9, 25, 0, 0, 0);

const date3 = new Date(Date.UTC(1982, 9, 24, 22, 0, 0));

console.log(date1.toString());
console.log(date2.toString());
console.log(date3.toString());
