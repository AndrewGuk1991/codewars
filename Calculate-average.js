// Description:

// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.

// Solution:

function findAverage(array) {
    return array.length === 0 ? 0 : (array.reduce((a, b) => a + b, 0))/array.length
}

console.log(findAverage([1,1,1]));


