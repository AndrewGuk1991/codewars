// Description: 

// Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

// Solution: 

function removeEveryOther(arr) {
    const array = []
    for(let i = 0; i < arr.length; i+=2){
        array.push(arr[i])
    }
    return array
}



