// Iteration 1: Names and Input

const hacker1 = "Alexandra";
console.log ("The driver's name is "+ hacker1); 

const hacker2 = "Arthur";
console.log (`The navigator name is ${hacker2}`); 

// Iteration 2: Conditionals

if (hacker1.length>hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
} else if (hacker2.length>hacker1.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`); 
} else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`); 
} 

// Iteration 3: Loopsgit

// 3.1

let i = 0;
let nameUppercaseHacker1 = "";

while (i < hacker1.length) {;
    nameUppercaseHacker1 += hacker1[i].toUpperCase() + " ";
    i++;
}

console.log(nameUppercaseHacker1);

// 3.2

let nameLowercaseHacker2 = "";

for (let i = hacker2.length -1; i >= 0; i--) {
    nameLowercaseHacker2 += hacker2[i].toLowerCase();
}

console.log(nameLowercaseHacker2);

// 3.3

let j = 0;
let longueurDuNomLePlusCourt = hacker1.length < hacker2.length ? hacker1.length : hacker2.length;

while (j < longueurDuNomLePlusCourt) { 
    if (hacker1 === hacker2) {
        console.log("What?! You both have the same name?");
    } else {
        if (hacker1[j] < hacker2[j]) {
            console.log('The driver\'s name goes first.');
            break;
        } else if (hacker1[j] > hacker2[j]) {
            console.log("Yo, the navigator goes first definitevely.");
            break;
        }      
    }
 j++
}

