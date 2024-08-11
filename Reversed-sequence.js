// Description:

// Build a function that returns an array of integers from n to 1 where n>0.

// Solution:

const reverseSeq = n => {
    const array = []
    while (n > 0) {
        array.push(n)
        n--
    }
    return array;
};