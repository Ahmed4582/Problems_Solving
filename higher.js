/*
  Higher Order Functions
  ---> is a function that accepts functions as parameters and/or returns a function.

  - Map
  --- method creates a new array
  --- populated with the results of calling a provided function on every element
  --- in the calling array.

  Syntax map(callBackFunction(Element, Index, Array) { }, thisArg)
  - Element => The current element being processed in the array.
  - Index => The index of the current element being processed in the array.
  - Array => The Current Array

  Notes
  - Map Return A New Array

  Examples
  - Anonymous Function
  - Named Function

*/
/*
  - Filter
  --- method creates a new array
  --- with all elements that pass the test implemented by the provided function.

  Syntax filter(callBackFunction(Element, Index, Array) { }, thisArg)
  - Element => The current element being processed in the array.
  - Index => The index of the current element being processed in the array.
  - Array => The Current Array
*/
/*
  - Reduce
  --- method executes a reducer function on each element of the array,
  --- resulting in a single output value.

  Syntax
  reduce(callBackFunc(Accumulator, Current Val, Current Index, Source Array) { }, initialValue)
  - Accumulator => the accumulated value previously returned in the last invocation
  - Current Val => The current element being processed in the array
  - Index => The index of the current element being processed in the array.
  ---------- Starts from index 0 if an initialValue is provided.
  ---------- Otherwise, it starts from index 1.
  - Array => The Current Array
*/
/*
  - forEach
  --- method executes a provided function once for each array element.

  Syntax forEach(callBackFunction(Element, Index, Array) { }, thisArg)
  - Element => The current element being processed in the array.
  - Index => The index of the current element being processed in the array.
  - Array - The Current Array

  Note
  - Doesnt Return Anything [Undefined]
  - Break Will Not Break The Loop
*/

// let mix = "A13BS2ZX";
// let mapmix = mix
// .split("")
// .filter(function(el){
//     return !isNaN(parseInt(el));
// })
// .map(function(el){
//     return el * el;
// })
// .join("");

// console.log(mapmix);

/* challange */
// let myString = "1,2,3,EE,l,z,e,r,o,_,W,e,b,_,S,c,h,o,o,l,2,0,Z";

// let solution = myString.split("").map(function(el){
//     return isNaN(parseInt(el))? el : ""
// })
// .filter(function(el){
//     return el !== ","
// }).reduce(function(acc, current){
//     return acc + current;
// }).slice(true, -isNaN(myString)).replaceAll("_" , " ")

// console.log(solution); // Elzero Web School

/* Tassk One*/ let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];
let one = mix
  .map(function (el) {
    return isNaN(parseInt(el)) ? el : "";
  })
  .reduce(function (acc, current) {
    return `${acc}${current}`;
  });
console.log(one);

/* TASK TWO*/
let myString = "EElllzzzzzzzeroo";
let two = myString
  .split("")
  .filter(function (el, index) {
    return myString.indexOf(el) === index;
  })
  .join("");

/* TASK THREE*/
let myArray = ["E", "l", "z", ["e", "r"], "o"];
let three = myArray
  .reduce(function (acc, current) {
    return `${acc}${current}`;
  })
  .split("")
  .filter(function (el) {
    return el !== ",";
  })
  .reduce(function (acc, current) {
    return `${acc}${current}`;
  });
console.log(three);

/* TASK FOUR*/
let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];
let four = numsAndStrings
  .filter(function (el) {
    return !isNaN(parseInt(el));
  })
  .map(function (el) {
    return -el;
  });

console.log(four);

/*  TASK FIVE*/
let nums = [2, 12, 11, 5, 10, 1, 99];
let five = nums.reduce(function (acc, curr) {
  return curr % 2 === 0 ? acc * curr : acc + curr;
}, 1);
console.log(five);
