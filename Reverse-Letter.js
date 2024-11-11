// Description: 

// Given a string str, reverse it and omit all non-alphabetic characters.

// Example
// For str = "krishan", the output should be "nahsirk".

// For str = "ultr53o?n", the output should be "nortlu".

// Input/Output
// [input] string str
// A string consists of lowercase latin letters, digits and symbols.

// [output] a string

// Solution: 

function reverseLetter(str) {
    let al = 'abcdefghijklmnopqrstuvwxyz'
    let arr = str.split('')
    const arr1 = []
    for (let i = 0; i < arr.length; i++) {
        if (al.includes(arr[i])) {
            arr1.push(arr[i])
        }
    }
    return arr1.reverse().join('')
}