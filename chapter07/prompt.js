// // Creating a prompt input
// let name = prompt("What is your name?");
// console.log("Hello " + name);

// // Using the confirm function to get a boolean value from the user
// let likesCats = confirm("Do you like cats?")
// if (likesCats){
//     console.log("You're a cool cat!");
// } else {
//     console.log("Yeah, that's fine. You're still cool!");
// }

// // using alert to give user information
// alert("JavaScript is awesome")

// CODING THE GAME
let words = [
    "javascript", 
    "monkey",
    "amazing", 
    "pancake"
];

// Pick a random wors
let word = words[Math.floor(Math.random() * words.length)];
console.log(word); // Shows us the secret word

// Creating the answer array
let answerArray = [];
for (let i = 0; i < word.length; i++){
    answerArray[i] = "_";
}
console.log(answerArray) // shows us the the filled answerArray

let remainingLetters = word.length;

// Coding the game loop
while(remainingLetters > 0){
    // Show the player their progress
    alert(answerArray.join(" "));
   
    // Get a guess from the player
    let guess = prompt("Guess a letter, or click Cancel to stop playing");
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
// The end of the game loop
}

// Show the answer and congratulate the player
alert(answerArray.join(" "));
alert("Good job! The answer was " + word);