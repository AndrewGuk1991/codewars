// Description: 

// Enumerable Magic - Does My List Include This?

// Solution: 

function include(arr, item) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === item) {
            return true
        }
    }
    return false
}