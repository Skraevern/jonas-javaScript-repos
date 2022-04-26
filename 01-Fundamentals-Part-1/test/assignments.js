/*
//Lecture Values and Vaiables
const country = "Norway";
const continent = "Europe";
let populationNorway = 5.32;

//Lecture data types
console.log(country);
console.log(continent);
console.log(populationNorway);

//Lecture let,const and var
const isIsland = false
let language = "Norwegian";
console.log(language);

console.log(isIsland);
console.log(typeof isIsland);
console.log(typeof country);
console.log(typeof continent);
console.log(typeof population);
console.log(typeof language);

//Lecture basic operators
console.log(populationNorway / 2);
console.log(populationNorway + 1);
let populationFinland = 6
console.log(populationNorway > populationNorway);

//const description = country + " " + "is in" + " " + continent + " " + "and its" + " " + populationNorway + " " + "people speak" + " " + language + "."

//Strungs and Template Literals
const description = `${country} is in ${continent} and its ${populationNorway} people speak ${language}.`

console.log(description);

//LECTURE: Taking Decisions: if/else statments
const averagePopulation = 33;
const difference = (averagePopulation - populationNorway);

if (populationNorway > averagePopulation) {
    console.log(`${country}'s population of ${populationNorway} millions is above ${continent}'s average population of ${averagePopulation} million. `);
} else {
    console.log(`${country}'s population of ${populationNorway} millions is below ${continent}'s average population of ${averagePopulation} millions. In fact it is ${difference} millions below.`)
}
//LECTURE: Type Conversion and Coercion
//1. Predict the result of these 5 operations without executing them:
//'9' - '5'; = 4
//'19' - '13' + '17'; 617
//'19' - '13' + 17; 617
//'123' < 57;
//5 + 6 + '4' + 9 - 4 - 2;
//2. Execute the operations to check if you were right

console.log('9' - '5') // 4
console.log('19' - '13' + '17')// 617
console.log('19' - '13' + 17) //23
console.log('123' < 57) //false
console.log(5 + 6 + '4' + 9 - 4 - 2) // 1143

//LECTURE: Equality Operators: == vs. ===
let numNeighbours = Number(prompt(`How many neighbour countries does your country have?`));

if (numNeighbours === 1) {
    console.log(`Only one border?!`);
} else if (numNeighbours !== 1) {
    console.log(`More than 1 border!`);
} else if (numNeighbours === 0) {
    console.log(`No borders`);
}

//LECTURE: Logical Operators

if (language === `English` && populationNorway < 50 && !isIsland) {
    console.log(`Sarah should live in ${country}`);
} else console.log(`${country} does not meet Sarah's criteria :(`)

//Lecture: Switch Statments
switch (language) {
    case `Chinees` && `Mandarin`:
        console.log('MOST number of native speakers!')
        break;
    case `Spanish`:
        console.log('2nd place in number of native speakers')
        break;
    case `English`:
        console.log('3rd place')
        break;
    case `Hindu`:
        console.log('Number 4')
        break;
    case `Arabic`:
        console.log(`5th most spoken language`)
        break;
    default:
        console.log('Great language too :D')
        break;
}
//LECTURE: The Conditional (Ternary) Operator
console.log(`${country}'s population is ${populationNorway > averagePopulation ? "above" : "below"} average`);
*/