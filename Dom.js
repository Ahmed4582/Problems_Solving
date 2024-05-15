let myimg = document.images;
for ( i = 0; i < myimg.length; i++ ){
    myimg[i].src= "https://elzero.org/wp-content/themes/elzero/imgs/logo.png"
    myimg[i].alt= "Elzero Logo"
    myimg[i].style="background-color: blue"
}

// ############################################################################
Task Three

let input = document.querySelector("input");
let res = document.getElementsByClassName("result")[0];

input.oninput = function(){
    res.innerHTML = `${input.value} USD Dollar = ${input.value * 15.6} Egyptian Pound`
} 

// ############################################################################
// Task Four

let One = document.querySelector(".one"); 
let Two = document.querySelector(".two"); 


One.title = One.className;
Two.title = Two.className;

One.textContent = One.className;
Two.textContent = `${Two.className} ${Two.attributes.length}`

// ############################################################################
// Task Five

let myimgs = document.images;
for ( i = 0; i < myimgs.length; i++ ){
    if(myimgs[i].hasAttribute("alt")){
        myimgs[i].setAttribute("alt", "Old");
    }
    else{
        myimgs[i].setAttribute("alt", "Elzero New");
    }
}
// ############################################################################
// Task Six 
let Elm = document.getElementsByName("elements")[0];
form = document.forms;
text = document.getElementsByName("texts")[0];
type = document.querySelector("select");
results = document.querySelector(".results");


form[0].onsubmit = function(el){
    el.preventDefault();
    document.querySelectorAll(".box").forEach(el => el.remove());

    for(let i = 1; i <= Elm.value; i++){

        let myEle = document.createElement(type.value);
        let myText = document.createTextNode(text.value);

        myEle.className = "box";
        myEle.title = "Element";
        myEle.id = `id-${i}`;

        myEle.style.display = "inline-block";
        myEle.style.color = "white";
        myEle.style.backgroundColor = "blue";
        myEle.style.padding = "10px"
        myEle.style.margin = "20px";
        myEle.style.borderRadius = ".5rem";
        myEle.style.width = "200px";
        myEle.style.textAlign = "center";

        myEle.appendChild(myText);
        results.appendChild(myEle);
    }
};


let input = document.querySelectorAll(".input");
submit = document.querySelector("[type='submit']");
box = document.querySelectorAll(".box");

for(let i = 0; i < input.length; i++ ){
    input[i].style.display = "block";
    input[i].style.border = "1px solid black";
    input[i].style.boxSizing = "border-box";
    input[i].style.padding = "10px"
    input[i].style.borderRadius = ".5rem";
    input[i].style.width = "200px";
    input[i].style.margin = "20px auto";
}

submit.style.display= "block";
submit.style.backgroundColor = "orange";
submit.style.margin = "20px auto";
submit.style.padding = "10px"
submit.style.color = "black";
submit.style.width = "200px"
submit.style.borderRadius = ".5rem"
submit.style.textAlign = "center"
submit.style.border = "none"

// ############################################################################
// Challange 101

let creat = el => document.createElement(`${el}`);

let head = creat("header");
let logo = creat("h1");
let list = creat("ul");
let content = creat("content");
let footer = creat("footer");

head.className = "website-head";
logo.className = "logo";
list.className = "menu";
content.className = "content";
footer.className = "footer"; 

head.append(logo);
head.append(list);
document.body.append(head);
document.body.append(content);
document.body.append(footer);

for( i = 1; i <= 15; i++){
    if(i <= 4 ){
        let menuList = creat("li");
        menuList.className = `menu-${i}`;
        list.append(menuList);
    }
    let prodBox = creat("div");
    let prodNum = creat("span");
    prodBox.className = "product";
    prodBox.textContent = "Product";
    prodNum.textContent = `${i}`
    prodBox.prepend(prodNum);
    content.append(prodBox);

    prodBox.style.cssText = "color: rgb(136, 136, 136); padding: 20px; background-color: white; border: 1px solid rgb(221, 221, 221); width: calc((100% - 40px) / 3); border-radius: .5rem; text-align: center; box-sizing: border-box ";
    prodNum.style.cssText= "color: black; margin-bottom: 20px; display: block; font-size: 40px"
};


logo.textContent = "Ahmed"
document.querySelector(".menu-1").textContent = "Home";
document.querySelector(".menu-2").textContent = "Service";
document.querySelector(".menu-3").textContent = "About";
document.querySelector(".menu-4").textContent = "Contact";
footer.textContent = "Copyright 2024";

document.body.style.cssText = "background-color: rgb(236, 236, 236); margin: 0; ";
head.style.cssText = "display: flex; align-items: center; justify-content: space-between; padding: 15px; background-color: white";
logo.style.cssText = "font-size: 50px; color: rgb(35, 169, 111)";
list.style.cssText = "display: flex; font-size: 20px; justify-content: space-between; gap: 15px; list-style: none";
content.style.cssText = "display: flex; flex-wrap: wrap; gap: 20px; justify-content: center; box-sizing: border-box; min-height: calc(100vh - 142px)";
footer.style.cssText = " background-color: rgb(35, 169, 111); color: white; font-size: 40px; font-weight: blod; padding: 20px; text-align: center"


// ##################################################################################################################

// Task Two

let add = document.querySelector(".classes-to-add");
let remove = document.querySelector(".classes-to-remove");
let Cur = document.querySelector("[title='Current']");
let Cls = document.querySelector(".classes-list div");

function addRem(){
    document.querySelectorAll("span").forEach(el=> el.remove());

    for(i = 0; i < this.value.trim().split(" ").length; i++){
        if(add.value){
            Cur.classList.add(add.value.toLowerCase().trim().split(" ")[i]);
        }
        if(remove.value){
            Cur.classList.remove(remove.value.toLowerCase().trim().split(" ")[i]);
        }
    }
    this.value = "";

    if(Cur.classList.length){
        [...Cur.classList].sort().forEach(el=>{
            let clSpan = document.createElement("span");
            clSpan.textContent = el;
            Cls.append(clSpan);
        })
    }
}
add.onblur = addRem;
remove.onblur = addRem;

// ##################################################################################################################
let our = document.querySelector(".our-element")
let Pa = document.querySelector("p");
let Start = our.cloneNode();
let End = our.cloneNode();
Pa.remove();


function add(el, contant){
    el.className  = contant.toLowerCase();
    el.title = `${contant} element`;
    el.setAttribute("data-value", contant);
    el.textContent = contant
}
add(Start, "Start");
add(End, "End");

our.before(Start);
our.after(End)

// #######################################################################################################################
// Task 4

let Span = document.getElementsByTagName("div")[0];
console.log(Span.lastChild.nodeValue.trim())


// #######################################################################################################################
// Task 5

[...document.body.children].forEach(
    el => (el.onclick = _ => console.log(`This IS ${el.localName}`))
)