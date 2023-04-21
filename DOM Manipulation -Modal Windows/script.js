'use strict';

//=========================================
//Working with Modals & Selecting groups
//=========================================

//Selecting the modal, overlay, and close modal classes
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
//I have THREE .show-modal's, so I use document.querySelectorAll to be able to select all of them
const btnsOpenModal = document.querySelectorAll('.show-modal');
// console.log(btnsOpenModal);

//Cheeky for loop to loop through the btnsOpenModal node list (which works like an array)
//Because there's only one line of code im executing, I don't need to use the squiggly braces to define a block

// for (let i = 0; i < btnsOpenModal.length; i++)

//Here I log the output to the console of the bntsModalOpen array starting at the first index value [i], then pass the textContent argument to return what the text says instead of the raw HTML
//   console.log(btnsOpenModal[i].textContent);

//=========================================
//Working with Classes
//=========================================

//I also want my modal window to be hidden when I click on the overlay wrapper, so I do the same again
//HOWEVER, WE CAN'T REPEAT OUR CODE AS IT'S BAD PRACTICE SO WHAT CAN I DO????

//I create a closeModal function, and store it within a variable, so whenever I want to close the modal window I am able to do so

const closeModal = function () {
  console.log('Button clicked!');
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

//I also create a openModal function that REMOVES the hidden class from both my modal and my overlay elements

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

//Here I've assigned an event listener to listen for a click when a button is clicked, and it's executed within my loop
//Then, instead of logging the output to my console, I tell all the buttons in the node list array at the first index value ([i]), to execute the openModal function
for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);
//  console.log('Button Clicked!');

//Here I specify the modal class, and because I'm going to manipulate the classes assigned to it, I pass the classList property, THEN I next add the remove method to it, to subsequently remove the hidden class from the element
//Now when I click on any of the modals, the modal window will pop up

//  modal.classList.remove('hidden');

//I also need to remove the hidden class from the "overlay" element, as well

//  overlay.classList.remove('hidden');

//Now I want to be able to hide the window without reloading the whole page, so I need to add an event listener to the modal that waits for the click event
//So I pass the ADD method, and add back the "hidden" element to both the overlay & modal elements

//BUT I ONLY ONLY ONLY WANT TO CALL THAT FUNCTION WHEN A CLICK HAPPENS!!! SO:

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

//So instead of the, now commented code below, the function is called (above) ONLY when a click happens and I apply that function to both the close button on the modal, AND to the overlay

// btnCloseModal.addEventListener('click', function () {
//   closeModal();
// });

// overlay.addEventListener('click', function () {
//   closeModal();
// });

//=========================================
//Handling Keyboard Events
//=========================================

//Here I log to the console when a keyboard key was pressed, any key, by listening for a "keydown"
//to specify, and aascertain, exactly which key was pressed, we pass "e" to the function, or event
//So I log "e", followed by the unique key value "key", so "e.key" to the console, and it tells me EXACTLY what key was pressed, because I'm asking for the "key" value

document.addEventListener('keydown', function (e) {
  console.log(e.key);

  //Here I declare if the modalClasslist, so the modal class, DOESN'T CONTAIN the class "hidden", then I call the closeModal function to close the modal window using the ESCAPE key
  //BUT instead of nesting if statements, I can aggregate my code down to one single line
  //So, using && I aggregate my code down to a single line:
  //IF the event key (e.key) that was pressed is EXACTLY EQUAL TO "escape" (Esc) AND the classlist assigned to the modal element DOESN'T contain the class "Hidden", then it will call the closeModal() function.

  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
