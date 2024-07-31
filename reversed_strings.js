// Description:
// Complete the solution so that it reverses the string passed into it.

// Solution:

let str1 = 'world'
        let str2 = 'word'

        function solution(str){
            const strReverse = str.split('').reverse().join('')
            return strReverse
        }