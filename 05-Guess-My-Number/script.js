"use strict";
// to add emoji press win + . 👍
/*
console.log(document.querySelector(".message").textContent);
document.querySelector(".message").textContent = "🎉 Correct Number";

document.querySelector(".number").textContent = 13;
document.querySelector(".score").textContent = "??";

document.querySelector(".guess").value = 23;
console.log(document.querySelector(".guess").value);
*/

/**
 * On clicking the button with the class 'check', prints to
 * the console the value of the input with the class 'guess'.
 */
/*
document.querySelector(".check").addEventListener("click", function () {
  const guess = document.querySelector(".guess").value;
  console.log(guess, typeof guess);
});
*/

let score = 20;
let secretNumber = randomNumber();
let highScore = 0;
/**
 * Guess a number game.
 * The user is asked to guess a random number between 1 and 20.
 * He has 20 attempts and at every step a message inform the user
 * if the number he typed is higher or lower then the number to guess.
 * The highest score is saved and displayed at every game.
 */
function guessNumberGame() {
  // save the value of the input with the class 'guess'.
  const guess = Number(document.querySelector(".guess").value);
  // If there are attempts available.
  if (score > 1) {
    // if the input box is empty.
    if (!guess) {
      console.log("No number added");
      // When player wins
    } else if (guess === secretNumber) {
      // change the displayed text of the 'message' class
      displayMessage("🎉 Correct Number");
      // change the background color to green
      document.querySelector("body").style.backgroundColor = "#60b347";
      // increase the number size
      document.querySelector(".number").style.width = "30rem";
      // display the number in the 'number' class
      displayNumber(secretNumber);
      // if the score is higher than the high score, it is saved and displayed.
      if (score > highScore) {
        highScore = score;
        document.querySelector(".highscore").textContent = highScore;
      }
      // if guess is wrong
    } else {
      displayMessage(guess > secretNumber ? "😢 Too high!" : "😢 Too low!");
      score--;
      // change the displayed text of the 'message' score
      document.querySelector(".score").textContent = score;
    }
    // if there are not attempts available.
  } else {
    displayMessage("😢 You lost!");
    document.querySelector(".score").textContent = 0;
    displayNumber(secretNumber);
  }
}

/**
 * Display the message on the webpage.
 * @param {string} message - the message to be printed.
 */
function displayMessage(message) {
  document.querySelector(".message").textContent = message;
}

/**
 * Display the number or '?' on the webpage.
 * @param {(string, number)} value - the number or the '?' to be printed.
 */
function displayNumber(value) {
  document.querySelector(".number").textContent = value;
}

/**
 * Returns a random number between 1 and 20
 * @returns a random number between 1 and 20
 */
function randomNumber() {
  return Math.trunc(Math.random() * 20) + 1;
}

/**
 * Reset the page to its original state.
 * A new random number is generated.
 * Score is reset to 20, message to "Start guessing...",
 * input box is emptied, body background color to "#222",
 * number to "?" and its width to 15 rem.
 */
function reset() {
  score = 20;
  secretNumber = randomNumber();
  document.querySelector(".score").textContent = score;
  displayMessage("Start guessing...");
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
  displayNumber("?");
  document.querySelector(".number").style.width = "15rem";
}

// on clicking the button with the class 'check'
document.querySelector(".check").addEventListener("click", guessNumberGame);
// on clicking the button with the class 'check'
document.querySelector(".again").addEventListener("click", reset);
