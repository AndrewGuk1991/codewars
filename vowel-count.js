// Description:
// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

// Solution:

function getCount(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u']
    let countVovels = 0
    const strArray = str.split('')
    for (let i = 0; i < vowels.length; i++) {
        for (let j = 0; j < strArray.length; j++) {
            if (strArray[j] === vowels[i]) {
                countVovels += 1
            }
        }
    }
    return countVovels
}