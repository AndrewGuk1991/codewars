// Description: 

// Implement all required functions in order to create the following sentences by calling those functions:

// Adam(has(a(dog()))); // must return "Adam has a dog."
// The(name(of(the(dog(is(also(Adam()))))))); // must return "The name of the dog is also Adam."

// Solution: 

function Adam(s) { return s === undefined ? 'Adam.' : 'Adam ' + s }
function has(s) { return 'has ' + s }
function a(s) { return 'a ' + s }
function dog(s) { return s === undefined ? 'dog.' : 'dog ' + s }
function The(s) { return 'The ' + s }
function name(s) { return 'name ' + s }
function of(s) { return 'of ' + s }
function the(s) { return 'the ' + s }
function is(s) { return 'is ' + s }
function also(s) { return 'also ' + s }