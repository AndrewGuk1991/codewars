// Description: 

// When provided with a String, capitalize all vowels

// For example:

// Input : "Hello World!"

// Output : "HEllO WOrld!"

// Note: Y is not a vowel in this kata.

// Solution: 

function swap(string) {
    let v = ['A', 'E', 'I', 'O', 'U', 'a', 'e', 'i', 'o', 'u']
    return string.split('').map(el => v.includes(el) ? el.toUpperCase() : el).join('');
}