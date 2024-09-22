// Description: 

// Jack really likes his number five: the trick here is that you have to multiply each number by 5 raised to the number of digits of each numbers, so, for example:

// Solution: 

function multiply(number) {
    if (number >= 0) {
        return Math.abs(number) * Math.pow(5, (number + '').length)
    } else {
        return number * Math.pow(5, (Math.abs(number) + '').length)
    }
}