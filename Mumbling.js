// Description: 

// This time no story, no theory. The examples below show you how to write function accum:

// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.

// Solution: 

function accum(s) {
    let str = ''
    for (let i = 0; i < s.length; i++) {
        str += s[i].toUpperCase()
        if (i > 0) {
            for (let j = 0; j < i; j++) {
                str += s[i].toLowerCase()
            }
        }
        str += '-'
    }
    return str.slice(0, str.length - 1)
}