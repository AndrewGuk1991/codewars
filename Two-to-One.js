// Description:

// Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

// Solution:

function longest(s1, s2) {
    let sumS1andS2 = s1 + s2
    let sortsumS1andS2 = ''

    const alphabet = 'abcdefghijklmnopqrstuvwxyz'
    for (let i = 0; i < alphabet.length; i++) {
        for (let j = 0; j < sumS1andS2.length; j++) {
            if (alphabet[i] === sumS1andS2[j]) {
                sortsumS1andS2 += sumS1andS2[j]
                break
            }
        }
    }
    return sortsumS1andS2
}



