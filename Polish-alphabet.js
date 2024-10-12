// Description: 

// There are 32 letters in the Polish alphabet: 9 vowels and 23 consonants.

// Your task is to change the letters with diacritics:

// ą -> a,
// ć -> c,
// ę -> e,
// ł -> l,
// ń -> n,
// ó -> o,
// ś -> s,
// ź -> z,
// ż -> z
// and print out the string without the use of the Polish letters.

// For example:

// "Jędrzej Błądziński"  -->  "Jedrzej Bladzinski"

// Solution: 

function correctPolishLetters(string) {
    let s = string.split('')
    let arr = []
    for (let i = 0; i < s.length; i++) {
        if (s[i] === 'ą') {
            arr.push('a')
        } else if (s[i] === 'ć') {
            arr.push('c')
        } else if (s[i] === 'ę') {
            arr.push('e')
        } else if (s[i] === 'ł') {
            arr.push('l')
        } else if (s[i] === 'ń') {
            arr.push('n')
        } else if (s[i] === 'ó') {
            arr.push('o')
        } else if (s[i] === 'ś') {
            arr.push('s')
        } else if (s[i] === 'ź') {
            arr.push('z')
        } else if (s[i] === 'ż') {
            arr.push('z')
        } else {
            arr.push(s[i])
        }
    }
    return arr.join('')
}