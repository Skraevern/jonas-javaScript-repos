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
//!!!!!!!!LECTURE Basuc array operation (methots)
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


/*
//      Lecture Introductionto Objects
//Objects kan gi navn til "properties"

// Arrey
const jonasArrey = [
    `Jonas`,
    `Schmedtmann`,
    2037 - 1991,
    `teacher`,
    [`Michael`, `Peter`, `Steven`]
];

// Object litteral syntax
const jonas = { //Curly når ikke kode er Objeck
    firstName: `Jonas`,
    lastName: `Schmedtmann`,
    age: 2037 - 1991,
    friends: [`Michael`, `Peter`, `Steven`]
};

console.log(jonas);
*/

/*
//      LECTURE dot vs bracket notation

const jonas = { //Curly når ikke kode er Objeck
    firstName: `Jonas`,
    lastName: `Schmedtmann`,
    age: 2037 - 1991,
    friends: [`Michael`, `Peter`, `Steven`]
};

console.log(jonas);

// Dot notation
console.log(jonas.lastName);
// Bracket notation
console.log(jonas[`lastName`]);

const nameKey = `Name`;
console.log(jonas[`first` + nameKey]);
console.log(jonas[`last` + nameKey]);

let interestedIn = prompt(`What do you want to know about Jonas? Choose between firstName, lastName, age, job and friends`);


if (jonas[interestedIn]) {
    console.log(jonas[interestedIn])
} else {
    alert(`Wrong request. Try again.`)
};

// Add new properties
// Dot
jonas.location = `Portugal`
// Dot
jonas[`twitter`] = `@jonasschmedtmann`;
console.log(jonas)

// Challange
// `Jonas has 3 friends, and his best friend is called Michael`
console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`);
*/

/*
//      LECTURE OBJECT METHODS

const jonas = {
    firstName: `Jonas`,
    lastName: `Schmedtmann`,
    birthYear: 1991,
    job: `teacher`,
    friends: [`Micheal`, `Peter`, `Steven`],
    hasDriversLicense: true,
    

    //calcAge: function (birthYear) {
    //return 2037 - this.birthYear
    //},

    //calcAge: function () {
    //console.log(this);
    //return 2037 - this.birthYear;
    //}

    calcAge: function () {
        this.age = 2037 - this.birthYear;
        return this.age;
    },
    getSummary: function () {
        return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and he has ${this.hasDriversLicense ? "a" : "no"} driverslicense`
    }
};

jonas.calcAge();
jonas.getSummary();

console.log(jonas)
console.log(jonas.age);
console.log(jonas.getSummary())
//console.log(jonas[`calcAge`](1991));

//Challange
// `Jonas is a 46 year old teacher, and he has a drivers licence.`

//console.log(jonas.getSummary());
*/


/*
//LECTURE: Iteration for the loop
// console.log(`Lifting weights repetition 1`);
// console.log(`Lifting weights repetition 2`);
// console.log(`Lifting weights repetition 3`);
// console.log(`Lifting weights repetition 4`);
// console.log(`Lifting weights repetition 5`);
// console.log(`Lifting weights repetition 6`);
// console.log(`Lifting weights repetition 7`);
// console.log(`Lifting weights repetition 8`);
// console.log(`Lifting weights repetition 9`);
// console.log(`Lifting weights repetition 10`);

// for loop. Has a counter
// for loop keeps running while condition is true
for(let rep = 1; rep <= 10; rep ++) {//++ = rep = rep + 1
    console.log(`Lifting weights repetition ${rep}`);
};
// rep = 1 (starter på 1) reo <= 10 (opp til 10 før slutt) rep ++ legger til 1 hver gang
*/

/*
//LECTURE Looping arrays, breaking and continuing

const jonasArrey = [
    `Jonas`,
    `Schmedtmann`,
    2037 - 1991,
    `teacher`,
    [`Micheal`, `Peter`, `Steven`],
    true,
]

const types = [];

//console.log(jonasArrey[0])
//console.log(jonasArrey[1])
//console.log(jonasArrey[2])
// jonas[5] does not exist

for(let i = 0; i < 5  ; i++ ) {//Arrey is 0 based
    console.log(jonasArrey[i], typeof jonasArrey[i]); //Vil ikke telle med true i Arrey fordi det ikke er et tall (<5)
}

for(let i = 0; i < `${jonasArrey.length}`  ; i++ ) {//Arrey is 0 based
    console.log(jonasArrey[i], typeof jonasArrey[i]);

    // Filling types array
   // types[i] = typeof jonasArrey;[i]; 
   types.push(typeof jonasArrey[i]);
}

console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];
 
for (let i = 0 ; i < years.length; i++) {
    ages.push(2037 - years[i]);
}

console.log(ages);

// continue and break
console.log(`--- Only Strings ---`);
for (let i = 0; i < jonasArrey.length; i++) {
    if(typeof jonasArrey[i] !== `string`) continue;

    console.log(jonasArrey[i], typeof jonasArrey[i]);
}

console.log(`--- Break with numbers ---`); // stops when first number is found
for (let i = 0; i < jonasArrey.length; i++) {
    if(typeof jonasArrey[i] === `number`) break;

    console.log(jonasArrey[i], typeof jonasArrey[i]);
}
*/

/*
// --- LECTURE LOOPING BACKWARDS AND LOOPS IN LOOPS ---

const jonas = [
    `Jonas`,
    `Schmedtmann`,
    2037 - 1991,
    `teacher`,
    [`Micheal`, `Pieter`, `Steven`],
    true,
];

// 0. 1. ..., 4
// 4, 3, ---, 0

for(let i = jonas.length - 1; i >= 0; i--) {
    console.log(i, jonas[i]);
}


// Loop within loop
for (let excercise = 1; excercise < 4; excercise++) {
console.log(`---------Startomg excercise ${excercise}---------`);

for (let rep = 1; rep < 6; rep++) {
console.log(`Excercise ${excercise} Lifting weight repetitian ${rep}`);
}
}
*/

// --- LECTURE THE WHILE LOOP

//for (let rep = 1; rep <=10; rep++) {
    //console.log(`Lifting weights repetition ${rep}`);
//}

let rep = 1
while (rep <= 10) {
    console.log(`WHILE: Lifting weights repetition ${rep}`);
    rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;
console.log(dice);

while (dice !== 6) {
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice === 6) console.log(`You rolled a 6`)
}