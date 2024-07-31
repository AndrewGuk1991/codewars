// Description:
// A pangram is a sentence that contains every single letter of the alphabet at least once. 
// For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, 
// because it uses the letters A-Z at least once (case is irrelevant).

// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. 
// Ignore numbers and punctuation.

// Solution:

function isPangram(string){
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'
              const stringToLowLet = string.toLowerCase()
              let alphabetInString = ''
              for (let i = 0; i < alphabet.length; i++) {
                  const letterAlphabet = alphabet[i]
                  for (let j = 0; j < stringToLowLet.length; j++) {
                      const letterString = stringToLowLet[j]
                      if (letterAlphabet === letterString) {
                          alphabetInString = alphabetInString + letterString
                          break
                      }
                  }
              }
              return (alphabetInString === alphabet)
  }