"use strict";

/*
Coding Challenge #1
We're building a football betting app (soccer for my American friends 😅)!
Suppose we get data from a web service about a certain game ('game' variable on next page). In this challenge we're gonna work with that data.
Your tasks:
1. Create one player array for each team(variables'players1'and 'players2')
2. The first player in any player array is the goal keeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
3. Createanarray'allPlayers'containingallplayersofbothteams(22 players)
4. During the game, BayernMunich(team1) used 3 substitute players. So createa new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals')that receives an arbitrary number of player names (not an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win.Print to the consolew hich team is more likely to win, without using an if/else statement or the ternary operator.
Test data for 6.: First, use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored
GOOD LUCK 😀
*/

const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// 1)
const players1 = game.players[0];
console.log(players1);
const players2 = game.players[1];
console.log(players2);

// Jonas answer
// const [players1, players2] = game.players
// console.log(players1, players2);

// 2)
const gk = players1[0];
console.log(gk);

// jonas ansver
// const [gk, ...fieldPlayers] = players1;
//console.log(gk, fieldPlayers);

// 3)
let allPlayers = [...game.players[0], ...game.players[1]];

// 2)
[, ...game.players[0]] = game.players[0];
let fieldPlayers = game.players[0];
console.log(fieldPlayers);

// 3)
console.log(allPlayers);

// 4)
let substitutes = [`Thiago`, `Coutinho`, `Perisic`];
let players1Final = [...allPlayers, ...substitutes];

// jonas answer
//const players1Final = [..players1, `Thiago`, `Coutinho`, `Perisic` ]

console.log(players1Final);

// 5)
let team1 = game.odds.team1;
let draw = game.odds.x;
let team2 = game.odds.team2;
console.log(team1);
console.log(draw);
console.log(team2);

//jonas answer
// const {odds: {team1, x: draw, team2}} = game;
// console.log(team, draw, team2);

// 6)
const printGoals = function (...players) {
  console.log(`${players.length} goals where scored`);
};

printGoals("Davies", "Muller", "Lewandowski", "Kimmich");
printGoals("Davies", "Muller");
printGoals(...game.scored);

// 7)
team1 < team2 && console.log(`Team1 is likely to win`);
team1 > team2 && console.log(`Team2 is likely to win`);

/*
Coding Challenge #2
Let's continue with our football betting app! Keep using the 'game' variable from before.
Your tasks:
1. Loop over the game.scored array and print each playername to the console, along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (Wealready studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to th econsole, but in a nice formatted way, exactly like this:
Odd of victory Bayern Munich: 1.33 Odd of draw: 3.25
Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). Hint: Note how the odds and the game objects have the same property names 😉
4. Bonus: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
     {
       Gnarby: 1,
       Hummels: 1,
       Lewandowski: 2
}
GOOD LUCK 😀
*/

// 1.)
const scorers = [...game.scored];
for (const [i, player] of scorers.entries()) {
  console.log(`Goal ${i + 1}: ${player}`);
}

// Jonas solution
for (const [i, player] of game.scored.entries()) {
  console.log(`Goal ${i + 1}: ${player}`);
}

// 2.)
let avg = 0;
for (const avgOdds of Object.values(game.odds)) {
  avg += avgOdds;
}
avg = avg / Object.values(game.odds).length;
console.log(avg);

// 3.)
console.log(
  `Odd of victory ${game.team1}: ${game.odds.team1} Odd of draw: ${game.odds.x}. Odd of victory ${game.team2}: ${game.odds.team2}`
);

// Jonas solution
for (const [team, odd] of Object.entries(game.odds)) {
  const teamStr = team === `x` ? `draw` : `victory ${game[team]}`;
  console.log(`Odd of ${teamStr} ${odd}`);
}

// Bonus)
// So the solution is to loop over the array, and add the array elements as object properties, and then increase the count as we encounter a new occurence of a certain element
const scorers2 = {};
for (const player of game.scored) {
  scorers2[player] ? scorers2[player]++ : (scorers2[player] = 1);
}
