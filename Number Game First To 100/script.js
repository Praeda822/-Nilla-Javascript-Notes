'use strict';

//=======================================
//Selecting the elements
//=======================================

//Selecting my two players and assigning them a variable each
const player0El = document.querySelector('.player--0');

const player1El = document.querySelector('.player--1');

const score0El = document.querySelector('#score--0');

//A way I can get the element by it's hashtag ID is to use the getElementById method
//It's better for me to use the getelementbyid because it's apparently faster than the query selector
const score1El = document.getElementById('score--1');

//Selecting player 1's score by selecting the ID
const current0El = document.getElementById('current--0');
//Selecting player 2's score by selecting the ID
const current1El = document.getElementById('current--1');

//=======================================
//Selecting & Manipulating the dice element
//=======================================
//These are the variables holding the selections for each state of the die
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

//=======================================
//Starting Conditions
//=======================================

let scores, currentScore, activePlayer, playing;

//=======================================
//Storing the starting conditions in a function call
//=======================================

//Function init (initialise) contains the default starting conditions for the game
const init = function () {
  //Store both player's final scores in an array
  scores = [0, 0];

  //Variable to hold the player's current score
  currentScore = 0;

  //Variable to hold the active player
  activePlayer = 0;

  //Variable to hold the game state
  playing = true;

  //Here I set both of my scores to 0
  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;
  //Here I want the dice default state to be hidden
  diceEl.classList.add('hidden');
  document;
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
};

//Call my initialise function to start the game
init();
console.log(init);

//=======================================
//Function to hold the active players state
//=======================================

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;

  //If the active player is player one (0), then change to player 2 (1), otherwise change/stay on Player 1 (0)
  activePlayer = activePlayer === 0 ? 1 : 0;

  //Here I pass the toggle method to highlight which player is the active player by adding the "active" class to the player variable, which contains the selection for each player
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

//=======================================
//Generating the random dice roll (1-6)
//=======================================

//I create an event listener to listen for the click on the btnRoll variable, indicated above, which contains the selection for the roll dice element
btnRoll.addEventListener('click', function () {
  //Checking if the game is in the TRUE state for the playing variable
  if (playing) {
    const dice = Math.trunc(Math.random() * 6) + 1;
    console.log(dice);
    //I display the dice when button is clicked
    diceEl.classList.remove('hidden');
    //I use a template literal to update the dice picture to correspond with the output value given when dice roll is clicked
    diceEl.src = `dice-${dice}.png`;

    //=======================================
    //Check if the player rolls a 1 to swap
    //=======================================

    if (dice !== 1) {
      //Add the dice to the current score
      currentScore += dice;

      //Use a template literal to change the text content of the active player variable and update the text content of it to reflect the current score
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;

      //Update Player 1's score
      //  current0El.textContent = currentScore;

      //=====================================
      //Switch to the next player
      //=====================================
    } else {
      //Call the switchPlayer function to execute the logic commented below
      switchPlayer();

      //Commented out the logic to refactor the code into a function, to reduce overall code and make it neater and easier to read
      //  document.getElementById(`current--${activePlayer}`).textContent = 0;
      //  currentScore = 0;
      //  activePlayer = activePlayer === 0 ? 1 : 0;
      //  player0El.classList.toggle('player--active');
      //  player1El.classList.toggle('player--active');
    }
  }
});

//=======================================
//Adding the scores to the active player score - HOLD button
//=======================================

btnHold.addEventListener('click', function () {
  if (playing) {
    //Add current score to active player's score
    scores[activePlayer] += currentScore;

    //   scores[1] = scores[1] + currentScore;
    //When it's player 0's turn (Player 1), that (Player 1) active player will get selected and update the scores array with what that active player (Player 1) got
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    //=======================================
    //Ending the game
    //=======================================

    //Check if player's score is >= 100

    //Here I declare if the active players score, stored within the scores array, is GREATER THAN OR EQUAL TO 20, then select the active player, using a template literal, and add the player--winner class, which will apply an off-black background to indicate that player has won
    //In the same if statement, I also declare to REMOVE the player--active class so that activePlayer only has the winner class and we can subsequently end the game
    //If this condition hasn't been met yet, I declare the block to call the switchPlayer function to change players

    if (scores[activePlayer] >= 100) {
      //Finish the game
      playing = false;
      diceEl.classList.add('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      //Switch to the next player
      switchPlayer();
    }
  }
});

//=======================================
//Resetting the game
//=======================================

btnNew.addEventListener('click', function () {
  init();
});
