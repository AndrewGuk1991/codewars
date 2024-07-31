// Description:
// Digital root is the recursive sum of all the digits in a number.

// Given n, take the sum of the digits of n. If that value has more than one digit, 
// continue reducing in this way until a single-digit number is produced. 
// The input will be a non-negative integer.

// Solution:

function digitalRoot(n) {
    const strNum = '' + n
    let sumOfElNum = 0
    for (let i = 0; i < strNum.length; i++) {
        sumOfElNum = sumOfElNum + Number(strNum[i])
    }
    while ((sumOfElNum + '').length > 1) {
        let strSumOfElNum = sumOfElNum + ''
        sumOfElNum = 0
        for (let i = 0; i < strSumOfElNum.length; i++) {
            sumOfElNum = sumOfElNum + Number(strSumOfElNum[i])
        }
    }
    return sumOfElNum
}