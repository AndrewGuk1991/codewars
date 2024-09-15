// Description:

// Write a function that returns the total surface area and volume of a box as an array: [area, volume]

// Solution:

function getSize(width, height, depth) {
    const arr = []
    arr.push(width * depth * 2 + height * width * 2 + height * depth * 2)
    arr.push(width * depth * height)
    return arr
}