// Description: 

// Write a function which removes from string all non-digit characters and parse the remaining to number. E.g: "hell5o wor6ld" -> 56

// Function:

// getNumberFromString(s)

// Solution: 

function getNumberFromString(s) {
    return Number(s.split(' ').join('').split('').filter(el => isFinite(el)).join(''));
}