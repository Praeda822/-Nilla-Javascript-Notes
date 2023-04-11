var randomLocation = Math.floor(Math.random() * 5);
var location1 = randomLocation;
var location2 = location1 + 1;
var location3 = location2 + 1;
var guess;
var hits = 0;
var guesses = 0;
var isSunk = false;

while (isSunk == false) {
	guess = prompt("Ready, aim, fire! (enter a number between ONE and SIX:");

	if (guess < 0 || guess > 6) {
		alert("Please enter a valid cell number!");
	} else {
		if (guess == location1 || guess == location2 || guess == location3) {
			hits++;
			guesses++;

			alert("HIT!");

			if (hits == 3) {
				isSunk = true;
				alert("You sank my battleship!");
			}
		} else {
			guesses++;
			alert("MISS");
		}
	}
}
var stats =
	"You took " +
	guesses +
	" guess to sink my Battleship, " +
	"which means your shot accuracy was " +
	3 / guesses;
alert(stats);

//assume appliance/hottie draws 42 MJ/h
//Natural gas 38MJ/m3
//Defer to AS/NZS 5601

// const gasConsumption = 42;
// in MJ/h
// const natGasHeatVal = 38.7;
// in MJ/m^3

function calculateHeatInputRating(gasConsumption, natGasHeatVal) {
	const consumptionRate = gasConsumption / natGasHeatVal; // in m^3/h
	const heatInputRating = (consumptionRate / 100) * 100; // in kW
	return heatInputRating.toFixed(3) + "kW";
	//toFixed will round my answer off to the THIRD decimal place
}

function calculateFlueSize(gasConsumption, natGasHeatVal, heatInputRating) {
	const consumptionRate = gasConsumption / natGasHeatVal; // in m^3/h
	const gasWeight = 0.6; // in KG/m^3
	const gasFlowRate = consumptionRate * gasWeight; // in KG/h
	const flueDiameter = 5 * (heatInputRating / gasFlowRate); // in mm
	// const heatInputRating = (consumptionRate / 100) * 100; // in kW
	return flueDiameter.toFixed(3) + "mm";
}

// calculateFlueSize();
// FLUE DIAMETER = 5 x (HEAT INPUT RATING / FLUE GAS FLOW)
// COVERT THE FUCKING GAS CONSUMPTION RATE TO IT'S WEIGHT BY MULTIPLYING THE CONSUMPTION RATE BY THE WEIGHT OF THE FUCKING GAS: 0.6 (NG)
//THIS GIVES ME THE FLOW RATE OF GAS

calculateHeatInputRating(42, 38.7);
calculateFlueSize(42, 38.7, 1.085);

const gasConsumption = 42;
// in MJ/h
const natGasHeatVal = 38.7;
// in MJ/m^3
// const gasWeight = 0.6;
//in kg/m^3
const heatInputRating = calculateHeatInputRating(gasConsumption, natGasHeatVal);
const flueDiameter = calculateFlueSize(
	gasConsumption,
	natGasHeatVal,
	heatInputRating
);
console.log(heatInputRating);
console.log(flueDiameter);
