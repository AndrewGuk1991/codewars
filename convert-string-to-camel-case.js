// Description:

// Complete the method/function so that it converts dash/underscore delimited words into camel casing. 
// The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, 
// also often referred to as Pascal case). The next words should be always capitalized.

// Solution:

function toCamelCase(str){
  const strArray = str.split('')
            let newArrayStr = []
            for(let i = 0; i < strArray.length; i++) {
                if (strArray[i].toUpperCase() !== strArray[i].toLowerCase()) {
                    newArrayStr.push(strArray[i])
                } else {
                    newArrayStr.push(strArray[i + 1].toUpperCase())
                    i++
                }
            }
            return newArrayStr.join('')
}