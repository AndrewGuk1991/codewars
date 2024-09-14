// Description: 

// Return a new array consisting of elements which are multiple of their own index in input array (length > 1).

// Solution: 

function multipleOfIndex(array) {
    const newArr = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] % i === 0) {
            newArr.push(array[i])
        } else if (array[i] === 0) {
            newArr.push(array[i])
        }
    }
    return newArr
}