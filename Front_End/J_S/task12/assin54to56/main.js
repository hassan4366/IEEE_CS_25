let friends = ["Ahmed", "Sayed", "Ali", 1, 2, "Mahmoud", "Amany"];
let index = 0;
let counter = 0;

while (index < friends.length) {
  let friend = friends[index];

  if (typeof friend === "string" && !friend.startsWith("A")) {
    counter++;
    console.log(`${counter} => ${friend}`);
  }
  index++;
}
