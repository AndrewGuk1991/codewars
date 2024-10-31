// Description: 

// Implement a function that takes two numbers m and n and returns an array of the first m multiples of the real number n. Assume that m is a positive integer.

// Ex.

// (3, 5.0) --> [5.0, 10.0, 15.0]

// Solution: 

function multiples(m, n) {
    const arr = []
    let el = 0
    for (let i = 0; i < m; i++) {
        el += n
        arr.push(el)
    }
    return arr
}