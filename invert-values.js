// Descriptions:

// Given a set of numbers, return the additive inverse of each. 
// Each positive becomes negatives, and the negatives become positives.

// [1, 2, 3, 4, 5] --> [-1, -2, -3, -4, -5]
// [1, -2, 3, -4, 5] --> [-1, 2, -3, 4, -5]
// [] --> []

// You can assume that all values are integers. Do not mutate the input array.

// Tests:

// assert.deepEqual(norm(invert([1,2,3,4,5])), [-1,-2,-3,-4,-5]);
// assert.deepEqual(norm(invert([1,-2,3,-4,5])), [-1,2,-3,4,-5]);
// assert.deepEqual(norm(invert([])), []);
// assert.deepEqual(norm(invert([0])), [0]);

// Solution:

function invert(array) {
    // 1 variant
    // const invAr = []
    // for (let index = 0; index < array.length; index++) {
    //     if (array[index] === 0) {
    //         invAr.push(array[index])
    //     } else {
    //         invAr.push(array[index] * -1)
    //     }
    // }
    // return invAr

    // 2 variant

    return array.map ((el) => {return el === 0 ? 0 : -el })
 }



 