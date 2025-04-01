let ourFirstFunction = function () {
  console.log("Hello People of the world!");
};
ourFirstFunction();

function sayHelloTo(name) {
  console.log("Hello " + name + "!");
}
fullName = {
  firstName: "Elzer",
  lastName: "Mokoena",
};

sayHelloTo("Nick");
sayHelloTo("Jada");
sayHelloTo(fullName.firstName + " " + fullName.lastName);

sayHelloTo("Lyra");

//Printing Cat Faces

function drawCats(howManyTimes) {
  for (let i = 0; i < howManyTimes; i++) {
    console.log(i + " =^.^=");
  }
}
drawCats(5);
//drawCats(100); //This function prints 100 cat faces in the console.

function printMultipleTimes(howManyTimes, whatToDraw) {
  for (i = 0; i < howManyTimes; i++) {
    console.log(i + " " + whatToDraw);
  }
}

printMultipleTimes(5, "=^.^=");
printMultipleTimes(4, "^_^");
printMultipleTimes(2, "(>_<)");

// Returning values

function double(number) {
  return number * 2;
}

console.log(double(3)); // The function returns 6

console.log(double(5) + double(6));

console.log(double(double(3)));

//Using functions to simplify code

function pickRandomWord(words) {
  return words[Math.floor(Math.random() * words.length)];
}

let randomWords = ["Planet", "Worn", "Flower", "Computer"];

console.log(pickRandomWord(randomWords));
console.log(pickRandomWord(["Charlie", "Raj", "Nicole", "Kate", "Sandy"]));

//Random Insult generator

let randomBodyParts = ["Face", "Nose", "Hair"];
let randomAdjectives = ["Smelly", "Boring", "Stupid"];
randomWords = ["Fly", "Marmot", "Stick", "Monkey", "Rat"];

//Joining all the random strings into a sentence:
let randomString =
  "Your " +
  pickRandomWord(randomBodyParts) +
  " is like a " +
  pickRandomWord(randomAdjectives) +
  " " +
  pickRandomWord(randomWords) +
  "!!!";

console.log(randomString);

// Leaving a function early with return:
let fifthLetter = function (name) {
  if (name.length < 5) {
    return;
  }
  return "The firth letter of your name is " + name[4] + ".";
};

console.log(fifthLetter("Nicholas"));
console.log(fifthLetter("Nick"));

//using return multiple times instead of if...else statements.

function medalForScore() {
  if (score < 3) {
    return "Bronze";
  }
  if (score < 7) {
    return "Silver";
  }
  return "Gold";
}

//Long version for creating functions:
let double1 = function (number) {
  return number * 2;
};

// Shorthand version:
function double2(number) {
  return number * 2;
}

//PROGRAMMING CHALLENGES

//#1: DOING ARITHMETIC WITH FUNCTIONS
function addNumbers(firstNumber, secondNumber) {
  return firstNumber + secondNumber;
}
function multiplyNumbers(num1Multiply, num2Multiply) {
  return num1Multiply * num2Multiply;
}

console.log(addNumbers(multiplyNumbers(36325, 9824), 777));

//#2: ARE THESE ARRAYS THE SAME?
function areArraysSame(arrayOne, arrayTwo) {
  if (arrayOne.length !== arrayTwo.length) {
    console.log("The length of the arrays are not the same")
    return false;
  }

  for (let i = 0; i < arrayOne.length; i++) {
    console.log(arrayOne[i]); // prints each index
    console.log(arrayTwo[i]);
    if (arrayOne[i] !== arrayTwo[i]) {
      console.log("They are not the same on index " + i + ".");
      return false;
    } else {
      console.log("They are the same on index " + i + ".");
    }
  }
  return true;
}
// Calling the functions
areArraysSame([1, 2, 3], [4, 5, 6]);

areArraysSame([1, 2, 3], [1, 2, 3]);

areArraysSame([1, 2, 3], [1, 2, 3, 4]);
