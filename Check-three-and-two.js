// Description: 

// Given an array with exactly 5 strings "a", "b" or "c" (chars in Java, characters in Fortran, Chars in Haskell), check if the array contains three and two of the same values.

// Examples
// ["a", "a", "a", "b", "b"] ==> true  // 3x "a" and 2x "b"
// ["a", "b", "c", "b", "c"] ==> false // 1x "a", 2x "b" and 2x "c"
// ["a", "a", "a", "a", "a"] ==> false // 5x "a"

// Solution: 

function checkThreeAndTwo(array) {
    let a = 0
    let b = 0
    let c = 0
    for (let i = 0; i < array.length; i++) {
        if (array[i] === 'a') {
            a += 1
        } else if (array[i] === 'b') {
            b += 1
        } else if (array[i] === 'c') {
            c += 1
        }
    }

    if (a > 3 || b > 3 || c > 3) {
        return false
    } else if (a > 0 && b > 0 && c > 0) {
        return false
    } else {
        return true
    }
}