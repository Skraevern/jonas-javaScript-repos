//LECTURE: Activate strict mode
"use strict"; //Always use strict
/*
console.log(`Jeg gleder meg til å få fiber`);

let hasDriversLicense = false;
const passTest = true;

//if (passTest) hasDriverLicense = true;
if (hasDriversLicense) console.log(`I can drive`);

//const interface = `Audio`; //Strict warns if reserved
//const private = 534;
*/


/*
//LECTURE Function declaration
// Function is a piece of code whuch can be used over and over
function logger() {
    console.log(`My name is Thorgrim`);
}

//Calling / Running / Invoking fuction
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges`;
    return juice;
}

fruitProcessor(5, 0); //Arguments

console.log(fruitProcessor());

let appleJuice = fruitProcessor(5, 0); //Capturing value in variable
console.log(appleJuice);

appleJuice = fruitProcessor(1, 1);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice)

Number(`23`); //Also a function
*/


/*
//LECTURE Function vs. Expression
function calcAge10(birthYear) {
    const age = 2037 - birthYear; //Trenger egentlig ikke dette!!!
    return age;
}
//Function delcarations 
function calcAge1(birthYear) {
    return 2037 - birthYear;
}

const age1 = calcAge1(1991);
console.log(age1);

//Function expression. Lagrer function i en variable
// Bruk hovedsakelig denne. Ryddigere
const calcAge2 = function(birthYear) {
    return 2037 - birthYear;
}
const age2 = calcAge2(1991);
console.log(age2)

//Function declaration can be called before they are defiened
*/

/*
//LECTURE ARROW Functions
//Function expression example
const calcAge2 = function(birthYear) {
    return 2037 - birthYear;
}

// Arrow function brukes bare til enkel 1 function
const calcAge3 = birthYear => 2037 - birthYear//Will automaticly return function
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1991, `Jonas`));
console.log(yearsUntilRetirement(1980, `Bob`));
*/

/*
//LECTURE Functions calling other functions

function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);
    const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges.`;
    return juice;
}

console.log(fruitProcessor(2,3));
*/

/*
//LECTURE Intruduction to Arrays

const friend1 = `Micheal`;
const friend2 = `Steven`;
const friend3 = `Peter`;

const friends = [`Michael`, `Steven`, `Peter`]; //Vanligste måte å lage arrays
console.log(friends);

const years = new Array(1991, 1984, 2008, 2020)

console.log(friends[0]);
console.log(friends[2]);
console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = `Jay`;
console.log(friends);
// friends = [`Bob`, `Alice`]; //Illiegal

const firstName = `Jonas`;
const jonas = [`Jonas`, `Schmedtmann`, 2037 - 1991, `teacher`, `${friends}`];
console.log(jonas);
console.log(jonas.length);

//Excercise
const calcAge = function(birthYear) {
    return 2037 - birthYear
}
const years2 = [1990, 1967, 2002, 2010, 2018];


const age1 = calcAge(years2[0]);
const age2 = calcAge(years2[1]);
const age3 = calcAge(years2[years2.length - 1]);
console.log(age1, age2, age3);

const ages = [calcAge(years2[0]), calcAge(years2[1]), calcAge(years2[years2.length - 1])];
console.log(ages);
*/

/*
//LECTURE Basuc array operation (methots)
//Add elements
const friends = [`Michael`, `Steven`, `Peter`];
friends.push(`Jay`); //Legger til i slutten av en array
console.log(friends);

friends.unshift(`John`), //Legger til i starten
console.log(friends);

//Remove elements
//friends.pop(); //Fjerner siste æ
const popped = friends.pop(); //fjerner siste og legger den i en variabel
console.log(friends);
console.log(popped);

friends.shift(); // Removes first element
console.log(friends);

console.log(friends.indexOf(`Steven`));
console.log(friends.indexOf(`Bob`));
console.log(friends.includes(`Steven`));
console.log(friends.includes(`Bob`))
friends.push(23);
console.log(friends);
console.log(friends.includes(`23`)); // Arreys does not do type conversion
console.log(friends.includes(23));
friends.pop();
friends.push(`23`);
console.log(friends);

if (friends.includes(`Peter`)) {
    console.log(`You have a friend called steven!`);
}
*/


//LECTURE intruduction to objects
const jonasArray = [
`Jinas`,
`Schmedtmann`,
2037 - 1991,
`teacher`,
[`Micheal`, `Peter`, `Steven`]
];




