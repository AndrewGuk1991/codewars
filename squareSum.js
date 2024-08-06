// Description:

// Complete the square sum function so that it squares each number passed into it and then sums the results together.

// Solution:

function squareSum(numbers){
    let sum = 0
    let i = 0
    while (i < numbers.length) {
        sum += Math.pow(numbers[i], 2)
        i++
    }
    return sum
}

console.log(squareSum(numbers));
