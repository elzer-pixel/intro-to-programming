// Write your functions here

function pickWord() {
  // Return a random word
  let words = ["Javascript", "monkey", "amazing", "pancake"]
};
function setupAnswerArray(word) {
  // Return the answer array
};
function showPlayerProgress(answerArray) {
  // Use alert to show the player their progress
};
function getGuess() {
  // Use prompt to get a guess
};
function updateGameState(guess, word, answerArray) {
  // Update answerArray and return a number showing how many
  // times the guess appears in the word so remainingLetters
  // can be updated
};
function showAnswerAndCongratulatePlayer(answerArray) {
  // Use alert to show the answer and congratulate the player
};

let word = pickWord();
let answerArray = setupAnswerArray(word);
let remainingLetters = word.length;

while (remainingLetters > 0) {
  showPlayerProgress(answerArray);
  let guess = getGuess();
  if (guess === null) {
    break;
  } else if (guess.length !== 1) {
    alert("Please enter a single letter.");
  } else {
    let correctGuesses = updateGameState(guess, word, answerArray);
    remainingLetters -= correctGuesses;
  }
}
showAnswerAndCongratulatePlayer(answerArray);
