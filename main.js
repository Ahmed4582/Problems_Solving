/* Solve Problem one */

function num(number) {
  document.getElementById("demo").innerHTML = `${"The Number Is"} ${number}`;
}
num(window.prompt("Enter a Number"));
//////////////////////////////////////////////////////////////////////////
/* Solve Problem two */

function num2(number2) {
  console.log(number2);
  if (number2 % 4 == 0 && number2 % 3 == 0) {
    document.getElementById("demo").innerHTML = "The Number Is True";
  } else {
    document.getElementById("demo").innerHTML =
      "The Number Is False Please Enter another Number";
  }
}
num2(window.prompt("Enter a Number"));
//////////////////////////////////////////////////////////////////////////
/* Solve Problem three */

function compar(x, y) {
  if (Number(x) > Number(y)) {
    document.getElementById("demo").innerHTML = `${x} ${"Is Max Number"}`;
  } else if (Number(x) < Number(y)) {
    document.getElementById("demo").innerHTML = `${y} ${"Is Max Number"}`;
  } else {
    document.getElementById(
      "demo"
    ).innerHTML = `${"The Two Numbers are Equal"}`;
  }
}
compar(
  window.prompt("Enter a Number one"),
  window.prompt("Enter a Number two")
);
/////////////////////////////////////////////////////////////////////////////
/* Solve Problem Four */

function compar2(Num1) {
  if (Number(Num1) < 0) {
    document.getElementById("demo").innerHTML = `${"The Number Is Negative"}`;
  } else if (Number(Num1) == 0) {
    document.getElementById(
      "demo"
    ).innerHTML = `${"The Number Is Equal Zero "}`;
  } else {
    document.getElementById("demo").innerHTML = `${"The Number Is Postive"}`;
  }
}
compar2(window.prompt("Enter a Number"));
/////////////////////////////////////////////////////////////////////////////////
/* Solve Problem Five */

function compar3(n1, n2, n3) {
  if (
    Number(n1) > Number(n2) &&
    Number(n1) > Number(n3) &&
    Number(n2) > Number(n3)
  ) {
    document.getElementById(
      "demo"
    ).innerHTML = `${n1} ${"Is Max Number"} && ${n3} ${"Is Min Number"}`;
  } else if (
    Number(n1) > Number(n2) &&
    Number(n1) > Number(n3) &&
    Number(n3) > Number(n2)
  ) {
    document.getElementById(
      "demo"
    ).innerHTML = `${n1} ${"Is Max Number"} && ${n2} ${"Is Min Number"}`;
  } else if (
    Number(n2) > Number(n1) &&
    Number(n2) > Number(n3) &&
    Number(n1) > Number(n3)
  ) {
    document.getElementById(
      "demo"
    ).innerHTML = `${n2} ${"Is Max Number"} && ${n3} ${"Is Min Number"}`;
  } else if (
    Number(n2) > Number(n1) &&
    Number(n2) > Number(n3) &&
    Number(n3) > Number(n1)
  ) {
    document.getElementById(
      "demo"
    ).innerHTML = `${n2} ${"Is Max Number"} && ${n1} ${"Is Min Number"}  `;
  } else if (
    Number(n3) > Number(n1) &&
    Number(n3) > Number(n2) &&
    Number(n1) > Number(n2)
  ) {
    document.getElementById(
      "demo"
    ).innerHTML = `${n3} ${"Is Max Number"} && ${n2} ${"Is Min Number"}`;
  } else if (
    Number(n3) > Number(n1) &&
    Number(n3) > Number(n2) &&
    Number(n2) > Number(n1)
  ) {
    document.getElementById(
      "demo"
    ).innerHTML = `${n3} ${"Is Max Number"} && ${n1} ${"Is Min Number"}`;
  } else {
    document.getElementById(
      "demo"
    ).innerHTML = `${n1} = ${n2} = ${n3} ${"The Nubers are Equal"}`;
  }
}
compar3(
  window.prompt("Enter a Number one"),
  window.prompt("Enter a Number two"),
  window.prompt("Enter a Number Three")
);

setInterval(function () {
  let hours = new Date().getHours();
  let min = new Date().getMinutes();
  let sec = new Date().getSeconds();

  document.querySelector(".Hours").innerHTML = hours;
  document.querySelector(".min").innerHTML = min;
  document.querySelector(".sec").innerHTML = sec;

  if (hours < 10) {
    hours = "0" + hours;
  }
  if (min < 10) {
    min = "0" + min;
  }
  if (sec < 10) {
    sec = "0" + "sec";
  }
}, 1000);
document.addEventListener("keydown", function (e) {
  console.log(e);

  if (e.code == "Space") {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);

    document.body.style.backgroundColor = `rgb(${r},${g},${b})`;
  }
});
