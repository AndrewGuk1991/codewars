// Description:

// Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

// Note: a and b are not ordered!

// Solution:

function getSum(a, b)
{
    let sum = 0
    if (b > a) {
        while (a <= b) {
            sum += a
            a++
        }  
    } else if(b < a) {
        while (b <= a) {
            sum += b
            b++
        }  
    } else if (a === b) {
        sum = a
    }
   
   return sum
}

