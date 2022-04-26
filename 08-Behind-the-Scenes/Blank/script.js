"use strict";

function CalcAge(birthYear) {
  const age = 2037 - birthYear;
  console.log(firstName);

  function printAge() {
    const output = `${firstName}˝, You are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      const str = `Oh, youˆre a millenial ${firstName}`;
      console.log(str);
    }
    //console.log(str);
    console.log(millenial);
  }
  printAge();
  return age;
}

const firstName = `Jonas`;
CalcAge(1991);
//console.log(age);
//printAge();

// Promitive types
let lastName = `Williams`;
let oldLastName = lastName;
lastName = `Davis`;
console.log(lastName, oldLastName);

// Reference Types
const jessica = {
  firstName: `Jessica`,
  lastName: `Williams`,
  age: 27,
};

const marriedJessica = jessica;
marriedJessica.lastname = `Davis`;
console.log(`Before marriage`, jessica);
console.log(`After marriage`, marriedJessica);

// marriedJessica = {};

//Copying objects
const jessica2 = {
  firstName: `Jessica`,
  lastName: `Williams`,
  age: 27,
  family: [`Alice`, `Bob`],
};

const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = `Davis`;
console.log(`Before marriage`, jessica2);
console.log(`After marriage`, jessicaCopy);

jessicaCopy.family.push(`Mary`);
jessicaCopy.family.push(`John`);
console.log(`Before marriage`, jessica2);
console.log(`After marriage`, jessicaCopy);
