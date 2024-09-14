// Description: 

// Create a function that accepts a list/array and a number n, and returns a list/array of the first n elements from the list/array.

// Solution: 

function take(arr, n) {
    const newArr = []
    if (arr.length === 0) {
        return []
    } else if (n > arr.length) {
        n = arr.length
        for (let i = 0; i < n; i++) {
            newArr.push(arr[i])
        }
    } else {
        for (let i = 0; i < n; i++)
            newArr.push(arr[i])
    }
    return newArr
}