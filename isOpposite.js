// Description: 

// Give you two strings: s1 and s2. If they are opposite, return true; otherwise, return false. Note: The result should be a boolean value, instead of a string.

// The opposite means: All letters of the two strings are the same, but the case is opposite. you can assume that the string only contains letters or it's a empty string. Also take note of the edge case - if both strings are empty then you should return false/False.

// Solution: 

function isOpposite(s1, s2) {
    if (s1.length === 0) {
        return false
    } else {
        let str = ''
        for (let i = 0; i < s1.length; i++) {
            if (s1[i] === s1[i].toLowerCase()) {
                str += s1[i].toUpperCase()
            } else {
                str += s1[i].toLowerCase()
            }
        }
        return str === s2
    }
}