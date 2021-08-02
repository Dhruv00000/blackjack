// Importing the necessary functions from modules.
"use strict"
const ps = require("prompt-sync");
const input = ps();

// defininga  function to get a random integer from a given range.
function randInt(min, max) {
    
    return Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min) + 1)) + Math.ceil(min);

}

// Setting the values of both hands to random integers.
let hand = randInt(1, 22);
let dealer = randInt(1, 22)

// A loop that keeps executing until either the player or the dealer wins or loses.
while (hand < 21 && dealer < 21) {

    console.log(`\nDelaer hand:     Your hand:\n\n${dealer}          ${hand}\n\n`)

    let move = input("Enter your move (stand/hit)\n\n>").toLowerCase()

    move === "hit" ? hand += randInt(1, 13) :
    
    move === "stand" ? dealer += randInt(1, 13) :
    
    console.log("Unknown command.") 

    console.log(`\nDelaer hand:     Your hand:\n\n${dealer}          ${hand}\n\n`)

}

// Conditions determining who won or lost.
hand > 21 ? console.log(`\nDelaer hand:     Your hand:\n\n${dealer}          ${hand}\n\nBust. You lost!`) :

dealer > 21 ? console.log(`\nDelaer hand:     Your hand:\n\n${dealer}          ${hand}\n\nDealer bust. Victory!`) :

hand === dealer ? console.log(`\nDelaer hand:     Your hand:\n\n${dealer}          ${hand}\n\nPush. Noone won!`) :

hand === 21 ? console.log(`\nDelaer hand:     Your hand:\n\n${dealer}          ${hand}\n\nBlackjack. Victory!`) :

console.log(`\nDelaer hand:     Your hand:\n\n${dealer}          ${hand}\n\nDealer blackjack. You lost!`)