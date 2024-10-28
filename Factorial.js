// Description: 

// Your task is to write function factorial.

// Solution: 

function factorial(n) {
    return n ? n * factorial(n - 1) : 1
}