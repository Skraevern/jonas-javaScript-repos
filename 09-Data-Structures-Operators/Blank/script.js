"use strict";

const weekdays = [`mon`, `tue`, `wed`, `thu`, `fri`, `sat`, `sun`];
// Data needed for a later exercise
const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

// Data needed for first part op´f the section
const restaurant = {
  name: `Classico Italiano`,
  location: `Via Angelo Tavanti 23, Firenze, Italy`,
  categories: [`Italian`, `Pizzeria`, `Vegetarian`, `Organic`],
  starterMenu: [`Focaccia`, `Bruschetta`, `Garlic Bread`, `Caprese Salad`],
  mainMenu: [`Pizza`, `Pasta`, `Risotto`],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24h
      close: 24,
    },
  },
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery: function ({ starterIndex, mainIndex, time, adress }) {
    console.log(
      `Order recieved! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${adress} at ${time}`
    );
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta widt ${ing1}, ${ing2} and ${ing3}`
    );
  },
  orderPizza: function (mainIngridient, ...otherIngredients) {
    console.log(mainIngridient);
    console.log(...otherIngredients);
  },
};
///////////////////////////////////////
// Sets

const ordersSet = new Set([
  `Pasta`,
  `Pizza`,
  `Pizza`,
  `Risotto`,
  `Pasta`,
  `Pizza`,
]);
///////////////////////////////////////
// Maps: Iteration
// In last example we created an empty map first and then added by using the set metod. There is another way without using the set method. Set method is cumbersom when there are a lot of items.

const question = new Map([
  [`question`, `What is the best programming in the world`],
  [1, `C`],
  [2, `Java`],
  [3, `JavaScript`],
  [`correct`, 3],
  [true, `correct`],
  [false, `try again`],
]);
console.log(question);

// This map structure is axactly the same that is returned from calling Object.entries
// Convert object to map
console.log(Object.entries(restaurant.openingHours));
const hoursMap = new Map(Object.entries(restaurant.openingHours));
console.log(hoursMap);

// Quiz app
console.log(question.get(`question`));
for (const [key, value] of question) {
  if (typeof key === `number`) console.log(`Answer ${key}: ${value}`);
}
// const answer = Number(prompt(`Your answer`))ßß
const answer = 3;
console.log(answer);
if (answer === question.get(`correct`)) {
  console.log(question.get(true));
} else {
  console.log(question.get(false));
}

// Convert map to array
console.log([...question]);
// console.log(question.entries());
console.log([...question.keys()]);
console.log([...question.values()]);

//question.get(answer === question.get(`correct`));
/*
///////////////////////////////////////
// Maps: Fundamentals

const rest = new Map(); // Easyest way to create is to use empty
rest.set(`name`, `Classical Italiano`); // to fill up the map
rest.set(1, `Firenze, Italy`);
console.log(rest);
rest.set(2, `Lisbon, Portogal`);
console.log(rest);

// Chaining sets
rest
  .set("categories", ["Italian", "Pizzeria", "Vegetarian", "Organic"])
  .set("open", 11)
  .set("close", 23)
  .set(true, `We are open :D`)
  .set(false, `We are closed :(`);

console.log(rest.get(`name`));
console.log(rest.get(true));
console.log(rest.get(1));

let time = 21;
// Is the current time between 11 and 23:
console.log(rest.get(time > rest.get(`open`) && time < rest.get(`close`)));
time = 8;
console.log(rest.get(time > rest.get(`open`) && time < rest.get(`close`)));

// Check if map has a certainm key
console.log(rest.has(`categories`));
rest.delete(2);
console.log(rest);
console.log(rest.size);

// use arrays as maps
const arr = [1, 2];
rest.set(arr, "Test");
rest.set(document.querySelector("h1"), "Heading");
console.log(rest);
console.log(rest.size);

/*
console.log(ordersSet);

console.log(new Set(`Jonas`));

console.log(ordersSet.size);
console.log(ordersSet.has(`Pizza`));
console.log(ordersSet.has(`Bread`));
ordersSet.add(`Garlic Bread`);
ordersSet.add(`Garlic Bread`);
ordersSet.delete(`Risotto`);
console.log(ordersSet);

//console.log(ordersSet[2]; // Does not work. Can not take out

for (const order of ordersSet) console.log(order);

// Array of all staff
const staff = [`Waiter`, `Chef`, `Manager`, `Chef`, `Waiter`];
console.log(staff); // Chef and waiter is listet twice

let staffUnique = new Set(staff);
console.log(staffUnique);

// Conversen from set back to Array using spread
staffUnique = [...new Set(staff)];
console.log(staffUnique);

console.log(
  new Set(["Waiter", "Chef", "Waiter", "Manager", "Chef", "Waiter"]).size
);

/*


// Looping objects: Object keys, values and strings

// Propertiy names
const properties = Object.keys(restaurant.openingHours);
console.log(properties);

let openStr = `We are open on ${properties.length} days`;
for (const day of properties) {
  openStr += `${day}, `;
}

for (const day of Object.keys(restaurant.openingHours)) {
  console.log(day);
}

console.log(openStr);

// Propertu values
const values = Object.values(restaurant.openingHours);
console.log(values);

// Enitire Object
const entries = Object.entries(restaurant.openingHours);
console.log(entries);

for (const [key, { open, close }] of entries) {
  console.log(`On ${key} we open at ${open} and close at ${close}`);
}
/*
///////////////////////////////////////
// OPTIONAL CHAINING (.?)
// If the object does not hav mon or open we get an error

//console.log(restaurant.openingHours.mon.open); // Error

// old workourond:

if (restaurant.openingHours && restaurant.openingHours.mon) {
  console.log(restaurant.openingHours.mon.open);
}

// Optional chaining is better:
console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours?.mon?.open);

// Example with  for of loop
const days = [`mon`, `tue`, `wed`, `thu`, `fri`, `sat`, `sun`];

for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? `closed`;
  console.log(`On ${day}, we open at ${open}`);
} // With nullish which is undifiend

// Methods
console.log(restaurant.order?.(0, 1) ?? `Method does exisit`);
console.log(restaurant.orderRisotto?.(0, 1) ?? `Method does exisit`);

// Optional chaining arrays
const users = [
  {
    name: `Jonas`,
    email: `hello@jonas.io`,
  },
];

console.log(users[0]?.name ?? `user array empty`);

///////////////////////////////////////
// ENHANCED OBJECT LITERALS

/*
// LOOPING ARRAYS: THE FOR-OF LOOP
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu) console.log(item);

for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`);
}

//console.log(...menu.entries());

/*
//restaurant.numGuests = 0;
const guests = restaurant.numGuests || 10;
console.log(guests);

// Nullish: null and undefined ( not 0 or ``)
const guestsCorrect = restaurant.numGuests ?? 10;
console.log(guestsCorrect);

/*
restaurant.orderDelivery({
  time: `22:30`,
  adress: `Vie del Sole, 21`,
  mainIndex: 2,
  starterIndex: 2,
});
// JUse any data type, return any data type,short-circuiting.
console.log(`--- OR ---`);
console.log(3 || `Jonas`);
console.log(`` || `Jonas`);
console.log(true || 0);
console.log(undefined || null);

console.log(undefined || 0 || `` || `Hello` || 23 || null);

restaurant.numGuests = 23;
const guests1 = restaurant.numGuests ? restaurant.numguest : 10;
console.log(guests1);

const guests2 = restaurant.numGuests || 10;
console.log(guests2);

console.log(`--- AND ---`);
console.log(0 && `Jonas`);
console.log(7 && `Jonas`);

console.log(`Hello` && 23 && null && `Jonas`);

if (restaurant.orderPizza) {
  restaurant.orderPizza(`mushrooms`, `spinach`);
}

restaurant.orderPizza && restaurant.orderPizza(`mushrooms`, `spinach`);
/*

// 1) Destructuring

// Spread is on RIGHT side of the operator.
const arr = [1, 2, ...[3, 4]];

// Rest is on the left side of the operator.
const [a, b, ...others] = [1, 2, 3, 4, 6];
console.log(a, b, others);

const [Pizza, , Risotto, ...otherfood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(Pizza, Risotto, otherfood);

// Objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

// 2) Functions
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
};
add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 5, 3, 2, 1, 4);

const x = [23, 5, 7];
add(...x);

restaurant.orderPizza(`mushrooms`, `onions`, `olives`, `spinach`);
/*
// The spread operator

const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

const newArr = [1, 2, ...arr];
console.log(newArr);

console.log(...newArr);

const newMenu = [...restaurant.mainMenu, `Gnocci`];
console.log(newMenu);

// Copy array
const mainMenuCopy = [...restaurant.mainMenu];

// Join 2 arrays or more
const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(menu);

// Iterables: arreys, strings, maps, sets NOT objects
const str = `Jonas`;
const letters = [...str, ` `, `S.`];
console.log(letters);
console.log(...str);

//Real world example

//const ingredients = [
//prompt(`Lets´s make pasta! Ingredient 1?`),
//prompt(`Ingredient 2?`),
//prompt(`Ingredient 3?`),
//];
//console.log(ingredients);

//restaurant.orderPasta(...ingredients);

// Objects add new widt spread
const newRestaurant = { foundidIn: 1996, ...restaurant, founder: `Jonas` };
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = `Ristorante Roma`;
console.log(restaurantCopy.name, restaurant.name);
/*
// Destructuring objects
// Default values
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// Mutating variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj);
console.log(a, b);

// Nested objects
const {
  fri: { open, close },
} = openingHours;
console.log(open, close);
/*
// Destructuring Arreys
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;

console.log(x, y, z);
console.log(arr);

// , , Hopper over en array
let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

// Switching variabels
//const temp = main;
//main = secondary;
//secondary = temp;
//console.log(main, secondary);

[secondary, main] = [secondary, main];
console.log(main, secondary);
*/
