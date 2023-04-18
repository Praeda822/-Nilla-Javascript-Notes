let country = "Australia";
let continent = "Oceania";
let population = 25000000;
let FinlandPop = 6000000;
let popHalf = population / 2;
popHalf++;
let isIsland = true;
let language = "English";

console.log(country, continent, population, isIsland, language);

const description = `${country} is in ${continent}, and its ${population} people speak ${language}`;
console.log(description);

console.log(2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

let x = 10 + 5; // x = 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1
x--; // x = x - 1

if (population > 33000000) {
	console.log(`${country}'s population is above average`);
} else {
	console.log(
		`${country}'s population is ${33000000 - population} below average`
	);
}

//predict the result of these 5 operations without executing them:
"9" - "5";
"19" - "13" + "17";
"19" - "13" + 17;
"123" < 57; // false
5 + 6 + "4" + 9 - 4 - 2; //1143
//CORRECT || - higher PRECEDENCE than +

function bmiCalc(yourMass, yourHeight) {
	let yourBmi = Math.round(yourMass / yourHeight ** 2);
	console.log(yourBmi);
	return yourBmi;
}

function bmiFatOutpout(yourBmi) {
	if (yourBmi <= 18.5) {
		return "You are underweight, my dude. Off to Maccas with you!";
	} else if (yourBmi > 18.5 && yourBmi <= 24.9) {
		return "You are a healthy weight, my dude. Maccas can be a maybe for you!";
	} else if (yourBmi >= 25 && yourBmi <= 29.9) {
		return "You're getting a bit chonky, my dude. No maccas for you!";
	} else if (yourBmi > 30) {
		return "You are a chonky boy, my dude. No more maccas for you!";
	}
}

const markStats = [78, 1.69];
const patStats = [84, 1.95];

const markBmi = bmiCalc(...markStats);
const patBmi = bmiCalc(...patStats);

console.log(markBmi);
console.log(patBmi);

if (patBmi > markBmi) {
	console.log("Pat's a healthier bloke than you, Mark!");
} else {
	console.log("Mark's a healthier bloke than you, Pat!");
}

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax

// ... (spread operator) LETS ME PASS AN ARRAY INTO A FUNCTION!!!!
// CAN ONLY USE SPREAD OPERATOR AS FIRST OR LAST OR CALL WILL FAIL

const currentYear = "2023";
console.log(Number(currentYear), currentYear);
console.log(Number(currentYear) + 29);
console.log(typeof NaN);

console.log(String(23), 23);

//type coercion
console.log("I am " + 29 + " years old");

console.log("23" / "10");

let n = "1" + 1; //11 - string + number
n = n - 1;
console.log(n);

let scoreDolphins = (96 + 108 + 89) / 3;
let scoreKoalas = (88 + 91 + 110) / 3;
console.log(scoreDolphins, scoreKoalas);

if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
	console.log("Dolphins win the trophy!");
} else if (scoreKoalas > scoreDolphins) {
	console.log("Koalas win the trophy!");
} else if (scoreDolphins === scoreKoalas) {
	console.log("Both animals win the trophy!");
}

const day = "monday";
//Javascript knows it's Monday
//so it only outputs the monday case
switch (day) {
	case "monday":
		console.log("Suffer through more Javascript");
		console.log("Get back on site ya silly bugger");
		break;

	case "tuesday":
		console.log("Resist the urge to drink bleach, learn more Javascript");
		break;

	case "wednesday":
		console.log("Learn React, apply therapy to affected areas");
		break;

	default:
		console.log("DO LEGS TODAY");
}

if (day === "monday") {
	console.log("Suffer through more Javascript");
	console.log("Get back on site ya silly bugger");
} else if (day === "tuesday" || "wednesday") {
	console.log("Resist the urge to drink bleach, learn more Javascript");
	console.log("Learn React, apply therapy to affected areas");
}

3 + 4;
1991;
true && false && !false;

if (23 > 10) {
	const str = "23 is bigger my dude";
	console.log(str);
}

//semi colons indicate a STATEMENT (complete sentence)
//Template literals can only contain EXPRESSIONS, but not statements - something that must produce a value

const moi = "Pat";
console.log(`I'm ${1994 - 1991} years old`);
console.log(`I'm ${moi}`);

//Conditional Operator lets me shorten down if/else statements into one, maybe two, lines
// Also known as TERNARY OPERATOR
//Our Operators are EXPRESSIONS that always produce a VALUE
//And if it become an EXPRESSION, I can store it in a variable and print it to the console

const age = 29;
// age >= 18
// 	? console.log("I like to drink bleach")
// 	: console.log("I like to drink water");

const drink = age >= 18 ? "Bleach" : "Water";
console.log(drink);

//I can assign expressions, like ones from the use of a ternary operator and use them in template literals
//As template literals can only take expressions, and not statements
//So if I include the ? : in a TL, it will compute the value and assemble the result into the final string
console.log(`I like to drink ${age >= 18 ? "Bleach" : "Water"}`);

// Tip 15% if the bill is between 50 and 300
// if it's not between that range, then it's a 20% tip
// create a variable called tip
// no if/else, only ternary operator
// output the string to the console containing the bill value, the tip, and the final value (bill + tip)
// i.e. The Bill was 275, the tip was 41.25, and the total damage was 316.25
// Given data values:
// Bill: 275
// Tip: 40
// Total Damage: 430
// MY SOLUTION:

const bill = 275; // Total bill
const damage = 430; // Total cost

let tip = 0.15 * bill;
//+15% to the bill - 41.25;
let tipOver = 0.2 * bill;
//+20% to the bill - 80 (prints out 60 tho coz it calculates 15% first)

const total = bill + (tip >= 50 && tip <= 300 ? tip : tipOver);

console.log(
	`The bill is ${bill}, the tip is ${tip}, and the total damage is ${
		bill + tip
	}`
);

//INSTRUCTORS MUCH BETTER, NICER, SEXIER CODE
// const bill = 275;
// const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
// console.log(
// 	`The bill was ${bill}, the tip was ${tip}, and the total value was ${
// 		bill + tip
// 	}`
// );

//Velocity of water moving through a pipe laid at grade
// v = (Qw / 3600*PI*(ID/2)^2)
//3600 converts water flow rate from metres per hour to per second

// calc.png
// d	: Pipe Inner Diameter (m)
// Ｑw	: Water Flow Rate (m³/h)
// v	: Water Velocity (m/s)

const diameter = prompt("What is the ID (inside diameter) of your pipe?");

const flowRate = prompt("What is your (expected) rate of water flow?");

const area = Math.PI * (diameter / 2) ** 2;
//calculates inside area of my pipe based on the ID (inside diameter)
const volume = flowRate / 3600;
//converts m^3/h to m^3/s
const velocity = volume / area;

alert(
	`The velocity of your discharging water moving through your given pipe size is ${velocity.toFixed(
		2
	)} m/s`
);
