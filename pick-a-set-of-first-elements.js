// Description: 

// Write a function to get the first element(s) of a sequence. Passing a parameter n (default=1) will return the first n element(s) of the sequence.

// If n == 0 return an empty sequence []

// Examples
// var arr = ['a', 'b', 'c', 'd', 'e'];
// first(arr) //=> ['a'];
// first(arr, 2) //=> ['a', 'b']
// first(arr, 3) //=> ['a', 'b', 'c'];
// first(arr, 0) //=> [];

// Solution: 

function first(arr, n) {
    const newArr = []
    if (n === undefined) {
        newArr.push(arr[0])
    } else if (n === 0) {
        return []
    } else if (arr.length >= n) {
        for (let i = 0; i < n; i++) {
            newArr.push(arr[i])
        }
    } else if (arr.length <= n) {
        for (let i = 0; i < arr.length; i++) {
            newArr.push(arr[i])
        }
    }

    return newArr
}