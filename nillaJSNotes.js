//==================================================================================================
// BMI CALCULATOR
//==================================================================================================

//CREATE FUNCTION NAMED bmiCalculator THAT IS EQUAL TO (WEIGHT / (HEIGHT^2))

function bmiCalculator(myWeight, myHeight) {
	// DECLARE VARIABLE myBmi AS THE CONTAINER/BOX FOR THE CALCULATION

	// PLACE CALC INSIDE myBmi BOX

	var myBmi = Math.round(myWeight / Math.pow(myHeight, 2));

	// RETURN THE VALUE OF THE myBmi VARIABLE

	return myBmi;
}

//DECLARE ANOTHER VARIABLE, bmi, AS CONTAINER/BOX FOR THE CALCULATED RESULT

var bmi = bmiCalculator(83, 1.87);

// LOG RESULT OF NEW VARIABLE bmi TO THE CONSOLE, COMMENT TO ENSURE ANSWER IS CORRECT

console.log(bmi); //24

//=======NOTES=======

//What the actual $%^$! does "Expected NaN to equal 15." even mean??????

// Math.round TO ROUND UP THE ANSWER TO A WHOLE NUMBER, NOT DOWN WITH .FLOOR

//Math.round(myHeight * myHeight));, OR Math.pow(myHeight, 2));, NOT Math.round(myHeight^2));,

//==================================================================================================
// ARRAYS PRACTICE
//==================================================================================================
var output = []; //Create the empty array
var current = 1; //Create the container intended to be incremented up by 1

function fizzBuzz() {
	// The function logic
	output.push(current); //.push adds to the END of the "output" array, specifying I want the "current" var to be added to my array
	current++; //Increment the "current" container by +1 when function is called
	console.log(output); //Output to console
}

fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();

//==================================================================================================
// FIBONACCI GENERATOR
//==================================================================================================

function fibonacciGenerator(n) {
	var output = [];
	var a = 0;
	var b = 1;

	for (var i = 0; i < n; i++) {
		//Starts my loop counter variable (i) and sets its value to "0"
		//Checks my loop condition to be true (is "0" LESS THAN the given "n" value?) so loop will crack on
		//Increments the value of of my loop counter variable by +1 each time it is run

		output.push(a);
		//Adds the value of "a" to the END of my empty output array

		var placeHolder = a;
		//Stores the value of "a" (0) in a new container called "placeHolder", so now "placeHolder = 0"

		a = b;
		//Changes the value of my "a" container to that of my "b" container (1), so now "a = 1", HOWEVER "placeHolder" still holds the OLD value of "a" (0)

		b = placeHolder + b;
		//My "b" container now becomes the sum of placeHolder (which now holds the value of "a", now 1) + my   "b" container (which is still 1 as it never changed)
		//My "b" container now becomes "2", as "1 + 1 = 2"
		//When I loop my code, it follows the aforementioned logical process, so now:
		//"placeHolder = 1", then "a = 2" (a = b, since "b" became 2 in the last iteration)
		//Thus, "b" = 3, since "b = placeHolder + (b's value)"
	}
	return output;
	//Returns my array of fibonacci numbers, starting from 0.
}
