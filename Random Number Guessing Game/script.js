'use strict';

//========================================
//    Selecting/Manipulating elements in the DOM
//========================================

//I can select items in the DOM using document.querySelector
//When I document.querySelector, I need to declare what I want to select, in this case it's a CSS class
//To change the text of that element, I can use the textContent argument

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textcontent = 'Correct Number!';

// document.querySelector('.number').textContent = 13;

// document.querySelector('.score').textcontent = 10;

//Here I document.querySelector the .guess class, and since it's a number, and expects a value, I can use the .value argument and give it a custom value, 23 in this case
//So now the empty guess box is filled with "23"

// console.log(document.querySelector('.guess').value);
// document.querySelector('.guess').value = 23;

//========================================
//       Manipulating button clicks
//========================================

//Here I've created a random number generator between 1-20 and assigned it to a variable, using Math.random(), and removed the decimal from the output by using Math.trunc()
let secretNumber = Math.trunc(Math.random() * 20) + 1;

//NOW, when I select the .number element using querySelector, and assign it the value of the number variable, which holds the 1-20 random number generator
//but what about comparing it to the secret number???

//This is a STATE VARIABLE, because this score is part of the application state - all the data related to the application, and all the data should ALWAYS be available somewhere in our code, and not related to the DOM
let score = 20;

let highscore = 0;

//Here I've created a function with the argument message, to replace all the document.querySelector lines that update the message element, instead calling a function to do it BECAUSE I SHOULDN'T REPEAT CODE
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

//Here I select the check button, using the check class (otherwise I would effect ALL buttons on the page
//so document.querySelector to select the element, delcare the class.....
//Then I call the addEventListener method, and since it's a method I need to CALL it using parentheses()
//Then I pass in to the method what I what I want it to listen for, in this case a CLICK
//Next, I need to pass a second argument, a function value (a function IS JUST A VALUE), as a SECOND ARGUMENT
//So I create a function, declare the squigglies to pass what I want my function to do...
//and I want my function to log to the console the VALUE of the .guess element
//Note that I don't CALL the function anywhere, but rather I pass it to Javascript, and will subsequently only be called WHEN the button is clicked!
//Then I assign the output to a variable and print that variable to the console
//Remember though, that it's outputting a STRING (white text in console), not a number, so I'll need to convert the string to a NUMBER using the NUMBER function
//then I double check this by passing the typeof argument into my console.log
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  //If there is NO guess, we get a FALSY value, and will always evaluate to a boolean
  //By using the negation operator, I can convert this boolean from false top true by returning something we want it to do when there's no guess and execute the .message change block of code below

  //When there is NO input
  if (!guess) {
    displayMessage('No number, maaaaaan');
    //SO I declare an else if, and say if the guess is bang on equal to the secret number, then it will output the WINNER text to the .message element!!!
    //But I ALSO need something to compare the number to - a secret number....

    //When the player wins!
  } else if (guess === secretNumber) {
    displayMessage('You win, bro, well done!');
    //I also want to have the secret number hidden unless the player wins so I nest it within my else if winnerstatement
    document.querySelector('.number').textContent = secretNumber;

    //SO I declare an else if, and say if the guess is bang on equal to the secret number, then it will output the WINNER text to the .message element!!!

    //Here I want to change the background color to green if the player wins, so I select the body, then use .style, then use .cssClass (camelCase in JS), THEN I declare the hexa value IN A STRING!!
    //WHEN MANIPULATING STYLES, ALWAYS DELCARE A STRING!!!!!
    document.querySelector('body').style.backgroundColor = '#60b347';

    //I do the same again, but I select the width of the number element, and double it's value from 15rem to 30rem WITH A STRING
    document.querySelector('.number').style.width = '30rem';

    //Updating the highscore
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    //Here I refactored my code with a TERNARY OPERATOR to:
    //If the guess is GREATER THAN the secret number, then execute the string (?), else (:) execute this string

    //When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(
        guess > secretNumber
          ? 'Your guess was too high!'
          : 'Your guess was too low!'
      );
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You lose!');
      document.querySelector('.score').textContent = 0;
    }
  }

  //When guess is too high!
  //   else if (guess > secretNumber) {
  //     if (score > 1) {
  //       document.querySelector('.message').textContent =
  //         'Your guess was too high!';
  //       //Then I increment the score down by 1 for both every right, and wrong, guess, and using querySelector, update the textContent of the score element with the new value of the score variable
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       //But I ONLY want to increment the score down if the number is GREATER than 0, and inform that YOU LOSE, and set score to 0 so it can't go below -1
  //       document.querySelector('.message').textContent = 'You lose!';
  //       document.querySelector('.score').textContent = 0;
  //     }

  //When guess is too low!
  //   } else if (guess < secretNumber) {
  //     //Then I do the same thing again, but for less than the secret number!
  //     if (score > 1) {
  //       document.querySelector('.message').textContent =
  //         'Your guess was too low!';
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent = 'You lose!';
  //       document.querySelector('.score').textContent = 0;
  //     }
  //   }
});

//1. Select the again button element and attach a click event handler to it
//2. In the handler function, restore the initial values of the score and secretNumber variables
//3. Restore the initial conditions of the message, number, score, and guess input field
//4. Also restore the original background colour (#222) and number element width (15rem)

//1.
const reset = function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  (document.querySelector('.guess').value = '') +
    displayMessage('Start guessing...') +
    (document.querySelector('.score').textContent = score) +
    (document.querySelector('body').style.backgroundColor = '#222') +
    (document.querySelector('.number').textContent = '?') +
    (document.querySelector('.number').style.width = '15rem');
};

//2.
document.querySelector('.again').addEventListener('click', function () {
  reset();
});
