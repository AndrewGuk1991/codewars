// Description: 

// The photocopier is broken... Just as you were sneaking around the office to print off your favourite binary code!

// Instead of copying the original, it reverses it: '1' becomes '0' and vice versa.

// Given a string of binary, return the version the photocopier gives you as a string.

// Solution: 

function broken(x) {
    let s = ''
    for (let i = 0; i < x.length; i++) {
        if (x[i] === '0') {
            s += '1'
        } else if (x[i] === '1') {
            s += '0'
        }
    }
    return s
}
