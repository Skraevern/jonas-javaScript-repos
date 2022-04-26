/*
let = js = "amazing";
console.log(40 + 8 + 23 - 10);

console.log("Jonas");
console.log(23);

let firstName = "Matilda";
let first = "Jonas";
let firstNamePerson //første bokstav liten !!!
let first_name_person // Vanlig i andre programspråk.

console.log(firstName);
console.log(firstName);
console.log(firstName);

// let 3years = 3; //Ulovlig variabel navn. Kan ikke starte med nummer

// variabelnavn kan kun inneholde store/små bokstaver, nummer _ og $

// let jonas&matilda = "JM" // ulovlig
let jonas_matilda = "JM";
// let new = 27; // Ulovlig.  New er reservert
// let function = 27; //function reservert
let _function = 27; //Lovlig med _ foran.
let name = "Jonas"; //Ikke bruk bare name. Bug/reserved
// let Person = "Jonas"; //Ikke start variabel med stor bokstav.
let PI = 3.1415; // store bokstaver i variabler er brukt konstantersom aldri endrer seg.

// Navngi alltid variabler med godt beskrevne ord
let myFirstJob = "Programmer";
let myCurrentJob = "Teacher";

let job1 = "Programmer";//Eksempler på dårlig beskriving
let job2 = "Teacher";

console.log(myFirstJob);

// PRIMITIVE DATA TYPES:
// 1. Number: Floating point numbers -> Used for decimals and integers.
let ageExample = 23;
// 2. Strings: Sequence of characters -> Used for tekst. Alltid i "" hvis ikke så er det variabel.
let firstNameExample = "Jonas";
// 3 Boolean: Logiccal type that can only be true or false -> Used for taking decisions
let fullAgeExample = true;
// 4. Undefiend: Value taken by a variable that is not yet defined("empty value")
let childrenExample;
// 5. Null: Also meanse "empty value"
// 6. Symbol (ES2015): Value that is unique and cannot be changed (Not usefull for now)
// 7. BigInt (ES 2020): Larger integers than the Number type can hold.

// JavaScript has dynamic typing: We do not have to manually define the data type of the value stored in a variable, data types ar determined automaticly.

// DATA TYPES
true;
console.log(true)
let javaSriptIsFun = true;
console.log(javaSriptIsFun);

console.log(typeof true);
console.log(typeof javaSriptIsFun);
console.log(typeof 23);
console.log(typeof "Jonas");

javaSriptIsFun = "YES!"
console.log(typeof javaSriptIsFun);

let year; //Define a valuable without defining.
console.log(year)
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null); //Bug


//LET CONST AND VAR
//Let and const is "new" var is the old way
//let is used for variable that can change later(Reasigning a value to a variable)
let age = 30;
age = 31;
//Const are used on variables that will not or can not change
const birthYear = 1991;
//birthYear = 1990 TypeError
//const job; const can`t be unnasigned

//var should not be used any longe
//var job = "programmer";
//job = "teacher";
//let is blocked scoped var is function scoped

// let, const or var does not NEED to be used. But is really bad practise.
lastName = "Scmedtmann";
console.log(lastName);


//BASIC OPERATORS
//Mathematic operators
const now = 2037
const ageJonas = now - 1991;
console.log(ageJonas);
const ageSarah = now - 2020;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3); //2 ** 3 = 2 * 2 * 2

const firstName1 = "Jonas";
const lastName1 = "Schmedtman";
console.log(firstName1 + " " + lastName1);

//typeof operator

//assignment operator
let x = 10 + 5;
x += 10; // x = x + 1+
x *= 4; // x = x * 4
x++; // x = x * 1
x--;
x--;
console.log(x);

// Comparison operators (Boolean)
console.log(ageJonas > ageSarah);
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);

// OPERATOR Precidence
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence
const now1 = 2037
const ageJonas1 = now - 1991;
const ageSarah1 = now - 2020;

console.log(now1 - 1991 > now - 2018);

console.log(25 - 10 - 5);

let x1, y1; // x = y = 10
x1 = y2 = 25 - 10 - 5;

const avarageAge = (ageJonas1 + ageSarah1) / 2;
console.log(ageJonas1, ageSarah1,"\\" avarageAge);

//STRINGS AND TEMPLATE LITERALS
const firstName = "Jonas";
const job = "teacher";
const birthYear = 1991;
const year = 2037;

const jonas = "I'm " + firstName + ", a " + (year - birthYear) + " year old " + job + "!";

console.log(jonas);

const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(jonasNew);

console.log(`just a regular string...`);

console.log("String with \n\
multiple \n\
lines");

console.log(`String
with
multible
lines`);

const age = 15;

if (age >= 18) {
    console.log(`Sarah can start driving license ;)`);
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is to young. Wait another ${yearsLeft} years :)`);
}

const birthYear = 1991;
let century;
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21
}
console.log(century);


//TYPE CONVERSION AND type COERSION
//Type conversion. Done manually
//Type coersion. When JavaScript automaticly converts.

// Type conversion
const inputYear = "1991";
console.log(Number(inputYear));
console.log(inputYear + 18);
console.log(Number(inputYear) + 18);

console.log(Number("Jonas"));
console.log(typeof NaN); //Not a number is still count as number

console.log(String(23), 23) //hvit string, lilla nu,,er

// Type coercion
console.log(`I am ` + 23 + ` years old`); //alt blir gjort om til string
console.log(`I am ` + (String)(23) + ` years old`); //Nødvendig i andre språk, men ikke JavaScript. Her skjer det automatisk

let n = `1` + 1; // 11
n = n - 1; // 11-1
console.log(n); //10


// TRUTH AND FALSY VALUES
// 5 falst values: 0, ``, undifiend, nill. NaN
//Will all be falls in bolean all other true

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean(`Jonas`));
console.log(Boolean({}));
console.log(Boolean(``));

let money = 0;
if (money) {
    console.log(`Don't spend it all ;)`);
} else {
    console.log(`You should get a job!`);
}
money = 10;
if (money) {
    console.log(`Don't spend it all ;)`);
} else {
    console.log(`You should get a job!`);
}

let height;
if (height) {
    console.log(`YAY! Height is defined`);
} else {
    console.log(`Height is not defined`);
}
height = 1;
if (height) {
    console.log(`YAY! Height is defined`);
} else {
    console.log(`Height is not defined`);
}
height = 0;
if (height) {
    console.log(`YAY! Height is defined`);
} else {
    console.log(`Height is not defined`);
}

//EQUALITY OPERATORS: == VS ===
// === exactly "Strict equality operator" no type coearsion
// == lose equality operator does type coersion (awoid as much as possible)
let age = 18;
if (age === 18) { //Exactly 18
    console.log(`You just became adult`);
} //exatly 18
age = 18.5;
if (age === 18) {
    console.log(`You just became adult`);
} else {
    console.log(`You are not an adult`)
}

// 18 === 18 true
// 18 === 19 false
// `18` == 18 true
// `18` == 18 false

age = `18`
if (age == 18) { //Exactly 18
    console.log(`You just became adult`);
} //exatly 18

const favourite = Number(prompt(`What is your favorite number`));
console.log(favourite);
console.log(typeof favourite);

if (favourite == 23) { // `23`== 23 virker for meg men ikke kursleder
    console.log(`Cool 23 is an amazing number`);
} else if (favourite === 7) {
    console.log(`7 is also a cool number`);
}
else if (favourite === 9) {
    console.log(`9 is ok...`);
}
else {
    console.log(`Number is not 23 or 7`);
}

if (favourite !== 23) console.log(`why not 23?`) //Different!!!


// BOOLEAN LOGIC
//Boolean logic = True and falls
//and or and not. Boolean is in all languages
//Examples
// A: Sarah has a dricers's license
// B: Sarah has good vision

// And operator:
// Four different possibileties: 2 outcomes on two possibilies= 2x2
// Good vision drivers license = true true. End operator = True
// Good vision no driving license = true false. End op = False
// Bad vision has driving licensce = false true. End op = False
// Bad vision no license = false false false. End op = False
// And operator = True when all are true
// Or operator:
// Good vision drivers license = true true. End operator = True
// Good vision no driving license = true false. End op = True
// Bad vision has driving licensce = false true. End op = False
// Bad vision no license = false false false. End op = True
// Or operator = 1 operator true = true
// Not operator:
// Inverts bollean value. True -> False. False -> True

// Age = 16
// A: Age is greater or equal to 20 = False
// B: Age is less than 30 = True
// And op (&&). = false (not all true)
// Or op (||). = True (one variable true)
// not op = !A = True
// Multiple = !A (not) and B = True
// A or !B = False

// LOGICAL OPERATORS
const hasDriversLicense = true; // A
const hasGoodVison = true; // B

console.log(hasDriversLicense && hasGoodVison); //And
console.log(hasDriversLicense || hasGoodVison); // Or
console.log(!hasDriversLicense); // Not


//if (shouldDrive = hasDriversLicense && hasGoodVison) {
//    console.log(`Sarah is able to drive!`)
//} else {
//    console.log(`Sarahshould not drive!`);
//}

const isTired = false //C
console.log(hasDriversLicense || hasGoodVison || isTired);

if (shouldDrive = hasDriversLicense && hasGoodVison && !isTired) {
    console.log(`Sarah is able to drive!`)
} else {
    console.log(`Sarah should not drive!`);
}
*/
/*
//THE SWITCH STATEMENT
let day = `sunday`;

switch (day) {
    case `monday`:
        console.log(`Plan course struckture`);
        console.log(`Goto coding meetup`);
        break;
    case `tuesday`:
        console.log(`Prepare theory videos`);
        break;
    case `wednesday`:
    case `thursday`:
        console.log(`Write code examples`);
        break;
    case `friday`:
        console.log(`Record videos`);
        break;
    case `saturday`:
    case `sunday`:
        console.log(`Enjoy the weekend :D`);
        break;
    default:
        console.log(`Not a valid day`);
}

if (day === `monday`) {
    console.log(`Plan course struckture`);
    console.log(`Goto coding meetup`);
} else if (day === `tuesday`) {
    console.log(`Prepare theory videos`);
} else if (day === `wednesday` || day === `thursday`) {
    console.log(`Write code examples`);
} else if (day === `friday`) {
    console.log(`Record videos`);
} else if (day === `saturday` || day === `sunday`) {
    console.log(`Enjoy the weekend :D`);
} else {
    console.log(`Not a valid day`);
}
*/

// THE CONDITIONAL (TERNARY) OPERATPR
const age = 16;
age >= 18 ? console.log(`I like to drink wine!`) : console.log(`I like to drink water!`)

const drink = age >= 18 ? `wine` : `water`;
console.log(drink);

let drink2;
if (age >= 18) {
    drink2 = `wine`;
} else {
    drink2 = `water`
}
console.log(drink2)

console.log(`I like to drink ${age >= 18 ? `wine` : `water`}`)

