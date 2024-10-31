// Description: 

// In this Kata, you will be given a string and your task will be to return a list of ints detailing the count of uppercase letters, lowercase, numbers and special characters (everything else), as follows.

// The order is: uppercase letters, lowercase letters, numbers and special characters.

// "*'&ABCDabcde12345" --> [ 4, 5, 5, 3 ]

// Solution: 

function solve(s) {
    let upLet = 0
    let lowLet = 0
    let num = 0
    let els = 0
    const alUp = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const alLow = 'abcdefghijklmnopqrstuvwxyz'

    for (let i = 0; i < s.length; i++) {
        if (alUp.includes(s[i])) {
            upLet += 1
        } else if (alLow.includes(s[i])) {
            lowLet += 1
        } else if (isFinite(s[i])) {
            num += 1
        } else {
            els += 1
        }
    }
    return [upLet, lowLet, num, els]
}