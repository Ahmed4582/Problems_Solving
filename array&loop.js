// Arrays
// - Create Arrays [Two Methods] new Array() + []
// - Access Arrays Elements
// - Nested Arrays
// - Change Arrays Elements
// - Check For Array Array.isArray(arr);

// Arrays Methods [Adding And Removing]
// - unshift("", "") Add Element To The First
// - push("", "") Add Element To The End
// - shift() Remove First Element From Array
// - pop() Remove Last Element From Array

//   Arrays Methods [Search]
// - indexOf(Search Element, From Index [Opt])
// - lastIndexOf(Search Element, From Index [Opt])
// - includes(valueToFind, fromIndex [Opt]) [ES7]

// Arrays Methods [Sort]
// - sort(Function [Opt])
// - reverse

// Arrays Methods [Slicing]
// - slice(Start [Opt], End [Opt] Not Including End)
// --- slice() => All Array
// --- If Start Is Undefined => 0
// --- Negative Count From End
// --- If End Is Undefined || > Indexes => Slice To The End Array.length
// --- Return New Array
// - splice(Start [Mand], DeleteCount [Opt] [0 No Remove], The Items To Add [Opt])
// --- If Negative => Start From The End

// Arrays Methods [Joining]
// - concat(array, array) => Return A New Array
// - join(Separator)

/*
  Array Challenge
*/

/*
  Array Challenge
*/

let zero = 0;

let counter = 3;

let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];

my.reverse();
console.log(my);
my = my.slice(--counter);

console.log(my); // ["Osama", "Elham", "Mazero", "Ahmed"];

console.log(my.slice(--counter, --zero)); // ["Elham", "Mazero"]

console.log(
  `${my[counter].slice(++zero, ++counter)}${my[counter].slice(counter)}`
); // "Elzero"

console.log(
  `${my[counter].slice(4, 5)}${my[counter].slice(5, 6).toUpperCase()}`
); // "rO"

/*TASK ONE*/
let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
let num = 3;

myFriends.pop();
console.log(myFriends); // ["Ahmed", "Elham", "Osama"];

myFriends.length = num;
console.log(myFriends); // ["Ahmed", "Elham", "Osama"];

/*TASSK TWO*/
let friends = ["Ahmed", "Eman", "Osama", "Gamal"];

friends.pop();
friends.shift();

console.log(friends); // ["Eman", "Osama"]

/* TASK THREE*/
let arrOne = ["C", "D", "X"];
let arrTwo = ["A", "B", "Z"];
let finalArr = [];
finalArr = arrTwo.concat(arrOne).sort().reverse();
console.log(finalArr); // ["Z", "X", "D", "C", "B", "A"]

/*TASK FOUR*/
let website = "Go";
let words = [`${website}ogle`, "Facebook", ["Elzero", "Web", "School"]];
console.log(`${words[website.length][0].slice(website.length).toUpperCase()}`); // ZERO

/*TASK FIVE*/
let needle = "JS";
let haystack = ["PHP", "JS", "Python"];

if (haystack.includes(needle)) {
  console.log("Found");
}
if (haystack.indexOf(needle)) {
  console.log("Found");
}
if (haystack.lastIndexOf(needle)) {
  console.log("Found");
}

/*TASK SIX*/
let arr1 = ["A", "C", "X"];
let arr2 = ["D", "E", "F", "Y"];
let allArrs = [];

allArrs = arr1
  .concat(arr2)
  .sort()
  .join("")
  .slice(arr2.indexOf("E") + arr2.indexOf("Y"))
  .toLowerCase();
console.log(allArrs); // fxy
