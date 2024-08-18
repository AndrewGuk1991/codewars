// Description:

// Complete the function that takes a non-negative integer n as input, and returns a list of all the powers of 2 with the exponent ranging from 0 to n ( inclusive ).

// Solution:

function powersOfTwo(n){
    const arr = []
    let i = 0
    while(i <= n) {
      arr.push(Math.pow(2, i))
      i++
    }
    return arr
}