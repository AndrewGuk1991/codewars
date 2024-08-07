// Description:

// Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.

// Solution:

function repeatStr (n, s) {
    let str = ''
    let i = 0
    while (i < n) {
        str += s
        i++
    }
    
    return str;
  }

  console.log(repeatStr (5, '*'));


  