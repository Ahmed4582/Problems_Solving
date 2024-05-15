let member = {
  name: "Elzero",
  age: 38,
  country: "Egypt",
  fullDetails: function () {
    return `My Name IS ${member.name}, My Age Is ${member.age}, I live in ${member.country}`;
  },
};

console.log(member.name); // Elzero
console.log(member.age); // 38
console.log(member.country); // Egypt
console.log(member.fullDetails());
// My Name Is Elzero, My Age Is 38, I Live in Egypt

// /*TASK TWO*/
let objMethodOne = {
  property: "Method One",
};
console.log(objMethodOne.property); // "Method One"

let objMethodTwo = Object.create({});
objMethodTwo.property = "Method Two";

console.log(objMethodTwo.property); // "Method Two"

let objMethodThree = Object.assign({}, { property: "Method Three" });

console.log(objMethodThree.property); // "Method Three"

let objMethodFour = new Object({
  property: "Method Four",
});

console.log(objMethodFour.property); // "Method Four"

// /*TASK THREE*/
let a = 1;

let threeNums = {
  b: 2,
  c: 3,
  d: 4,
};

let twoNums = {
  e: 5,
  f: 6,
};

let finalObject = Object.assign(a, threeNums, twoNums);

console.log(finalObject);

// /*TAsk  FOUR*/
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

// Code One => How To Get Object Length ?
let objectLength = Object.keys(myFavGames).length;
let x = Object.keys(myFavGames);
console.log(x);
0;
for (let i = 0; i < objectLength; i++) {
  console.log(`The Game Name Is ${x[i]}`);
  console.log(`The Publisher Is ${myFavGames[x[i]]["publisher"]}`);
  console.log(`The Price Is ${myFavGames[x[i]]["price"]}`);

  // Check If Nested Object Has Property (bestThree)
  if (Object.hasOwn(myFavGames[x[i]], "bestThree")) {
    console.log("- Game Has Releases");
    console.log(`First => ${myFavGames[x[i]]["bestThree"]["one"]}`);
    console.log(`Second => ${myFavGames[x[i]]["bestThree"]["two"]}`);
    console.log(`Third => ${myFavGames[x[i]]["bestThree"]["three"]}`);
  }
  console.log("#".repeat(20));
}

// Ouput

//   "The Game Name Is Trinity Universe"
//   "The Publisher Is NIS America"
//   "The Price Is 40"
//   "####################"
//   "The Game Name Is Titan Quest"
//   "The Publisher Is THQ"
//   "The Price Is 50"
//   "- Game Has Releases"
//   "First => Immortal Throne"
//   "Second => Ragnarök"
//   "Third => Atlantis"
//   "####################"
//   "The Game Name Is YS"
//   "The Publisher Is Falcom"
//   "The Price Is 40"
//   "- Game Has Releases"
//   "First => Oath in Felghana"
//   "Second => Ark Of Napishtim"
//   "Third => origin"
//   "####################"

let age = 25;
