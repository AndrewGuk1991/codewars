// Description:

// write me a function stringy that takes a size and returns a string of alternating 1s and 0s.

// the string should start with a 1.

// a string with size 6 should return :'101010'.

// with size 4 should return : '1010'.

// with size 12 should return : '101010101010'.

// The size will always be positive and will only use whole numbers.

// Solution:

function stringy(size) {
    let currentSize = size
    let str = '1'
    while (currentSize > 0) {
      if (str[str.length - 1] === '1') {
        str += '0'
      } else if (str[str.length - 1] === '0') {
        str += '1'
      }
      currentSize -= 1
    }
    return str.substring(0, str.length - 1)
}

