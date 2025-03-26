let objMethodOne = {
  property: "Method One",
};

console.log(objMethodOne.property); // "Method One"

let objMethodTwo = new Object();
objMethodTwo.property = "Method Two";

console.log(objMethodTwo.property); // "Method Two"

function MethodThree() {
  this.property = "Method Three";
}
let objMethodThree = new MethodThree();

console.log(objMethodThree.property); // "Method Three"

let proto = { property: "Method Four" };
let objMethodFour = Object.create(proto);

console.log(objMethodFour.property); // "Method Four"
