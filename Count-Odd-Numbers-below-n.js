// Description:

// Given a number n, return the number of positive odd numbers below n, EASY!

// Solution:

function oddCount(n) {
    const arr = []
    if (n % 2 === 1) {
        n -= 2
        while (0 < n) {
            arr.push(n)
            n -= 2
        }
    } else {
        n -= 1
        while (0 < n) {
            arr.push(n)
            n -= 2
        }
    }
    return arr
}





