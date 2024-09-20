// Desscription: 

// This is a spin off of my first kata.

// You are given a string containing a sequence of character sequences separated by commas.

// Write a function which returns a new string containing the same character sequences except the first and the last ones but this time separated by spaces.

// If the input string is empty or the removal of the first and last items would cause the resulting string to be empty, return an empty value (represented as a generic value NULL in the examples below).

// Solution: 

function array(string) {
    const array = string.split(',')
    const newArray = []
    if(array.length < 3) {
      return null;
    } else {
      for(let i = 1; i < array.length - 1; i++) {
        newArray.push(array[i])
      }
    }
    return newArray.join(' ')
}