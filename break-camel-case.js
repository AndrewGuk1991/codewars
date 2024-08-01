// Description:

// Complete the solution so that the function will break up camel casing, 
// using a space between words.

// Solution:

function solution(string) {
            const strArray = string.split('')
            let newStrArray = []
            for(let i = 0; i < strArray.length; i++) {
                if(strArray[i] === strArray[i].toUpperCase()) {
                    newStrArray.push(' ', strArray[i])
                } else if (strArray[i].toLowerCase() !== strArray[i].toUpperCase()) {
                    newStrArray.push(strArray[i])
                } else {
                    return strArray.join('')
                }
            }
            return newStrArray.join('')
        }