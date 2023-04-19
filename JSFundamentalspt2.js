"use strict";
//strict mode forbids us to do certain things and will give us errors in VSCode

let hasDriversLicence = false;
const passTest = true;

if (passTest) hasDriversLicence = true;
if (hasDriversLicence) console.log("I can drive!");

// const interface = "Audio";
// const private = 534;
// can't use "restricted words, broski
// always have strict mode ON from here

function logger() {
	console.log("My name is Jeff");
}

const age1 = function calcAge1(birthYear) {
	return 2023 - birthYear;
};

const calcAge3 = birthYear => 2023 - birthYear;
const age3 = calcAge3(1994);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
	const age = 2023 - birthYear;
	const retirement = 80 - age;
	// return retirement;
	return `${firstName} will get to retire in ${retirement} years. Sucked in!`;
};

console.log(yearsUntilRetirement(1994, "Pat"));
console.log(yearsUntilRetirement(1980, "Mercy"));

const cutPieces = function (fruit) {
	return fruit * 4;
};

const fruitProcessor = function (apples, oranges) {
	const applePieces = cutPieces(apples);
	const orangePieces = cutPieces(oranges);

	const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
	return juice;
};

// Create an arrow function 'calcAverage' to calculate the average of three scores
//Use this function to calculate the average for both teams
//create another function, 'checkWinner', that takes the average score of each team as the paramaters - 'avgDolphins'& 'avgKoalas', then log the winner to the console together with the victory points
//use the check 'checkWinner'function to determine the winner for our given data sets
//ignore draws

//test data:
//Dolphins score: 44, 23, 71
//Koalas score: 65, 54, 49
//Data set 2:
//Dolphins score: 85, 54, 41
//Koalas 23, 34, 27

const calcAverage = (numberOne, numberTwo, numberThree) =>
	(numberOne + numberTwo + numberThree) / 3;
//created a function above to calculate the average of 3 given data sets

console.log(calcAverage(1, 2, 3));
//print out the result of the function calc to console

let scoreDolphin = calcAverage(44, 23, 71);
let scoreKoala = calcAverage(65, 54, 49);
//created my data sets & assigned the variables a value of the averageCalc function above
//function within a function - funct-ception
//but in the inception function, I assign my data set values to be used for the calcAverage function
//CHANGE FROM CONSTANT TO LET SO THE VALUE CAN BE SUBJECT TO CHANGE IF GIVEN A DIFFERENT DATA SET

console.log(scoreDolphin, scoreKoala);
//print result of calculated averages to console

const checkWinner = (avgDolphin, avgKoala) => {
	if (avgKoala > avgDolphin) {
		console.log(`Koala is the winner with ${avgKoala} points!`);
		//If the calculated average of Koala is higher than the calculated average of Dolphin, then print out the string that Koala is the winner
		//I also use a template literal so that the value is not static
	} else if (avgDolphin > avgKoala) {
		console.log(`Dolphin is the winner with ${avgDolphin} points!`);
		//as above, so below.....
	} else {
		console.log("There are no winners...");
		//Otherwise, default state (if the values are the same, is to inform thatt here are no winners
	}
};

checkWinner(scoreDolphin, scoreKoala);
//call the checkWinner function, feed it the scoreDolphin and scoreKoala calculation to check for the winner
//Can also input random values to check if it works

//Test for data set 2!!!!!

scoreDolphin = calcAverage(85, 54, 41);
scoreKoala = calcAverage(23, 34, 27);
console.log(scoreKoala, scoreDolphin);
checkWinner(scoreDolphin, scoreKoala);

const friend1 = "Michael";
const friend2 = "Smelly";
const friend3 = "Pat";

const friends = ["Michael", "Smelly", "Pat"];
// console.log(friends[0]);
// console.log(friends[friends.length - 2]);
// //Print out friends array as a string, but give it the expression to print out the full array length, minus 1 array value

// friends[2] = "Mercy";
// console.log(friends);
// //friends[2] allows me to change the value of the second array value to whatever I want

// const calcAge = function (birthYear) {
// 	return 2023 - birthYear;
// };

// const years = [1990, 1967, 1980, 1994];

// const ageArray = calcAge(years[0]);
// const ageArrayTotal = calcAge(years[years.length - 1]);
// console.log(ageArray);
// console.log(ageArrayTotal);

// const ageArrayThree = [
// 	calcAge(years[0]),
// 	calcAge(years[1]),
// 	calcAge(years[years.length - 1]),
// ];
// console.log(ageArrayThree);

const friendsTwo = ["Michael", "Smelly", "Pat"];

//Add elements to end
friendsTwo.push("Lozzza");
console.log(friendsTwo);
//".push" will add an element to the END of my array, and returns the NEW length of the array

//Add elements to start
friendsTwo.unshift("Chris");
console.log(friendsTwo);
//".unshift" will add an element to the START of my array, then returns the NEW length of the array

//Remove elements
friendsTwo.pop();
console.log(friendsTwo);
//".pop" will REMOVE the LAST element of an array, then returns the NEW length of the array

friendsTwo.shift();
console.log(friendsTwo);
//".shift" will REMOVE the FIRST element of an array, then returns the NEW length of the array

console.log(friendsTwo.indexOf("Smelly"));
//"indexOf" will return the array position of the declared element

console.log(friendsTwo.includes("Smelly"));
//".includes" will either return TRUE if the declared element is in the array, or FALSE if it's not

if (friendsTwo.includes("Smelly")) {
	console.log("Smelly is part of your array dude!");
}

// 1. Write a function 'calcTip' that takes any bill value as an input and returns the corresponding tip calculated on our previous tip rules - 15% if under 300 and above 50, 20% if above 300
//2. create an array, 'bills', containing the total values, so the bill + tip
//data set: 125, 555, 44
//3. Create an array, 'tips' containing the tip value for each bill, calculated using the function we created
//4. create an array, 'total', containing the total values, so bill + tip

// function calcTip(bill) {
// 	if (bill >= 50 && bill < 300) {
// 		return bill * 0.15;
// 	} else if (bill > 300) {
// 		return bill * 0.2;
// 	} else if (bill <= 50) {
// 		return bill * 0.1;
// 	} else {
// 		return "Cheap cunt";
// 	}
// }
//1.
//function calcTip calculates the value of the bill, then defines parameters for what to return depending on what value the bill is
//Returns "cheap cunt" as a (the?) default if no paramter can be met
//We don't tip in Australia, anyway

// let bills = [125, 555, 44];
//2.
//Array containing the given data set of the bills

// calcTip(bills[0]);
// calcTip(bills[1]);
// calcTip(bills[2]);
//(2.5)
//Call the calcTip function and pass it the individual values of each item from the bills array

// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

// console.log(tips, bills);
//3.
//container tips is equal to ALL 3 CALLED FUNCTION VALUES AND THEIR RESPECTIVE RESULT
// 18.75, 111, 4.4 RESPECTIVELY

// const cuntTotal = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
//ÄBOVE IS WHAT I SHOULD HAVE DONE INSTEAD OF TRYING TO REINVENT THE WHEEL AGAIN

//4. BONUS
// let total = [];
//the "total" variable is equal to an empty array so that the loop function below has something to fill
// for (
// 	let i = 0;
// 	i < bills.length;
// 	i++ // Initialise the loop, so long as the loop value of 'i' is less than the length of my bills array, it will execute //Go through the entire length of my bills array (bills.length)
// ) {
// 	total[i] = bills[i] + tips[i];
// }
//the value of the total array is equal to the value of the bills array, plus the tips array....
//We use the [i] syntax to specify the index of the element we want to access....idiot

//So when we write total[i] = bills[i] + tips[i], we're calculating the sum of the i-th bill and its corresponding tip, and storing that value in the i-th element of the total array. This allows us to create an array of the total amount for each bill, with the tip included.
// console.log(total);
//shit it out to the console - [143.75, 666, 48.4]

// Mercy's code:
// Using a for loop:

// const bills = [];
// let tips = [];

// for (const bill of bills) {
//     tips.push(bill + (.....));
// }

// for (let i; i < bills.length; i++) {
//     tips.push(bills[i] + (......));
// }

//Using the .map method:

// tips = bills.map(bill => bill + (bill > 50 ? bill * 0.2 : bill * 0.15));

// Dot vs Brackets notation
//=========================================
//OBJECTS
//=========================================

const pat = {
	firstName: "Pat",
	lastName: "Dummy",
	birthYear: 1994,
	job: "Plumber",
	friends: ["Pat", "Mercy", "Smelly"],

	// calcAge: function (birthYear) {
	// 	return 2023 - birthYear;
	// }

	// calcAge: function () {
	// 	console.log(this);
	// 	return 2023 - this.birthYear;
	// }

	calcAge: function () {
		this.age = 2023 - this.birthYear;
		return this.age;
	},

	patSummary: function () {
		this.patDeets = `${pat.firstName} is a ${this.calcAge()} year old ${
			pat.job
		}, and he lives in ${pat.location}.`;
		return this.patDeets;
	},
};

console.log(pat.job);
console.log(pat["job"]);

const nameKey = "Name";
console.log(pat["first" + nameKey]);
console.log(pat["last" + nameKey]);

// When we need to first compute the property name, we have to use the bracket notation
//in ALL other cases, use the dot notation since it's neater and easier to read and/or use

// const mrInteresting =
// 	"What do you want to know about Pat? Choose between firstName, lastName, job, age, and/or friends";

// if (pat[mrInteresting]) {
// 	console.log(pat[mrInteresting]);
// } else {
// 	console.log("WROOOOOONNNNGGGGG");
// }

// pat.location = "Australia";
// pat["Twitter"] = "@praedaK";
// console.log(pat);

// //print out "Pat has 3 friends and his best friend is Smelly"

// console.log(
// 	`${pat.firstName} has ${pat.friends.length} friends and his best friend is ${pat.friends[2]}`
// );

// // Print out "Pat is a 29 year old Plumber, and he lives in Australia"

// console.log(pat.patSummary());
// console.log(pat.patDeets);

const mark = {
	fullName: "Mark Miller",
	mass: "78",
	height: "1.69",

	bmiCalc: function () {
		this.bmi = Math.round(this.mass / this.height ** 2);
		return this.bmi;
	},
};

const john = {
	fullName: "John Smith",
	mass: "92",
	height: "1.95",

	bmiCalc: function () {
		this.bmi = Math.round(this.mass / this.height ** 2);
		return this.bmi;
	},
};

mark.bmiCalc();
john.bmiCalc();
console.log(john.bmi);
console.log(mark.bmi);

console.log(
	`John's BMI (${john.bmiCalc()}) is higher than Mark's BMI (${mark.bmiCalc()})!`
);

//I can't use this. unless it is nested  inside a function/object()

//FOR LOOPS

//Loop will keep running while condition is TRUE
//Loop will keep running so long as variable rep is equal to, or less than, 10
//everytime the loop iterates, we increment the variable rep counter by +1
//template literal to make the output string dynamic and it counts to 10!
for (let rep = 1; rep <= 10; rep++) {
	console.log(`Lifting weights, ${rep}`);
}

//the patty array we're going to loop through
const patty = [
	"Pat",
	"Dummy",
	1994,
	"Plumber",
	["Pat", "Mercy", "Smelly"],
	true,
];

const types = [];

//Again we're using [i] to access the index of the array
//Tell it to loop through the full length of the array (patty.length)
//log the output of the loop to the console
for (let i = 0; i < patty.length; i++) {
	console.log(patty[i], typeof patty[i]);

	//Here I take the empty array of types
	//Types at position i, the index, should be equal to the typesof at position i within the patty array
	//this is one way we can fill an empty array!!
	// types[i] = typeof patty[i];

	//another way I can fill and/or add elements to an empty array:
	//Using .push, it will add to the END of the empty array, types
	//this is the "cleaner" and more preferable way of adding elements to an array
	types.push(typeof patty[i]);
}

//Now when I log types to the console, it's filled with the TYPESOF contents of the patty array

console.log(types);

const patYears = [1991, 2007, 1969, 2020];
const patAges = [];

//Here we create a loop that loops through the full length of the patYears array
//Then we tell it to push (ADD TO END) of the empty array, and give it the argument to subtract each individual value in the patYears array, from 2023
//Subsequently filling the empty array, patAges, with each individual calculated value
for (let i = 0; i < patYears.length; i++) {
	patAges.push(2023 - patYears[i]);
}
//Then we print the result to the console
console.log(patAges);
//=========================================
//CONTINUE & BREAK FOR ARRAYS
//=========================================
//Here, if the type of the current element is NOT a string, then continue the loop

console.log("=====ONLY RETURN STRING VALUES MY DUDE=====");
for (let i = 0; i < patty.length; i++) {
	if (typeof patty[i] !== "string") continue;

	//So in the patty array, the numbers, and boolean value, consequently do NOT get printed to the console
	console.log(patty[i], typeof patty[i]);
}

//Here we tell the code to BREAK the loop when we hit a number, and output the result to the console
//So we get as far as "Pat" & "dummy" then when it finds "1994", the loop breaks

console.log("=====AS SOON AS A NUMBER IS FOUND, BREAK THE LOOP BRO=====");
for (let i = 0; i < patty.length; i++) {
	if (typeof patty[i] === "number") break;

	console.log(patty[i], typeof patty[i]);
}

//=========================================
//LOOPING BACKWARDS THROUGH AN ARRAY
//=========================================

const patbrah = ["Pat", "Dummy", 1994, "Plumber", ["Pat", "Mercy", "Smelly"]];

//Here I declare the loop counter, i, as being equal to the full length of the patbrah array (so start to finish), but MINUS 1, so it begins at the END
//So long as i is GREATER THAN OR EQUAL TO 0, the loop will run
//Everytime the loop iterates, we REDUCE the value on the "i" counter
for (let i = patbrah.length - 1; i >= 0; i--) {
	//Then I print the new value of the patbrah array, as well as the i loop counter
	console.log(i, patbrah[i]);
}

//=========================================
//		LOOP INSIDE OF LOOPS - LOOPCEPTION
//=========================================

//Here we create the "parent" loop, and begin our prayer to brodin, god if iron, cultivator of bodily mass, blesser of gains
// our loop counter is equal to sets, but will not loop more than 3 times
//print out a template literal to the console of the exercise number, up to 3, as declared

for (let sets = 1; sets <= 3; sets++) {
	console.log(
		`GLORY TO BRODIN, GOD OF IRON. START MASS OFF WITH EXERCISE ${sets}`
	);

	//Here I have the loopception child loop containing my rep counter
	//This loop is "assigned" (spotting the) to the sets loop, and will iterate LESS THAN OR EQUAL TO 6 times
	//Then we print out a template literal to the console of our swoley prayers

	for (let reps = 1; reps <= 6; reps++) {
		console.log(
			`GRANTED OF GAINS, SOURCE OF SWOLE, ALLOW YOUR FOLLOWERS TO CULTIVATE MASS WITH LIFT ${reps}`
		);
	}
}

// LITERALLY AS SOON AS I FINISHED WRITING THIS CODE, GOD TURNED OFF THE LIGHTS AT THE GYM AND THEY SENT US A TEXT SAYING GYM CLOSED UNTIL FURTHER NOTICE
///FUUUUUAAAARKKK
//'TWAS JUST A JOKE, GOD, BRO PLS

//=========================================
//					WHILE LOOPS
//=========================================

//While loops are good for loops that do not need a counter
//Declare loop value outside of the loop
//While the loop counter, starting at 1, is LESS THAN OR EQUAL TO 10
//Log output to the console, counting from 1 to 10
//Then increment the loop counter by 1 each iteration, ensure loop increment is within the while block
let loop = 1;
while (loop <= 10) {
	console.log(`testing while loops brooooo ${loop}`);
	loop++;
}

//Create new variable, dice, generate a random number (using Math.random() )
//Use Math.trunc to remove any decimal(s) that may be applied
//log value of dice to console
let dice = Math.trunc(Math.random() * 6) + 1;
console.log(dice);

//Here, we declare while dice is NOT equal to 6, then execute the random dice generator
//then we declare IF we roll the dice and get a 6, the loop will END and and log the fact to the console
//We can use a while loop here because we don't really need a counter

while (dice !== 6) {
	console.log(`You roll the dice, and you get a ${dice}`);
	dice = Math.trunc(Math.random() * 6) + 1;
	if (dice === 6) console.log(`Loop is ending.....`);
}

//=========================================
//CHALLENGE BROOOOOOO
//=========================================

//1. Create an empty array, "bills", containing our 10 test values
//2. Create empty arrays for the tips and the totals, "tips" & "totals"
//3. Use the calcTip function from the previous challenges to calculate tips and total values (bill + tip) for every bill value within the BILLS array
//4. Use a loop to perform the 10 calcs we need

//1.
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

//2.
const tips = [];
const totals = [];
const billsTipsTotals = [];

//3.
function calcTip(bill) {
	if (bill >= 50 && bill < 300) {
		return bill * 0.15;
	} else if (bill > 300) {
		return bill * 0.2;
	} else if (bill <= 50) {
		return bill * 0.1;
	} else {
		return "Cheap cunt";
	}
}

//4.
for (let i = 0; i < bills.length; i++) {
	tips.push(calcTip(bills[i]));
	// console.log("This is the Tips array", tips);
	totals.push(bills[i] + calcTip(bills[i]));
	// console.log("This is the totals array", totals);

	billsTipsTotals.push({
		bills: bills[i],
		tips: tips[i],
		totals: totals[i],
	});
	console.log(
		"This is the object of both arrays...maybe..perhaps",
		billsTipsTotals
	);
}

//Here I create a loop to iterate 10 times (the total value of my bills array), to calculate the values for both my empty TIPS and TOTALS arrays respectively
//Then using .push to fill my empty arrays, I pass my calcTip function to it as an argument and I feed THAT function, the entirety of the bills array (bills[i]), INTO the function as a value (bill)
//Then, using .push again, I fill my empty totals array with the resulting values of the now FILLED tips array PLUS the bills array, and subsequrntly fill my totals array with the sum value of my two given data sets

//INSTRUCTORS CODE
// const calcTip = function (bill) {
// 	return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// };

// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

// const tips = [];
// const totals = [];

// for (let i = 0; i < bills.length; i++) {
// 	const tip = calcTip(bills[i]);
// 	tips.push(tip);
// 	totals.push(tip + bills[i]);
// }

// console.log(bills, tips, totals);

// IMPROVE OR LOSE:

// Code organization: Your code is organized in a way that works, but it may be more clear and readable if you separate the logic for calculating tips and totals from the loop that iterates over the bills array. This can make your code more modular and easier to understand.

// Object structure: In your for loop, you are creating an array of objects that contain the bill, tip, and total for each iteration. This is a valid approach, but it can be more efficient and readable to use separate arrays for each value, like the instructor's code. This also makes it easier to perform calculations or sorting based on each value independently.
