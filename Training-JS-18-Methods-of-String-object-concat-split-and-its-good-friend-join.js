// Description: 

// Implement a function which accepts 2 arguments: string and separator.

// The expected algorithm: split the string into words by spaces, split each word into separate characters and join them back with the specified separator, join all the resulting "words" back into a sentence with spaces.

// Solution: 

function splitAndMerge(string, separator) {
    const array = string.split(' ')
    let newStr = ''
    for (let i = 0; i < array.length; i++) {
        newStr += array[i].split('').join(separator) + ' '
    }
    return newStr.substring(0, newStr.length - 1)
}