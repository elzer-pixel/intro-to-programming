let message = "Hello world";
console.log(message);

/* there two types of conditional statements in Javascript: if statements
and if...else statements */

let name = "Nicholas";
console.log("Hello " + name);
if (name.length > 7) {
  console.log("Wow, you have a REALLY long name");
}

name = "Nick";
console.log("Hello " + name);
if (name.length < 7) {
  console.log("Wow, your name is quite short hey");
}

//if else conditional ststement

name = "Elzer";
console.log("Hello " + name);
if (name.length > 7) {
  console.log("Wow, you have a REALLY long name");
} else {
  console.log("Your name isn't very long");
}

//chaining if...else statements
let lemonChicken = false;
let beefWithBlackBean = false;
let sweetAndSourPork = true;

if (lemonChicken) {
  console.log("Great! I'm having lemon chicken");
} else if (beefWithBlackBean) {
  console.log("I'm having the beef.");
} else if (sweetAndSourPork) {
  console.log("Ok, I'll have the pork");
} else {
  console.log("Well, I guess I'll have rice then");
}

//Leaving out the else statement, and all conditions are false.
lemonChicken = false;
beefWithBlackBean = false;
sweetAndSourPork = false;

if (lemonChicken) {
  console.log("Great! I'm having lemon chicken");
} else if (beefWithBlackBean) {
  console.log("I'm having the beef.");
} else if (sweetAndSourPork) {
  console.log("Ok, I'll have the pork");
}

// Excercise [Conditional Statements]
name = "Elzer";
let myName = "Elzer";

if (name === myName) {
  console.log("Hello me!");
} else {
  console.log("Hello Stranger");
}

name = "Simphiwe";
let dad = "Mpho";
let mom = "Lomawa";

if (name === dad) {
  console.log("Hello Dad!");
} else if (name === mom) {
  console.log("Hello Mom");
} else {
  console.log("Hello Stranger");
}
/**********************************************************/

// Loops [while Loops]
//- repeatedly execute it's body until a particular condition stops being true

//Counting sheep

let sheepCounted = 0;
while (sheepCounted < 10) {
  console.log("I have counted " + sheepCounted + " sheep!");
  sheepCounted++;
}
console.log("Zzzzzzzzz");

for (sheepCounted = 0; sheepCounted < 10; sheepCounted++) {
  console.log("I have counted " + sheepCounted + " sheep!");
}
console.log("Zzzzzzzzzzz");

let timesToSayHello = 3;
for (i = 0; i < timesToSayHello; i++) {
  console.log("Hello!");
}

//Using for Loops with Arrays and strings
let animals = ["Lion", "Flamingo", "Polar Bear", "Boa Constrictor"];
for (i = 0; i < animals.length; i++) {
  console.log("This zoo contains a " + animals[i] + ".");
}

name = "Nick";
for (i = 0; i < name.length; i++) {
  console.log("My name contains the letter " + name[i] + ".");
}

//You don't always have to start the looping variable at 0 and increment it by 1.
// Here we print all the powers of2 below the number 10 000*/

for (x = 2; x < 10000; x *= 2) {
  console.log(x);
}

/* TRY IT OUT! Example:
A for loop to print the powere of 3 under 10000 (3, 9, 27, etc) */

for (i = 3; i < 10000; i *= 3) {
  console.log(i);
}

//The same output using a while loop

let numPower = 3;
while (numPower < 10000) {
  console.log(numPower);
  numPower *= 3;
}

/******************************************************************* */

//PROGRAMMING CHALLENGES
// #1. Awesome Animals

animals = ["Cat", "Fish", "Lemur", "Komodo Dragon"];
// The loop function changes the values of the array:
for (i = 0; i < animals.length; i++) {
  animals[i] = "Awesome " + animals[i];
}
// The next code displays the new value of animals in the console:
console.log(animals);

//#2. Random String Generator
let alphabet = "abcdefghijklmnopqrstuvwxyz";
let randomString = "";


while(randomString.length < 6){
    let randomAlphabet = alphabet[Math.floor(Math.random() * alphabet.length)];
    randomString += randomAlphabet;
}
console.log(randomString);

//#3.H4CK3R SP34K

let input = "javascript is awesome";
let output = "";

for (i = 0; i < input.length; i++){
 if (input[i] === "a") {
    //the condition checks the index value and datatype of the input variable
    output += "4";    
 } else if (input[i] === "e" ){
    output += "3";
 } else if (input[i] === "i") {
    output += "1";

 } else if (input[i] === "o") {
    output += "0";

 } else {
    output += input[i];
 }

}


console.log(output);


