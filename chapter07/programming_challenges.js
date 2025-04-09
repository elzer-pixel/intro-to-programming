
// PROGRAMMING CHALLENGES
// # 1 Adding new words to the array
let words = [
    "javascript", 
    "monkey",
    "amazing", 
    "pancake",
    "pizza",
    "samoosa",
    "pie"
];

// Pick a random words
let word = words[Math.floor(Math.random() * words.length)];

// Creating the answer array
let answerArray = [];
for (let i = 0; i < word.length; i++){
    answerArray[i] = "_";
}

let remainingLetters = word.length;

// Coding the game loop
gameLimit = 0;
while(remainingLetters > 0 || gameLimit < 10){
    // Show the player their progress
    alert(answerArray.join(" "));
    // Get a guess from the player
    let guess = prompt("Guess a letter, or click Cancel to stop playing");
    // # 2 Converting the user input to lower case
    guess = guess.toLowerCase() 

    if(guess === null){
        break;
    }else if (guess.length !== 1){
        alert("Please enter a single letter.")
    } else {
        // Updating the game state
        for(let j = 0; j < word.length; j++){
            if(word[j] === guess){
                answerArray[j] = guess;
                remainingLetters--;
            }
        }
    }
    // Incrementing the limit number, the game will end when game limit is 10
    gameLimit++;
    console.log(gameLimit)
// The end of the game loop
}

// Show the answer and congratulate the player
alert(answerArray.join(" "));
alert("Good job! The answer was " + word);