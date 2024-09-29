// Description: 

// Given a number n, draw stairs using the letter "I", n tall and n wide, with the tallest in the top left.

// For example n = 3 result in:

// "I\n I\n  I"
// or printed:

// I
//  I
//   I
// Another example, a 7-step stairs should be drawn like this:

// I
//  I
//   I
//    I
//     I
//      I
//       I

// Solution: 

function drawStairs(n) {
    let arr = []
    for (let i = 0; i < n; i++) {
        arr.push('I\n')
        let j = i
        while (j >= 0) {
            arr.push(' ')
            j--
        }
    }
    let str = arr.join('')
    return str.substr(0, str.length - n - 1)
}