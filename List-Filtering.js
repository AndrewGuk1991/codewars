// Description:

// In this kata you will create a function that takes a list of non-negative integers and 
// strings and returns a new list with the strings filtered out.

// Solution:

function filter_list(l) {
    let listNum = []
    for (let i = 0; i < l.length; i++) {
        if (typeof l[i] === 'number') {
            listNum.push(l[i])
        }
    }
    return listNum
}

