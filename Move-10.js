// Description: 

// Move every letter in the provided string forward 10 letters through the alphabet.

// If it goes past 'z', start again at 'a'.

// Input will be a string with length > 0.

// Solution: 

function moveTen(s) {
    const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r',
        's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    let str = []
    for (let i = 0; i < s.length; i++) {
        switch (s[i]) {
            case 'a': str.push('k'); break
            case 'b': str.push('l'); break
            case 'c': str.push('m'); break
            case 'd': str.push('n'); break
            case 'e': str.push('o'); break
            case 'f': str.push('p'); break
            case 'g': str.push('q'); break
            case 'h': str.push('r'); break
            case 'i': str.push('s'); break
            case 'j': str.push('t'); break
            case 'k': str.push('u'); break
            case 'l': str.push('v'); break
            case 'm': str.push('w'); break
            case 'n': str.push('x'); break
            case 'o': str.push('y'); break
            case 'p': str.push('z'); break
            case 'q': str.push('a'); break
            case 'r': str.push('b'); break
            case 's': str.push('c'); break
            case 't': str.push('d'); break
            case 'u': str.push('e'); break
            case 'v': str.push('f'); break
            case 'w': str.push('g'); break
            case 'x': str.push('h'); break
            case 'y': str.push('i'); break
            case 'z': str.push('j'); break
        }
    }
    return str.join('')
}