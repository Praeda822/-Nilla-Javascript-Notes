'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  //========================================
  //ES6 Enhanced Object Literals
  //========================================
  openingHours,

  //with ES6, I can shorten the syntax down even further to make it look even neater!
  //So instead of the code below...

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  //I can do this instead:
  // order(starterIndex, mainIndex) {
  //   return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  // },

  //Here I create a function and pass it an object, called "obj", as an argument

  // orderDelivery: function (obj) {
  //   console.log(obj);
  // }

  //Now I restructure that object, using the curly braces again, and pass it the 4 parameters defined in the object of functions
  //I also use a template literal and the "this"
  //I also further destructure the object by assigning default values, 1, 0, and time
  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  //Create a function that informs of the 3 ingredients included in the order of pasta
  //We get the values of ing1, ing2, and ing3, from a prompt window

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2}, and ${ing3}`
    );
  },

  orderPizza: function (mainIngreds, ...otherIngreds) {
    console.log(mainIngreds, otherIngreds);
  },
};

if (restaurant.openingHours && restaurant.openingHours.mon)
  console.log(restaurant.openingHours.mon.open);

//WITH OPTIONAL CHAINING:
//Using the question mark before a property is known as "Optional Chaining"
//Using optional chaining, if the property doesn't exist, instead of returning NOTHING, or an ERROR, it will immediately return "undefined"
//So here my code is checking if the "mon" property exists
console.log(restaurant.openingHours.mon?.open);
//And here my code checks whether the openingHours property exists
console.log(restaurant.openingHours?.mon?.open);

//=========================================
//Real world example of Optional Chaining
//=========================================

const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

for (const day of days) {
  // console.log(day);
  //If I want to use a vriable name as the property name, I need to wrap it in square brackets []
  //Because on saturday we open at "0", and 0 is a FALSEY value, I need to use the Nullish operator, INSTEAD OF THE OR ||, so that my code will return the value of 0, as the Nullish operator looks for the first FALSEY value
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`On ${day} we open at ${open}`);
}
//=========================================
//Optional Chaining Methods
//=========================================
//Here I use optional chaining to check if my method exists before even attempting to call it
//I also use the Nullish operator to ensure it checks for the method existence, as the Nullish oeprator will be looking for the first FALSEY value to execute
console.log(restaurant.order?.(0, 1) ?? 'Method does not exist!');

//Since orderRisotto method doesn't exist, the Nullish operator automatically returns undefined, or in this case my string
console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exist!');

//=========================================
//Optional Chaining Arrays
//=========================================
const users = [{ name: 'Pat', email: 'hello@pat.com' }];

//Here I use optional chaining to check if the users object at index position 0 exists at all, and the nullish operator again to ensure redundancy in that it will print out my string if it's not present
console.log(users[0]?.name ?? 'User array empty!');

//Without usiong optional chaining, I'd have to code out an entire if/else block to ensure the parameters for existence are being met
if (users.length > 0) console.log(users[0]?.name);
else console.log('User array empty!');

//=====================================================

//Then, here I call that function, and pass it an object of functions
//THIS IS ONE OBJECT
// restaurant.orderDelivery({
//   time: '22:30',
//   address: '123 Smith Street',
//   mainIndex: 2,
//   starterIndex: 2,
// });

//Because I didn't destructure the mainIndex, nor the time, when I call this function, it will read the aforementioned default values
// restaurant.orderDelivery({
//   address: '123 Smith Street',
//   starterIndex: 1,
// });

//=====================================================
//Spread Operator
//=====================================================

//The spread operator is similar to destructuring, in that it helps us get elements out of arrays
//but the difference is that the spread operator takes ALL the elements from the array, AND IT ALSO, doesn't create new variables
//As a consequence we can only use it in places where we would otherwise write values seperated by commas

//I create two arrays, arr, and badNewArr, and fill the badNewArr with the values from the first array, arr, one by one using their respective index values, WHICH IS BAD PRACTICE
// const arr = [7, 8, 9];
// const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
// console.log(badNewArr);

//Instead I can use the spread operator "..." to take all the values from the "arr" array, and fill my newArr with all the individual values instead of having to delcare their respective index values
// const newArr = [1, 2, ...arr];
// console.log(newArr);

//I can also log the individual values using the spread operator "..."
// console.log(...newArr);

//I can also use the spread oeprator "..." to fill new arrays with the full contents of objects, as well, and then denote a comma to add new elements to the aforementioned array below
// const newMenu = [...restaurant.mainMenu, 'Gnocci'];
// console.log(newMenu);

//Copying an array:
// const mainMenuCopy = [...restaurant.mainMenu];

//Join 2 (or more) arrays together:
// const fullMenu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(fullMenu);

//Iterables are arrays, strings, maps, and sets,
//BUT NOT OBJECTS
// const str = 'pat';
// const letters = [...str, '', 'P.'];
// console.log(letters);

//=====================================================
//Real-world example of using the spread opreator
//=====================================================

//Here is my prompt including my ingredients array to be passed to my orderPasta function above
const ingredients = [
  // prompt("Let's make some pasta! Your first ingredient?"),
  // prompt('Your second ingredient?'),
  // prompt('Your third ingredient?'),
];
console.log(ingredients);

//Then I call the orderPasta function, and since it's a method nested within the restaurant object, i need to declare the restaurant object first, then the function
//Then I pass a spread operator in order to get the values of all 3 values entered into the prompt array
//Finally, this is reflected in the console as each individual prompt is assigned to the ing1, ing2, and ing3 variables respectively, and logged to the console dynamically using the aforementioned template literal
restaurant.orderPasta(...ingredients);

//Objects
const newRestaurant = { ...restaurant, foundedIn: 1994, founder: 'Patrick' };
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = "Patty's Pizza Pasta";
console.log(restaurantCopy);

//=====================================================
//Rest Pattern and Parameters
//=====================================================

// 1) Destructing

//The spread operator "..." is used to UNPACK elements of an array,
//Whereas the Rest Parameter is used to PACK elements INTO an array
//SPREAD, because the ... is on the RIGHT SIDE of the assignment operator, "="
const arr = [1, 2, ...[3, 4]];

//REST, because the ... is on the LEFT SIDE of the assignment operator "="
const [n, m, ...others] = [1, 2, 3, 4, 5];
console.log(n, m, others);

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);

//Using the REST pattern with objects

//Because we use the rest pattern TO THE LEFT (to tha left) of the assignment operator in our destructuring assignment, my new object will read the value of sat, THEN take and assign the values of fri & thurs to my weekdays object
// const { sat, ...weekdays } = restaurant.openingHours;
// console.log(weekdays);

// 2) Functions

const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
};

add(2, 3);
add(69, 69);
add(8, 2, 4, 6);

const testX = [23, 5, 7];
add(...testX);

restaurant.orderPizza('bacon', 'ham', 'cheese');

//=====================================================
//Object destructuring
//=====================================================

//Like destructuring arrays, we use curly braces {} to destructure objects
//So I've created 3 brand new variables, name, openingHours, and categories, and have told them to be equal to my restaurant object
//Name is "deprecated"??
// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

//What if I want the variable naems to be different from the property names??
//Then I essentially do the exact same thing, but I reassign the names of each object using ":", as if I'm creating new objects themselves
//Then I tell these new variables, with their new names, to be equal to the values in the restaurant object
//This is extremely useful when dealing with 3rd party data, like from an API
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

//By delcaring an empty array, we can assign a default value, which helps us structure our output more neatly
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

//=====================================================
//Mutating variables
//=====================================================

//Here I want to reassign the values of my a and b variables within an object, so I need to destructure it
//I delcare the original values of the a and b variables
//Next, I create a variable named object, to hold a bunch of new values, inclusive of the new values for a and b respectively
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };

//But in order to destructure the object, I need to wrap the object in parentheses "()", because wehn vscode sees curly braces "{}", it expects a block of code
//Finally, I log the values of and b to the console to see if my destructuring worked correctly

({ a, b } = obj);
console.log(a, b);

//=====================================================
//Destructuring nested objects
//=====================================================

//Here I create a new object variable, named fri, and tell it to be equal to the openingHours object
//then I log the output of the object to the console to check if it worked, and it returns both the opening and closing hours of the nested "fri" object: 11 & 23
// const { fri } = openingHours;
// console.log(fri);

//But I want to create two new variables, called open and close, and have them read the property data from the nested "fri" object
//so I use ":", create the "open" and "close" variables, respectively, and tell them to be equal to the property values found within the openingHours object, and subsequently the nested values of the "fri" object, 11 & 23
const {
  fri: { open, close },
} = openingHours;
console.log(open, close);

//=====================================================
//Destructuring Arrays
//=====================================================
// const arr = [2, 3, 4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// const [x, y, z] = arr;
// console.log(x, y, z);
// console.log(arr);

//Here I destructure an array by declaring it to be equal to my restraunt variable, as an object, then apply the categories parameter to it so when it becomes restructured, the below array knows to take the first & second values within the restraunt array and populate the new array with them
//By leaving a blank item in the array, javascript will skip over that item and the second item subsequently becomes the third
// let [main, , secondary] = restaurant.categories;
// console.log(main, secondary);

//=====================================================
//Switching variables
//=====================================================

// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

// [main, secondary] = [secondary, main];
// console.log(main, secondary);

//=====================================================
//Recieve 2 return values from a function
//=====================================================

const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

//=====================================================
//Nested Destructuring
//=====================================================
const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j);
const [i, , [j, k]] = nested;
console.log(i, j, k);

//=====================================================
//Default values
//=====================================================
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);

//=====================================================
//Short Circuiting using && and ||
//=====================================================
//Short Circuit Operands means if the first value (operand) is TRUTHY, Javascript will immediately return the first value, and not bother to read the second

//The || (OR) Operator

console.log(3 || 'Pat'); //3
console.log('' || 'Pat'); //Pat
console.log(true || 0); //true
console.log(undefined || null); //null

// restaurant.numGuests = 23;
// const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log(guests1);

// const guests2 = restaurant.numGuests || 10;
// console.log(guests2);

//The && (AND) Operator

//The && Operator works in the exact opposite way to the || Operator
//The && Operator will short circuit and Javascript will immediately return the first FALSY value, without bothering to read (evaluate) the second operand
console.log(0 && 'Pat'); //0
console.log(69 && 'Pat'); //Pat
console.log('gday' && 69 && null && 'Pat'); //null

//Practical example
//If restaurant.orderPizza exists, then call restaurant.orderPizza('bacon', 'ham')
//
if (restaurant.orderPizza) {
  restaurant.orderPizza('bacon', 'ham');
}

restaurant.orderPizza && restaurant.orderPizza('bacon', 'ham');

//=====================================================
//The Nullish Coalescing Operator (??)
//=====================================================
// restaurant.numGuests = 0;
const guests2 = restaurant.numGuests || 10;
console.log(guests2);

//Nullish values are "Null" and "undefined"
//It does NOT include "0" or an empty string "''"
//So, because numGuests is undefined, the evaluation will continue and my code will return 10, as the first, and only, non-nullish value
const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);

//=====================================================
//Logical Assignment Operators
//=====================================================
const rest1 = {
  name: 'Patty',
  // numGuests: 69,
  numGuests: 0,
};

const rest2 = {
  name: 'Lozza',
  owner: 'Lozza Pizza Pasta',
};

//OR || Assignment Operator

//Because numGuests exists, and I'm using the OR operator, then the value is TRUTHY, and will return "69" and NOT 10
// rest1.numGuests = rest1.numGuests || 10;
//Since numGuests doesn't exist on my rest2 object, and the first value is FALSEY, then it will return 10
// rest2.numGuests = rest2.numGuests || 10;

//This code is exactly the same as above, but is a more concise and neat way of displaying my information
// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

//Nullish ?? Assignment Operator (Null or Undefined)
//Since numGuests is 0, or Nullish, then because I'm using the ?? operator, my code will subsequently assign the value of 10 to my variable
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

//AND && Assignment Operator
//Because the owner is present on the rest 2 object, it is  TRUTHY value, and so will return the ANONYMOUS string instead
rest2.owner = rest2.owner && '< ANONYMOUS';
console.log(rest1, rest2);

//=====================================================
//CHALLENGE
//=====================================================

// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

// //1. Create one player array for each team (variables 'players1', and 'players2')

// const players1 = [game.players[0]];
// const players2 = [game.players[1]];
// console.log(
//   '1. Array containing all the players for each respective team',
//   players1,
//   players2
// );
// //TEACHER'S SOLUTION:
// // const [players1, players2] = game.players;
// // console.log(players1, players2);

// //2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players

// const gk = [game.team1, ...players1];
// console.log(
//   '2. Array named gk containing Bayern as the goalkeeper and his players',
//   gk
// );
// //TEACHER'S SOLUTION:
// // const [gk, ...fieldPlayers] = players1;

// //3. Create an array 'allPlayers', containing all players of both teams (22 players)

// const allPlayers = [...players1, ...players2];
// console.log('3. Array containing all Players', allPlayers);
// //I got the code, and the syntax, correct, BUT because I fucked up the first two questions, it ends up fucking up this question, too, and I end up with 2 seperate arrays of 1 each....

// //4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('playersFinal') containing all the original team 1 players, plus 'Thiago', 'Coutinho', and 'Perisic'

// const playersFinal = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
// console.log(
//   "4. New array containing all of team 1's players + the new ones",
//   playersFinal
// );
// //THIS is the only one you got right, you dickhead

// //5. Based on the game.odds object, create one variable for each odd (called 'team1', draw, and 'team2')

// const {
//   odds: { team1, x: draw, team2 },
// } = game;
// console.log('5. New variable names destructured', team1, draw, team2);
// //YOU GOT THIS ONE RIGHT AS WELL; MIRACLE

// //6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT AN ARRAY) and prints each of them to the console, along with the number of goals that were scored (number of player names passed in)
// //TEST DATA FOR 6:
// //'Davies', 'Muller', 'Lewandowski', 'Kimmich'

// function printGoals(...playerNames) {
//   console.log(`${playerNames.length} goals scored`);
//   for (let i = 0; i < playerNames.length; i++) {
//     console.log(playerNames[i]);
//   }
// }
// console.log(
//   '6. Function that prints out the names of the 4 goal scorers and informs how many total goals were scored'
// );
// printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
// //You got your code right, but you didn't call the function correctly (like usual...)
// //TEACHER'S SOLUTION:
// // printGoals(...game.scored);

// //7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if else statement or the ternary operator

// //no fucking idea how to tackle this one without using if/else or ternary....
// //TEACHER'S SOLUTION:
// team1 < team2 && console.log('Team 1 is more likely to win');

//7. Was solved by providing the logic for a less than equation then using the && Operator to check for a truthy statement, to subsequently execute the console.log statement
//fuck me life is hard when you're dumb :<

//=====================================================
//Looping Arrays: for-of loop
//=====================================================

//I can use the for of loop to loop through an aray like this:
//It's a nicer, cleaner way of looping through an array without the usual i=0, i++ etc..
const menuu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menuu) console.log(item);

//But what if I want the index values??
//I can pass the .entries method to my menuu array, which will then output the index values to the console in an even neater way
// for (const item of menuu.entries()) {
//   console.log(`${item[0] + 1}: ${item[1]}`);
// }

//but now since item is an array, I can destructure it, to make my code even neater & better looking

for (const [i, el] of menuu.entries()) {
  console.log(`${i + 1}: ${el}`);
}

//=========================================
//Looping over Objects
//=========================================

//Property NAMES:

//Here I use a for loop to check for, and output to the console, the presence of key within my openingHours object, using the Object.keys method
for (const day of Object.keys(openingHours)) console.log(day);

//Here I use the Object.keys method to log the properties of the key values within my openingHours object, so it returns an array with my 3 property names, and their respective values
const properties = Object.keys(openingHours);
console.log(properties);

//Because I stored the results of my Object.keys method inside a variable called properties, I can use an object literal to inform how many days we are open, so that the result always remains dynamic, and subject to change if need be
//I also assign it to a variable called openStr, and I use that variable in my for of loop, nested inside another template literal to achieve the desired result
let openStr = `We are open on ${properties.length} days: `;
for (const day of properties) {
  openStr += `${day}, `;
}
console.log(openStr);

//Property VALUES:

//Here I use the Object.values method to return only the values within my openingHours object
const values = Object.values(openingHours);
console.log(values);

//If I want BOTH values AND names, I would use the Object.entries method, instead!
const entries = Object.entries(openingHours);
// console.log(entries);

//and I can use the entries method to loop over the object!
//So I create a for of loop, and another variable, "x", and tell the loop to go over the entries variable that holds both the key values and key names, and subsequently store them within the "x" variable
//Then I use a template literal to dynamically output all of this to the console so it's displayed neatly, and can be subject to change if any of the key values and/or names within my openingHours object change
//So the object literals are reading the results from the entries method
//But, since we're working with an object, we can immediately destructure the for loop to get exactly what we need by specifying the exact property names I want

// for (const x of entries)
for (const [day, { open, close }] of entries) {
  console.log(`On ${day} we open at ${open} and close at ${close}`);
}

// CHALLENGE 2

('use strict');

const game = {
  team1: 'Bayern Munich',
  team2: 'Borussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

//1. Loop over the game.scored array and print each player name to the console, along with the goal number (example: "Goal 1: Lewandowski")

//created a for of loop, used the entries method to get the key value AND their property
//Printed to the console using template literals for desired result
for (let [goalScored, players] of game.scored.entries())
  console.log(`Goal ${goalScored + 1}: ${players}`);

//TEACHER'S SOLUTION:
// for (const [i, player] of game.scored.entries())
//   console.log(`Goal ${i + 1}: ${player}`);

//2. Use a (for) loop to calculate the average odd and log it to the console

//Created two variables, sum and average, both equal to 0
//created a for loop to loop through my game.odds object and take only the VALUES from it, then assign the result to a variable called "odds"
//Then I create some maths logic nested within it that states the variable sum should be equal to the SUM TOTAL value of the key values within odds, divided by 3, and rounded to the third decimal place

let sum = 0;
let average = 0;

for (let odds of Object.values(game.odds)) {
  average = (sum += odds / 3).toFixed(3);
  // (11.08 / 3) = 3.69333.. RPT. - rounded to third decimal place with toFixed(3)
}
console.log(`The mean of the odds is equal to ${average}`);

//TEACHER'S SOLUTION:
// const odds = Object.values(game.odds);
// let average = 0;
// for (const odd of odds) average += odd;
// average /= odds.length;
// console.log(average);

//3. Print the 3 odds to the console, but in a nice, NEAT, and formatted way, like we just did before in the theory section. Exactly like this:
//Odds of victory: Bayern Munich: 1.33
//Odds of draw: 3.25
//Odds of victory Borussia Dortmund: 6.5
//Get the team names directly from the game object, DON'T hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names!!

//Created a for loop that iterates over my game.odds object and returns both the object name and object variable
//created two variables, victoryName & victoryOdds, with victoryNAme being equal to the object value name, and victoryOdds being equal to the object key value
//Created a bodgy if/else block to get around "undefined" being printed to the console because there are only two valid values in victoryName, but three in victoryOdds

for (const [victoryName, victoryOdds] of Object.entries(game.odds))
  if (victoryName === 'x') {
    console.log(`Odds of draw: ${[victoryOdds]}`);
  } else {
    console.log(`Odds of victory: ${game[victoryName]}: ${[victoryOdds]}`);
  }

//TEACHER'S SOLUTION:
for (const [team, odd] of Object.entries(game.odds)) {
  const teamStr = team === 'x' ? 'draw' : `victory${game[team]}`;
  console.log(`Odd of ${teamStr}, ${odd}`);
}
//BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals are the value. In this game, it will look like this:
// {
//   Gnarby: 1,
//   Hummels: 1,
//   Lewandowski: 2
//   }

const scorers = {
  Gnarby: 1,
  Hummels: 1,
  Lewandowski: 2,
};
