// Description:

// Write a method, that will get an integer array as parameter and will process every number from this array.

// Return a new array with processing every number of the input-array like this:

// If the number has an integer square root, take this, otherwise square the number.

// Notes
// The input array will always contain only positive numbers, and will never be empty or null.

// Solution:

function squareOrSquareRoot(array) {
    const arr = []
    for (let i = 0; i < array.length; i++) {
        if (Number.isInteger(Math.sqrt(array[i]))) {
            arr.push(Math.sqrt(array[i]))
        } else {
            arr.push(Math.pow(array[i], 2))
        }
    }
    return arr
}

console.log(squareOrSquareRoot(array));


