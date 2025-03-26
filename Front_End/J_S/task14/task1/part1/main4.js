// The Object To Work With
let myFavGames = {
  "Trinity Universe": {
    publisher: "NIS America",
    price: 40,
  },
  "Titan Quest": {
    publisher: "THQ",
    bestThree: {
      one: "Immortal Throne",
      two: "Ragnarök",
      three: "Atlantis",
    },
    price: 50,
  },
  YS: {
    publisher: "Falcom",
    bestThree: {
      one: "Oath in Felghana",
      two: "Ark Of Napishtim",
      three: "origin",
    },
    price: 40,
  },
};

let objectLength = Object.keys(myFavGames).length;

let gameNames = Object.keys(myFavGames);

for (let i = 0; i < objectLength; i++) {
  let game = gameNames[i];
  let gameData = myFavGames[game];

  console.log(`The Game Name Is ${game}`);
  console.log(`The Publisher Is ${gameData.publisher}`);
  console.log(`The Price Is ${gameData.price}`);

  // Check If Nested Object Has Property (bestThree)
  if (gameData.bestThree) {
    console.log("- Game Has Releases");
    console.log(`First => ${gameData.bestThree.one}`);
    console.log(`Second => ${gameData.bestThree.two}`);
    console.log(`Third => ${gameData.bestThree.three}`);
  }
  console.log("#".repeat(20));
}
