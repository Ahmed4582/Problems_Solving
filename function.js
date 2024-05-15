/*
  Function
  - What Is Function ?
  - User-Defined vs Built In
  - Syntax + Basic Usage
  - Example From Real Life
  - Parameter + Argument
  - Practical Example

  - Return
  - Automatic Semicolon Insertion [No Line Terminator Allowed]
  - Interrupting

    - Default Function Parameters
    - Function Parameters Default [Undefined]
    - Old Strategies [Condition + Logical Or]
    - ES6 Method

- Rest Parameters
- Only One Allowed
    - Must Be Last Element
*/

/*
  Function - Random Argument Challenge
  ====================================
  Create Function showDetails
  Function Accept 3 Parameters [a, b, c]
  Data Types For Info Is
  - String => Name
  - Number => Age
  - Boolean => Status
  Argument Is Random
  Data Is Not Sorted Output Depend On Data Types
  - Use Ternary Conditional Operator
*/

/*Challeage One */

function showDetails(a, b, c) {
  let name;
  let age;
  let status;

  if (typeof a === "string") {
    name = a;
  } else if (typeof b === "string") {
    name = b;
  } else if (typeof c === "string") {
    name = c;
  }
  if (typeof a === "number") {
    age = a;
  } else if (typeof b === "number") {
    age = b;
  } else if (typeof c === "number") {
    age = c;
  }
  if (typeof a === "boolean") {
    status = a;
  } else if (typeof b === "boolean") {
    status = b;
  } else if (typeof c === "boolean") {
    status = c;
  }
  if (status === true) {
    status = "You Are Available For Hire";
  } else {
    status = "You Are Not Available For Hire";
  }

  typeof a === "string"
    ? (name = a)
    : typeof a === "number"
    ? (age = a)
    : (a = status);
  typeof b === "string"
    ? (name = b)
    : typeof b === "number"
    ? (age = b)
    : (b = status);
  typeof c === "string"
    ? (name = c)
    : typeof c === "number"
    ? (age = c)
    : (c = status);
  status === true
    ? (status = "You Are Available For Hire")
    : (status = "You Are Not Available For Hire");
  document.write(`<h4>Hello ${name}, Your Age Is ${age}, ${status}</h4>`);
}

showDetails("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
showDetails(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
showDetails(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
showDetails(true, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"

/* TASK ONE*/
function sayHello(theName, theGender) {
  if (theGender === "Male") {
    console.log(`Hello Mr ${theName}`);
  } else if (theGender === "Female") {
    console.log(`Hello Miss ${theName}`);
  } else {
    console.log(`Hello  ${theName}`);
  }
}
// Needed Output
sayHello("Osama", "Male"); // "Hello Mr Osama"
sayHello("Eman", "Female"); // "Hello Miss Eman"
sayHello("Sameh"); // "Hello Sameh"

/* TASK TWO*/
function calculate(firstNum, secondNum = "Uk", operation = "Uk") {
  if (secondNum === "Uk") {
    console.log(`Second Number Not Found`);
  } else if (operation === "Uk") {
    console.log(firstNum + secondNum);
  } else if (operation === "add") {
    console.log(firstNum + secondNum);
  } else if (operation === "subtract") {
    console.log(firstNum - secondNum);
  } else if (operation === "multiply") {
    console.log(firstNum * secondNum);
  }
}

// Needed Output
calculate(20); // Second Number Not Found
calculate(20, 30); // 50
calculate(20, 30, "add"); // 50
calculate(20, 30, "subtract"); // -10
calculate(20, 30, "multiply"); // 600

/*TASK THREE*/
function ageInTime(theAge) {
  if (theAge > 10 && theAge < 100) {
    console.log(theAge * 12 + " " + "Months");
    console.log(theAge * 12 * 4 + " " + "Weeks");
    console.log(theAge * 12 * 4 * 7 + " " + "Days");
  } else {
    console.log("Age Out Of Range");
  }
}

// Needed Output
ageInTime(110); // Age Out Of Range
ageInTime(38); // Months Example => 456 Months

/*TASK FOUR*/

function createSelectBox(startYear, endYear) {
  for (let i = startYear; i <= endYear; i++) {
    document.write(`<select>`);
    document.write(`<option value="${i}">${i}</option>`);
    document.write(`</select>`);
  }
}
createSelectBox(2000, 2021);

/*TASK FIVE*/
function calc(...nums){
    let res = 1;
    for(let i = 0 ; i < nums.length; i++){
        if(typeof nums[i] !== 'number'){
            continue;
        }
        res *= nums[i];

    }
    console.log(res);
}
calc(10, 20); // 200
calc("A", 10, 30); // 300
calc(100.5, 10, "B"); // 1000

/*
  Function Arrow Challenges
*/

[1] One Statement In Function
[2] Convert To Arrow Function
[3] Print The Output [Arguments May Change]

let names = function (...names) {
    return `String [${names.join("], [")}] => Done ! `;
};
let names = (...names) => `String [${names.join("], [")}] => Done ! `;

console.log(names("Osama", "Mohamed", "Ali", "Ibrahim"));
String [Osama], [Mohamed], [Ali], [Ibrahim] => Done !

/* ================================= */

[1] Replace ??? In Return Statement To Get The Output
[2] Create The Same Function With Regular Syntax
[3] Use Array Inside The Arguments To Get The Output

let myNumbers = [20, 50, 10, 60];

let calc = (one, two, ...nums) => one + two + nums[0] ;

  console.log(calc(10,myNumbers[0], myNumbers[1])); // 80

/*TASK ONE*/

function getDetails(zName, zAge, zCountry) {
    function namePattern() {
        return `${zName.slice(0, zName.indexOf(" "))}${zName.substr(zName.indexOf(" "), 2).toUpperCase()}`;
    }
    namePattern();
    function ageWithMessage() {
        return `Your Age Is ${parseInt(zAge)}`;
    }
    ageWithMessage();
    function countryTwoLetters() {
        return `${zCountry.slice(0,2).toUpperCase()}`
    }
    countryTwoLetters();
    function fullDetails() {
      return `Hello ${namePattern()} ${ageWithMessage()} You Live In ${countryTwoLetters()}`
    }
    return fullDetails(); // Do Not Edit This
}

console.log(getDetails("Osama Mohamed", "38 Is My Age", "Egypt"));
  // Hello Osama M., Your Age Is 38, You Live In EG

console.log(getDetails("Ahmed ali", "32 Is The Age", "Syria"));
  // Hello Ahmed A., Your Age Is 32, You Live In SY

/*TASK TWO*/

function itsMe() {
    return `Iam A Normal Function`;
}
let itsMe = itsMe => `Iam A Normal Function`;
  console.log(itsMe()); // Iam A Normal Function

function urlCreate(protocol, web, tld) {
    return `${protocol}://www.${web}.${tld}`;
}
let urlCreate = (protocol, web, tld) =>  `${protocol}://www.${web}.${tld}`;
console.log(urlCreate("https", "elzero", "org")); // https://www.elzero.org

/*TASK THREE*/

function checker(zName) {
    return function (status) {
      return function (salary) {
        return status === "Available" ? `${zName}, My Salary Is ${salary}` : `Iam Not Avaialble`;
      };
    };
  }
let checker = (zName, status, salary) => status === "Available" ? `${zName}, My Salary Is ${salary}` : `Iam Not Avaialble`;
  console.log(checker("Osama","Available",4000)); // Osama, My Salary Is 4000
  console.log(checker("Ahmed","Not Available",)); // Iam Not Avaialble

/* TASK FIVE*/
function specialMix(...data) {
    let res = 0;
    for (let i = 0 ; i < data.length; i++){
        if(isNaN(parseInt(data[i])) === false){
            res += parseInt(data[i]);
        }
    }
    if(res === 0){
        res = `All Is String`;
    }
    return res;
}

console.log(specialMix(10, 20, 30)); // 60
console.log(specialMix("10Test", "Testing", "20Cool")); // 30
console.log(specialMix("Testing", "10Testing", "40Cool")); // 50
console.log(specialMix("Test", "Cool", "Test")); // All Is Strings
