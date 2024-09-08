// Description: 

// When provided with a letter, return its position in the alphabet.

// Input :: "a"

// Ouput :: "Position of alphabet: 1"

// Solution: 

function position(letter) {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    return "Position of alphabet: " + (alphabet.toLowerCase().indexOf(letter) + 1)
}