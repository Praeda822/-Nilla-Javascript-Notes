"use strict";

// Create a function that takes two parameters (a and b) and returns the sum of the two numbers.

function sum(a, b) {
	return a + b;
}

//========================================
// Create a function that takes an array of numbers as a parameter and returns the largest number in the array.
//========================================

//Create my array of 4 numbers, call it const
const arr = [0, 1, 2, 3];

//create function called numBig, pass it the array stored in my const
function numBig(arr) {
	//output the "Math.max" method to return the highest number in the passed array argument,
	//use the spread operator so the logic checks through the whole operator
	return Math.max(...arr);
	//Should return a 3....
}
//CALL THE FUNCTION, YOU IDIOT
numBig(arr);

//========================================

//========================================
// Create a function that takes a string as a parameter and returns the string in reverse order.
//========================================

//https://www.programiz.com/javascript/examples/reverse-string

function reverseString(str) {
	//str.split will break up the string, declare empty string to be broken ((""))
	//Pass the .reverse method, declare empty string to be reversed ((""))
	//Pass .join method to put it all back together again, delcare empty string (("")) to be joined
	return str.split("").reverse("").join("");
}
reverseString("Put it in REVERSE, Terry!!");
//========================================

//========================================
// Create a function that takes a number as a parameter and creates that number of div elements in the HTML document.
//========================================

//https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement

//Will add my new element whenever I load the page by calling the function when the page is loaded and subsequently puts it into the body
// document.body.onload = makeDiv;

//Created a function to store the logic to generate my element
function makeDiv(n) {
	//Create a for loop and nest it within my function logic to run however many times "n" is specified, be it 5 times or 500
	for (let i = 0; i < n; i++) {
		//Select the document, pass the method to create a new element, delcare it as a div element ("div")
		const newDiv = document.createElement("div");

		//Created a variable called newContent and store the text content to add within
		const newContent = document.createTextNode(
			"Hello, I am the only & only: RATMAN"
		);

		//Declare newDiv as object element, pass it appendChild method to add the new content variable, holding the text content, to it
		newDiv.appendChild(newContent);

		//add the newDiv variable (container) to the page, store it within a new variable called currentDiv
		//Do I even need that variable??
		document.body.append(newDiv);
	}
}

//========================================

//========================================
// Create a function that changes the background color of an HTML element when it is clicked.
//========================================

//Create the selector element for the button using my .test class
//tell it to wait for the click, then create my anonymous function
//nest the same button selector, using .test, and tell it to change the background colour to dog poo brown....
//dab on the haters
document.querySelector(".test").addEventListener("click", function () {
	document.querySelector(".test").style.backgroundColor = "#681A09";
});

//========================================

//========================================
// Create a function that adds a new HTML element to the page when a button is clicked.
//========================================

//Re use my old code....
//Provide logic for the test button and its click event handler + anon function
//pass the makeDiv function I made earlier as an argument, and 2 for 2 new element, for it when it's clicked
//EZ SAUCE

document.querySelector(".test").addEventListener("click", function () {
	makeDiv(2);
});

//========================================
// Create a function that toggles the visibility of an HTML element when a button is clicked.
//========================================

//Create 3 variables to select the lorem main container, and my two buttons
const main = document.querySelector(".main");
const sneaky = document.querySelector(".sneaky");
const not = document.querySelector(".not");

//created a function called hideContent to add my .hidden class to the main lorem container
const hideContent = function () {
	main.classList.add("hidden");
};

//Created a function called showContent to remove the .hidden class from the main lorem container
const showContent = function () {
	main.classList.remove("hidden");
};

//add event listeners to both the .sneaky and .not buttons to listen for a click, and then to call the showContent & hideContent functions, respectively
//dab on the non-believers
sneaky.addEventListener("click", hideContent);
not.addEventListener("click", showContent);

//========================================

//========================================
// Create a function that retrieves data from an API and displays it on the page.
//========================================

//https://www.geeksforgeeks.org/how-to-use-the-javascript-fetch-api-to-get-data/

//First, I create a variable and store my API within it
// const api_url = "https://employeedetails.free.beeceptor.com/my/api/path";

// //Next I create an asynchronous function, and pass my api_url function to it
// async function getApi(url) {
// 	//Next, store the response in a constant variable so it can't change
// 	const response = await fetch(url);

// 	//Store the fetched API data in a "JSON"
// 	var data = await response.json();
// 	console.log(data);
// 	// 	if (response) {
// 	// 		hideloader();
// 	// 	}
// 	show(data);
// }

// //Next I call the function, and this prints out all of Mismagius' data to my console
// getApi(api_url);

// //Function to hide the "loader"
// // function hideLoader() {
// // 	document.getElementById("loading").style.display = none;
// // }

// //Function to define the innerHTML for the HTML table
// //Define to show Name, Types, Height, and Weight
// function show(data) {
// 	let tab = `<tr>
//          <th>Name</th>
//          <th>Office</th>
//          <th>Position</th>
//          <th>Salary</th>
//       </tr>`;

// 	//for loop to access all rows

// 	for (let row of data.list) {
// 		tab += `<tr>
//    <td>${row.name} </td>
//    <td>${row.office} </td>
//    <td>${row.position} </td>
//    <td>${row.salary} </td>
//    </tr>`;
// 	}

// 	//Setting the innerHTML as the tab variable

// 	document.getElementById("employees").innerHTML = tab;
// }

//LE FUCKED
//FIX L8R

//========================================
// Create a function that validates a form before it is submitted.
//========================================

//https://www.w3schools.com/js/tryit.asp?filename=tryjs_validation_number

// Create a function that creates a slideshow of images using JavaScript and
