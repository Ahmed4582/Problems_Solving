/*
  String Methods
  - Access With Index
  - Access With charAt()
  - length
  - trim()
  - toUpperCase()
  - toLowerCase()
  - Chain Methods
/////////////////////
  String Methods
  - indexOf(Value [Mand], Start [Opt] 0)
  - lastIndexOf(Value [Mand], Start [Opt] Length)
  - slice(Start [Mand], End [Opt] Not Include End)
  - repeat(Times) [ES6]
  - split(Separator [Opt], Limit [Opt])
/////////////////////////
 String Methods
  - substring(Start [Mand], End [Opt] Not Including End)
  --- Start > End Will Swap
  --- Start < 0 It Start From 0
  --- Use Length To Get Last Character
  - substr(Start [Mand], Characters To Extract)
  --- Start >= Length = ""
  --- Negative Start From End
  - includes(Value [Mand], Start [Opt] Default 0) [ES6]
  - startsWith(Value [Mand], Start [Opt] Default 0) [ES6]
  - endsWith(Value [Mand], Length [Opt] Default Full Length) [ES6]
*/

/*
  String Challenge
  All Solutions Must Be In One Chain
  You Can Use Concatenate
*/
////////////////////////////////////////////////////////////////////
let a = "Elzero Web School";
// Include This Method In Your Solution [slice, charAt]
console.log(a.slice(2, 6));
console.log(a.charAt(2)); // Zero
// 8 H
console.log(a.trim().charAt(13).toUpperCase().repeat(8)); // HHHHHHHH
// Return Array
console.log(a.split(" ", 1)); // ["Elzero"]
// Use Only "substr" Method + Template Literals In Your Solution
console.log(a.substr(0, 6), a.substr(11)); // Elzero School
// Solution Must Be Dynamic Because String May Changes
console.log(
  a.charAt(0).toLowerCase() +
    a.substring(1, a.length - 1).toUpperCase() +
    a.charAt(a.length - 1).toLowerCase()
); // eLZERO WEB SCHOOl
////////////////////////////////////////////////////////////////////////////////
let userName = "Elzero";
console.log(userName[3]); // e
console.log(userName.charAt(3)); // e
console.log(userName.slice(3, 4)); // e
console.log(userName.substring(3, 4)); // e
console.log(userName.substr(3, 1)); // e
console.log(userName.charAt(3).repeat(3)); // eee
//////////////////////////////////////////////////////////////////////////////////
let word = "Elzero";
let letterZ = "z";
let letterE = "e";
let letterO = "O";
console.log(word.includes(letterZ)); // True
console.log(word.toLowerCase().startsWith(letterE)); // True
console.log(word.toUpperCase().endsWith(letterO)); // True
//////////////////////////////////////////////////////////////////
console.log(100 == "100"); // true
console.log(100 != 1000); // true
console.log(110 > 100 > 10 < 20); // true
console.log(-10 == "-10"); // true
///////////////////////////////////////////////////////////////
let a = 20;
let b = 30;
let c = 10;
console.log((a < b && a > c) || a > b); // true
console.log(a < b > a < c); // true
console.log(!(a > b) && !(a > b) && !(a < c) && !(a < c)); // true
///////////////////////////////////////////////////////////////////////////////
// Test Case 1
let num1 = 9; // "009"
if (num1 < 10) {
  console.log(`00${num1}`);
}
// Test Case 2
let num2 = 20; // "020"
if (num2 > 10 && num2 < 100) {
  console.log(`0${num2}`);
}
// Test Case 3
let num3 = 110; // "110"
if (num3 > 100) {
  console.log(`${num3}`);
}
//////////////////////////////////////////////////////////////////////
let num1 = 9;
let str = "9";
let str2 = "20";
if (num1 == str) {
  console.log(`{num1} Is The Same Value As {str}`);
}
if (num1 !== str) {
  console.log(`{num1} Is The Same Value As {str} But Not The Same Type`);
}
if (num1 !== str2) {
  console.log(`{num1} Is Not The Same Value Or The Same Type As {str2}`);
}
if (str !== str2) {
  console.log(`{str} Is The Same Type As {str2} But Not The Same Value`);
}
//////////////////////////////////////////////////////////////////////////////////
let num1 = 10;
let num2 = 30;
let num3 = "30";
if (num3 > num1 && typeof num3 != typeof num2) {
  console.log(
    `${num3} Is Larger Than ${num1} And Type string Not The Same Type As number`
  );
}
if (num3 > num1 && num3 == num2 && typeof num3 !== typeof num2) {
  console.log(
    `${num3} Is Larger Than ${num1} And Value Is The Same As ${num2} And Type string Not The Same Type As number`
  );
}
if (num3 !== num1 && typeof num3 != num2) {
  console.log(
    `{num3} Value And Type Is Not The Same As {num1} And Type Is Not The Same As {num2}`
  );
}
///////////////////////////////////////////////////////////////////////////////////////////////////
// Edit What You Want Here

let num1 = 30;

let num2 = 1;
let num3 = 30;
let num4 = 80;
// Condition 1
if (num1 > num2) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 2
if (num1 > num2 && num1 < num4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 3
if (num1 > num2 && num1 === num3) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 4
if (num1 + num2 < num4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 5
if (num1 + num3 < num4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 6
if (num1 + num2 + num3 < num4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 7
if (num4 - (num1 + num3) + num2 === 21) {
  console.log("True");
} else {
  console.log("False");
}
