// Description: 

// Complete the function which takes two arguments and returns all numbers which are divisible by the given divisor. First argument is an array of numbers and the second is the divisor.

// Solution: 

function divisibleBy(numbers, divisor){
    const newArr = []
    for(let i = 0; i < numbers.length; i++) {
        if (Number.isInteger(numbers[i]/divisor)) {
            newArr.push(numbers[i])
        }
    }
    return newArr
}



