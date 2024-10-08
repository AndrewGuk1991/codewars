// Description: 

// Character recognition software is widely used to digitise printed texts. Thus the texts can be edited, searched and stored on a computer.

// When documents (especially pretty old ones written with a typewriter), are digitised character recognition softwares often make mistakes.

// Your task is correct the errors in the digitised text. You only have to handle the following mistakes:

// S is misinterpreted as 5
// O is misinterpreted as 0
// I is misinterpreted as 1
// The test cases contain numbers only by mistake.

// Solution: 

// const string = "DUBL1N"
// const newArr = []

// for(let i = 0; i < string.length; i++) {
//     string[i] === '5' ? newArr.push('S') : string[i] === '0' ? newArr.push('O') : string[i] === '1' ? newArr.push('I') : newArr.push(string[i]);
// }

// console.log(newArr.join(''));

function correct(string) {
    
    const newArr = []
    for (let i = 0; i < string.length; i++) {
        string[i] === '5' ? newArr.push('S') : string[i] === '0' ? newArr.push('O') : string[i] === '1' ? newArr.push('I') : newArr.push(string[i]);
    }
    return newArr.join('')
}

