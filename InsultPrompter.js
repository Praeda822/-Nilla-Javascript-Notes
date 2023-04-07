var randomCorrectNumber = Math.floor(Math.random() * 9) + 1;
//Select random number between 1 and 10
console.log(randomCorrectNumber);
//Print to console to ensure it works
var insultList = [
	"I can piss in a straighter line than you can count, cunt! Try again!",
	"They say lightning never strikes the same place twice, yet you've managed to fuck it up again with thunderous applause. Mate, what the fuck is wrong with you",
	"You're gonna go far with a head like a smashed crab. The sooner, the better. Try again.",
	"Cunt, with an answer like that, you've only got two brain cells and they're both fighting for third place",
	"Mate, I thought you were told you to give up the heroin; what the fuck",
];
//Array of insults to choose from, as dedicated to yours truly during #apprenticelyf

var randomInsult = insultList[Math.floor(Math.random() * insultList.length)];
//Container for the randomly selected insult, selected from the full length of the array (all items)
console.log(randomInsult);
//print selected insult to the console to see if it works..

for (var i = 0; i < 3; i++) {
	//Starts my loop counter variable (i) and sets its value to "0"
	//Check the loop condition to see if the loop should continue if i is less than attempts

	var yourGuess = prompt("Guess a number between 1 and 10, ya cheeky dog!");
	if (yourGuess == randomCorrectNumber) {
		//Checks if the answer is correct
		alert(
			"You bloody ripper cunt, you got it right! Go have an early smoko, cob, and may you have a day as pleasant as you are!"
			//print out a solid salt of the earth compliment. Yeahhh nice
		);
		break;
	} else {
		alert(
			(randomInsult = insultList[Math.floor(Math.random() * insultList.length)])
			//Picks another random insult from the full length of the array
		);
		console.log(randomInsult);
		//Picks a random insult from the full length of the insults array
		//Then log it to the console
	}
	if (i == 2) {
		alert(
			"If you were on fire, and I had a hose, I'd wrap it around my neck and jump. You had THREE attempts and you fucked them ALL up!"
			//Checks if the user is out of attempts, insults them
		);
		break;
		//Stops loop
	}
}
