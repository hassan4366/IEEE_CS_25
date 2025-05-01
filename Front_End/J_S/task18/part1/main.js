class Car {
  constructor(name, model, price) {
    this.n = name;
    this.m = model;
    this.p = price;
  }

  run() {
    console.log("Car Is Running Now");
  }

  stop() {
    console.log("Car Is Stopped");
  }
}

let carOne = new Car("MG", "2022", 420000);
let carTwo = new Car("Toyota", "2023", 500000);
let carThree = new Car("Hyundai", "2021", 350000);

console.log(
  `Car One Name Is ${carOne.n} And Model Is ${carOne.m} And Price Is ${carOne.p}`
);

carOne.run();
