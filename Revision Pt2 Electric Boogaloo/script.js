'use strict';

//========================================
// Write a function that takes an array of numbers and returns the sum of all the numbers.
//========================================

//fuction sum, create two arguments for two numbers to be summed
//return number a + number b

function sum(a, b) {
  return a + b;
}

//========================================
// Write a function that takes a string as an argument and returns the string reversed.
//========================================

//create function, reverseString, create argument to declare the string
//return the str, split method to break it up, reverse method to reverse it backwards, join method to put it all back together

function reverseString(str) {
  return str.split('').reverse('').join('');
}

//========================================
// Write a function that takes a string as an argument and returns the number of vowels in the string.
//========================================

function getVowel(str) {
  let vowelsCount = 0;
  const vowels = ['a', 'e', 'i', 'o', 'u'];

  for (let i = 0; i < str.length; i++) {
    //Had an error before by putting a dot (.) after my includes method, which is invalid, as after the includes method I'm expected to provide an argument of what includes needs needs to look at
    //By including that dot, the code was expecting me to pass another method to the vowels object
    //Then I pass another method, toLowerCase, to ensure the vowels being checked for are lower case (as is in my array)
    //Then I increment my vowelsCount variable by one

    if (vowels.includes(str[i].toLowerCase())) {
      vowelsCount++;
    }
  }
  //Lastly, I actually tell my function what to do when it is called, which is to return the number of vowels in any given string passed as ana rgument to my fucntion (str)

  return vowelsCount;
}

//========================================
// Write a function that takes an array of strings and returns a new array with all the strings capitalized.
//========================================

//First array contains 3 strings to be returned in CAPITALS
const strArr = [
  'this is my array containing three seprate strings',
  'I hope this works the way I think it does',
  'only one way to find out, though..',
];

//Second array is empty as I want to push the contents of my first array into it
let newArr = [];

//create my function and pass the strArr array containing my strings as an agrgument to it
function toCapital(strArr) {
  //For Loop to iterate through the entire length of strArr
  for (let i = 0; i < strArr.length; i++) {
    //Push the contents of strArr to the empty array, newArr
    newArr.push(
      //HERE IS WHERE YOU FUCKED UP BRO
      //PASS toUpperCase() method TO EACH FUCKING STRING YOU WANT TO CAPITALIZE, YOU IDIOT
      // strArr[0].toUpperCase(),
      // strArr[1].toUpperCase(),
      // strArr[2].toUpperCase()
      strArr[i].toUpperCase()
    );
  }
  //Return the new value, and contents, of the previously empty array
  //RETURN IT OUTSIDE OF THE FUCKING LOOP IF YOU WANT MULTIPLE ITERATIONS
  return newArr;
}

//when I wrote the first iteration of this, I did the following and it would only push the first string in my original array leaving the others behind:

// newArr.push(strArr[i])

//The above was doing that BECAUSE THE LOOP WOULD EXIT AFTER IT'S FIRST ITERATION SINCE I WAS RETURNING IT INSIDE THE LOOP
//WHENEVER I USE RETURN, IT IMMEDIATELY EXITS THE LOOP AND STOPS ITERATING OVER ITSELF - return STOPS THE LOOP, MAN

//========================================
// Write a function that takes an object and returns the number of properties on the object.
//========================================

//Create my object with 4 values here
const myObject = {
  name: 'Pat',
  age: 29,
  occupation: 'Plumber',
  learningJavascript: true,
};

let objectTotal = 0;
//Create a function called objectCount that will return how many items are present in my object'
//I use "Object.keys(myObject).length" instead a for loop to return a flat value of 4, with no properties assigned
//Object.keys is a static method I can use to enumerate (count) the number of string-keys within either an object or array
//I can use Object.keys instead of a for loop if I don't need to also return the property values within an object/array as well
//Then pass .length to iterate through the entire object/array
//Object.keys(yourObjectOrArrayGoesHere).length
function objectCount(myObject) {
  //   return Object.keys(myObject).length;

  //LOOPING THROUGH OBJECTS IS DIFFERENT TO LOOPING THROUGH ARRAYS
  for (let key in myObject) {
    //So here I create a loop and I'm checking for the property, in this case the OBJECT KEY VALUE (key), IN (within), THE OBJECT I WANT TO LOOP THROUGH (myObject)

    if (myObject.hasOwnProperty(key)) {
      objectTotal++;
    }
  }
  return objectTotal;
}

//========================================
// Write a function that takes an array of numbers and returns a new array with all the numbers doubled.
//========================================

//Array to hold my numbers to be doubled
const numArr = [1, 69, 420, 2];
//Empty array to hold the doubled numbers taken from numArr
let newNumArr = [];

//Function with the array containing my numbers passed to it as an argument

function doubleNum(numArr) {
  //For loop to loop through the entire length of of the numbers array
  for (let i = 0; i < numArr.length; i++) {
    //fill the empty array, newNumArr, with the data set within numArr, then double them
    newNumArr.push(numArr[i] * 2);
  }
  //RETURN THE NEW, FILLED ARRAY OUTSIDE OF THE FUCKING LOOP SO IT DOESN'T BREAK LIKE BEFORE
  //DAB ON THE HATERS
  return newNumArr;
}

//========================================
// Write a function that takes an array of strings and returns a new array with only the strings that contain the letter "a".
//========================================

//Array containing strings, some with the letter "a", others without

const letterStrArr = [
  'Letter A can be found here',
  'Letter A can be found here',
  'mom',
  'no letter vowel of you know who....',
  'Letter A can be found here',
];

//Empty array to be filled with full strings containing the letter "a", and ONLY those full strings
let letterNewArr = [];

//Function containing my logic, pass it the populated array as an argument
function onlyContains(letterStrArr) {
  //Loop over the array
  for (let i = 0; i < letterStrArr.length; i++) {
    //If the populated array, letterStrArr, INCLUDES (static method includes() ) the string value of "a"
    if (letterStrArr[i].includes('a')) {
      //Then push, to the empty array letterNewArr, the full string value that contains the aforementioned parameter, checking throughout the entirety of the original populated array
      //So it should ignore the shit about vowels & mom
      letterNewArr.push(letterStrArr[i]);
    }
  }
  //Return (legally), the value of the now populated array
  return letterNewArr;
}

//========================================
// Write a function that takes an array of objects and returns a new array with only the objects that have a "name" property.
//========================================

//========================================
// Write a function that takes a string and a number as arguments and returns a new string that repeats the original string the specified number of times.
//========================================

//========================================
// Write a function that takes a number as an argument and returns a new array with all the numbers from 1 to the specified number.
//========================================
