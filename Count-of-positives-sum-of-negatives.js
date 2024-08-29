// Description:

// Given an array of integers.

// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

// If the input is an empty array or is null, return an empty array.

// Solution: 

function countPositivesSumNegatives(input) {
    if (input === null || input.length === 0) {
        return []
    } else if (input.length > 0) {
        const emptyArr = []
        emptyArr.push((input.filter(el => el > 0)).length)
        emptyArr.push((input.filter(el => el < 0)).reduce((acc, el) => acc + el))
        return emptyArr
    }
}


