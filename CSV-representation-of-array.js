// Description: 

// Create a function that returns the CSV representation of a two-dimensional numeric array.

// Solution: 

function toCsvText(array) {
    let str = array.map(el => el.join(',') + '\n').join('')
    return str.substring(0, str.length - 1)
}