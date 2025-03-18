// الطريقه الاولي

let friends = ["Ahmed", "Eman", "Osama", "Gamal"];

friends.length = 2;

console.log(friends); // ["Eman", "Osama"]

// الطريقه الثانيه

let friends1 = ["Ahmed", "Eman", "Osama", "Gamal"];

friends1.shift();

friends1.pop();

console.log(friends1);
