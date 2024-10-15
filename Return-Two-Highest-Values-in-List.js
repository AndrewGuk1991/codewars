// Description: 

// In this kata, your job is to return the two distinct highest values in a list. If there're less than 2 unique values, return as many of them, as possible.

// The result should also be ordered from highest to lowest.

// Examples:

// [4, 10, 10, 9]  =>  [10, 9]
// [1, 1, 1]  =>  [1]
// []  =>  []

// Solution: 

function twoHighest(arr) {
    const newArr = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== arr[i + 1]) {
            newArr.push(arr[i])
        }
    }
    return newArr.length <= 1 ? arr : [(newArr.sort((a, b) => b - a))[0], (newArr.sort((a, b) => b - a))[1]]
}