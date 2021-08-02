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

    // Selectinga  random card from the deck.
    if (move === "hit") hand += randInt(1, 13)

    else if (move === "stand") dealer += randInt(1, 13)

    else console.log("Unknown command.")

    console.log(`\nDelaer hand:     Your hand:\n\n${dealer}          ${hand}\n\n`)

}

// Conditions determining who won or lost.
if (hand > 21) console.log(`\nDelaer hand:     Your hand:\n\n${dealer}          ${hand}\n\nBust. You lost!`)

else if (dealer > 21) console.log(`\nDelaer hand:     Your hand:\n\n${dealer}          ${hand}\n\nDealer bust. Victory!`)

else if (hand === dealer) console.log(`\nDelaer hand:     Your hand:\n\n${dealer}          ${hand}\n\nPush. Noone won!`)

else if (hand === 21) console.log(`\nDelaer hand:     Your hand:\n\n${dealer}          ${hand}\n\nBlackjack. Victory!`)

else console.log(`\nDelaer hand:     Your hand:\n\n${dealer}          ${hand}\n\nDealer blackjack. You lost!`)