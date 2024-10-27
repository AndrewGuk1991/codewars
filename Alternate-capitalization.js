// Description: 

// Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

// For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

// The input will be a lowercase string with no spaces.

// Solution: 

function capitalize(s) {
    let str1 = ''
    let str2 = ''
    for (let i = 0; i < s.length; i++) {
        if (i === 0 || i % 2 === 0) {
            str1 += s[i].toUpperCase()
        } else if (i % 2 === 1) {
            str1 += s[i].toLowerCase()
        }
    }
    for (let i = 0; i < s.length; i++) {
        if (i === 0 || i % 2 === 0) {
            str2 += s[i].toLowerCase()
        } else if (i % 2 === 1) {
            str2 += s[i].toUpperCase()
        }
    }
    return [str1, str2]
};