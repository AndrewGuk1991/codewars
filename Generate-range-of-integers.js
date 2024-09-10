// Description:

// Implement the function generateRange which takes three arguments (start, stop, step) and returns the range of integers from start to stop (inclusive) in increments of step.

// Note
// start < stop
// step > 0

// Solution:

function generateRange(min, max, step) {
    const arr = []
    while (min <= max) {
        arr.push(min)
        min += step
    }
    return arr
}