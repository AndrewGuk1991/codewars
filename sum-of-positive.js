// Description:

// You get an array of numbers, return the sum of all of the positives ones.

// Example [1,-4,7,12] => 1 + 7 + 12 = 20

// Note: if there is nothing to sum, the sum is default to 0.

// Solution:

function positiveSum(arr) {
    let posAr = [];
    for (let index = 0; index < arr.length; index++) {
        if (Math.sign(arr[index]) >= 0) {
            posAr.push(arr[index]);
        }
    }
    let sumPos = 0;
    for (let index = 0; index < posAr.length; index++) {
        sumPos += posAr[index];
    }
    return sumPos;
}

