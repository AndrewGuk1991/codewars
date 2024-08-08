// Description:

// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Solution:

function XO(str) {
    let countX = 0
    let countO = 0
    for(let i = 0; i < str.length; i++) {
        if (str[i].toLowerCase() === "o") {
            countO ++
        } else if (str[i].toLowerCase() === 'x') {
            countX ++
        }
    }
    if (countO === countX) {
        return true
    }
    return false
}