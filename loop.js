/*
Loop
- For
for ([1] [2] [3]) {
    Block Of Code
}

*/
let start = 10;
let end = 100;
let exclude = 40;

for(let i = start; i <= end; i+= start){
    if(i === exclude){
        continue;
    }
    console.log(i);
}

let start = 10;
let end = 0;
let stop = 3;

for(let i = start; i > end; i--){
    if(i >= 10){
        console.log(`${i}`)
    }
    if(i < 10 ){
        console.log(`0${i}`)
    }
    if(i === stop) {
        break;
    }
}

let start = 1;
let end = 6;
let breaker = 2;
for(let i = start; i <= end; i++){
    console.log(i);
    for(let j = breaker; j < end; j +=2){
        
        console.log(`--${j}`)
    }
}


let index = 10;
let jump = 2;

let i = index;

for (;;) {
    console.log(i);
    i-=2;
    if(i === jump){
        break;
    }
}

let friends = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
let letter = "a";

// Output
for(let i = 0; i< friends.length; i++){
    if(friends[i].indexOf(letter) === -1){
        continue;
    }
    console.log(`${i} =>${friends[i]}`);
}

let start = 0;
let swappedName = "elZerO";
let result ="";

for(let i = start; i < swappedName.length; i++){
    if(swappedName[i] === swappedName[i].toLowerCase()){
        result += swappedName[i].toUpperCase();
    }
    else{
        result+=  swappedName[i].toLowerCase();
    }

}
console.log(result)



let start = 0;
let mix = [1, 2, 3, "A", "B", "C", 4];

for(let i= start + mix.indexOf(2); i< mix.length; i++){
    
    if(typeof mix[i] === 'string'){
        continue;
    }
    console.log(mix[i]);
    
// }


/*
Loop Challenge
*/

let myAdmins = ["Ahmed", "Osama", "Sayed", "Stop", "Samera"];
let myEmployees = ["Amgad", "Samah", "Ameer", "Omar", "Othman", "Amany", "Samia", "Anwar"];
count = 1;

document.write(`<div>We Have ${myAdmins.length} Admins</div>`);
document.write("<hr>")

for(let i = 0 ; i < myAdmins.length; i++){
    if(myAdmins[i] === "Stop"){
        break;
    }
    document.write(`<div> Them Admin For Team ${i+1} Is ${myAdmins[i]}</div>`)
    document.write("<br>")
    document.write(`<h3>Team Members:</h3>`)
    document.write("<br>")
    for(let j = 0; j<myEmployees.length; j++){
        if(myEmployees[j].startsWith("A") && myAdmins[i].startsWith("A")){
            document.write(`<p>-${count++} ${myEmployees[j]}</p>`)
        }
        else if(myEmployees[j].startsWith("O") && myAdmins[i].startsWith("O")){
            document.write(`<p>-${count++} ${myEmployees[j]}</p>`)
        }
        else if(myEmployees[j].startsWith("S") && myAdmins[i].startsWith("S")){
            document.write(`<p>-${count++} ${myEmployees[j]}</p>`)
        }
        
        
    }
    document.write(`<hr>`)

}


let person = {
    name:"Ahmed",
    age:22,
    ismarad: true,
    wife:{
        name:"Mai",
        age:20,
        son:{
            name:"Naser",
        }
    }

}
document.write(person.wife.son.name)


let friends = ["Ahmed", "Joo", "Seaf", "Said"]
for(let i = 0; i < friends.length; i++){
    console.log(friends[i])
} 
let protecd = ["Ahmed", {
    name:"omar",
    wife:{
        name:"aya",
        eat :function(meal){
            console.log("Balhan" + meal);
        }
    }
}, "Joo","Seaf","Said"]


protecd[1].wife.eat(" fish")

let names = ["Ahmed", "Naser", "Joo", "Seaf"]



if(onclick === "ay"){
    names.unshift();
}
console.log(names)