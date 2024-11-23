// Description: 

// Replace all vowel to exclamation mark in the sentence. aeiouAEIOU is vowel.

// Examples
// replace("Hi!") === "H!!"
// replace("!Hi! Hi!") === "!H!! H!!"
// replace("aeiou") === "!!!!!"
// replace("ABCDE") === "!BCD!"

// Solution: 

function replace(s) {
    const v = 'aeiouAEIOU'
    let s1 = ''
    for (let i = 0; i < s.length; i++) {
        if (v.includes(s[i])) {
            s1 += '!'
        } else {
            s1 += s[i]
        }
    }
    return s1
}