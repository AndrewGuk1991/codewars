// Description: 

// Write a function that merges two sorted arrays into a single one. The arrays only contain integers. Also, the final outcome must be sorted and not have any duplicate.

// Solution: 

function mergeArrays(a, b) {
    const arr = []
    for (let i = 0; i < b.length; i++) {
        a.push(b[i])
    }
    a.sort((x, y) => x - y)
    for (let i = 0; i < a.length; i++) {
        for (let j = i + 1; j < a.length + 1; j++) {
            if (a[i] !== a[j] && !arr.includes(a[i])) {
                arr.push(a[i])
            }
        }
    }
    return arr
}

