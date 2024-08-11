// Description:

// Given a non-empty array of integers, return the result of multip

// Solution:

function grow(x){
    let mult = 1
    for (let i = 0; i < x.length; i++) {
        mult = mult * x[i]
    }
    return mult
}

console.log(grow([1, 2, 3]));




