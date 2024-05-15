let promMsg = prompt("Print Number From – To", "Example: 5-20");
let promNum = promMsg.split("-").sort((a, b) => a - b);

for (i = +promNum[0]; i <= +promNum[1]; i++) {
  let num = document.createElement("div");
  num.textContent = i;
  document.body.append(num);
}

// ##############################################################################################################

// Task 2

let parent = document.createElement("div");
let h1 = document.createElement("h1");
let p = document.createElement("p");
let btn = document.createElement("butteon");

function popup() {
  h1.textContent = "Welcome";
  p.textContent = "Welcome To Dragon Web School";
  btn.textContent = "Rem";

  parent.append(h1, p, btn);
  document.body.append(parent);

  btn.addEventListener("click", function () {
    btn.parentElement.remove();
  });

  document.body.style.cssText = "font-family: arial, Tahoma";
  parent.style.cssText =
    "width: 450px; height: 150px; background-color: #eee; padding: 20px; border: 1px solid #ccc; margin: 20px auto; position: relative; text-align: center";
  btn.style.cssText =
    "width: 30px; height: 50px; background-color: red; border: none; border-radius: 50%; position: absolute; top: -10px; left:0";
}

setTimeout(popup, 5000);
