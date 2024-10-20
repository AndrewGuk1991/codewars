// Description: 

// Functional closures can get overly attached. Set them straight!

// Why doesn't greetAbe() actually greet Abe?

// Solution: 

let name = 'Abe'

const greetAbe = () => 'Hello, ' + name + '!'

let name1 = 'Ben'

const greetBen = () => 'Hello, ' + name1 + '!'
