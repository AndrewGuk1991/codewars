// Description: 

// If　a = 1, b = 2, c = 3 ... z = 26

// Then l + o + v + e = 54

// and f + r + i + e + n + d + s + h + i + p = 108

// So friendship is twice as strong as love :-)

// Your task is to write a function which calculates the value of a word based off the sum of the alphabet positions of its characters.

// The input will always be made of only lowercase letters and will never be empty.

// Solution: 

function wordsToMarks(string) {
    let a = 'abcdefghijklmnopqrstuvwxyz'
    let count = 0
    for (let i = 0; i < string.length; i++) {
        count += a.indexOf(string[i]) + 1
    }
    return count
}