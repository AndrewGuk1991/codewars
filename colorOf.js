// Description: 

// Coding in function colorOf. function accept 3 parameter:r g b. It means value of color red green and blue. the value range is 0-255.

// Use toString(16) Convert numbers r g b to hex string form. at last, combine them to a web color code and return it.

// the color code should starting with "#". and then use 2 characters per color.

// Solution: 

function colorOf(r, g, b) {
    let str = '#'
    if (r < 17) {
        str += '0' + r.toString(16)
    } else {
        str += r.toString(16)
    }
    if (g < 17) {
        str += '0' + g.toString(16)
    } else {
        str += g.toString(16)
    }
    if (b < 17) {
        str += '0' + b.toString(16)
    } else {
        str += b.toString(16)
    }
    return str
}
