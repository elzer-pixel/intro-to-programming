// // Number Guessing Game

// const minNum = 1;
// const maxNum = 100;
// const answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;

// console.log(answer)

// let attempts = 0
// let guess;
// let running = true;

// while(running){
//     guess = window.prompt(`Guess a number between ${minNum} - ${maxNum}`)
//     guess = Number(guess);
//     attempts++;

//     if(isNaN(guess)){
//         alert("Please Enter a valid Number");
//     }
//     else if (guess > answer){
//         alert("Too High, try again");

//     } else if(guess < answer){
//         alert("Too Low, try again");
//     }
//     else{
//         alert(`Well Done! the secret number is ${answer}, you made ${attempts} attempts`)
//         running = false;
//     }
// }

// let secret = 7;
// let answer = prompt ("Please guess the secret number (1-20)");
// // # 1 Convert the string guess to an integer so that we can compare
// var guess = parseInt(answer);

// // # 2 Please add an if statement which checks if the guess is correct, if it is, then display a message: Correct Guess!, otherwise “Sorry, incorrect Guess!"
// if(guess == secret){
//     alert("Correct Guess!")
// }
// else{
//     alert("Sorry, incorrect Guess!")
// }

// // # 3 How can you combine line 2 and 3 into one line
// var guess = parseInt(prompt("Please guess the secret number (1-20)"));

// // # 4 Expand the program to do this in a while loop, only exiting when the guess was correct
// let secret = 7;
// let running = true;

// while (running){
//     guess = parseInt(prompt("Please guess the secret number (1-20)"));
//     if(guess != secret){
//         alert("Sorry, incorrect Guess!")
//     } else if(guess == secret){
//         alert("Correct Guess");
//         running = false;
//     }
// }

// // While the guess is incorrect, test also if it is too low or too high and display the message “Incorrect, too low” or “Incorrect, too high”.

// let secret = 7;
// let running = true;

// while (running){
//     guess = parseInt(prompt("Please guess the secret number (1-20)"));
//     if(guess != secret){
//        // alert("Sorry, incorrect Guess!")
//         if(guess > secret){
//             alert("Incorrect, too high")
//         } else if(guess < secret){
//             alert("Incorrect, too low")
//         }
//     } else if(guess == secret){
//         alert("Correct Guess");
//         running = false;
//     }
// }

// ----- When you are done make the secret number random (Complete Game)
let secret = Math.floor(Math.random() * 20 + 1);
let running = true;

while (running){
    guess = parseInt(prompt("Please guess the secret number (1-20)"));
    if(guess != secret){
       // alert("Sorry, incorrect Guess!")
        if(guess > secret){
            alert("Incorrect, too high")
        } else if(guess < secret){
            alert("Incorrect, too low")
        }
    } else if(guess == secret){
        alert("Correct Guess");
        running = false;
    }
}