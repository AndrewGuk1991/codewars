// Description:

// You are given an array (which will have a length of at least 3, but could be very large) containing integers. 
// The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. 
// Write a method that takes the array as an argument and returns this "outlier" N.

// Solution:

function findOutlier(integers){
   let countEvNum = 0
            let countOddNum = 0
            for(let i = 0; i < 3; i++){
                if (integers[i] % 2 === 1 || integers[i] % 2 === -1) {
                    countOddNum += 1
                } else if (integers[i] % 2 === 0 || integers[i] % 2 === -0) {
                    countEvNum += 1
                }
            }
            if (countEvNum > countOddNum) {
                for(let i = 0; i < integers.length; i++) {
                    if (integers[i] % 2 === 1 || integers[i] % 2 === -1) {
                        return integers[i]
                    }
                }
            } else {
                for(let i = 0; i < integers.length; i++) {
                    if (integers[i] % 2 === 0 || integers[i] % 2 === -0) {
                        return integers[i]
                    }
                }
            }
}