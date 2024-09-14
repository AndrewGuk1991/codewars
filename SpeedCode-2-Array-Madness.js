// Description: 

// Given two integer arrays a, b, both of length >= 1, create a program that returns true if the sum of the squares of each element in a is strictly greater than the sum of the cubes of each element in b.

// Solution: 

function arrayMadness(a, b) {
    return a.map(el => el ** 2).reduce((a, b) => a + b) > b.map(el => el ** 3).reduce((a, b) => a + b)
}