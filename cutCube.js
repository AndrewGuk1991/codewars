// Description: 

// Coding in function cutCube. function accept 2 parameter: volume and n. volume is the volume of a cube. If we cut the cube into n block. please determine whether the length of the cube is an integer. return true or false.

// Solution: 

function cutCube(volume, n) {
    if ((Math.cbrt(volume) % 1) === 0 && (Math.cbrt(n) % 1) === 0) {
        if (Math.cbrt(volume) / Math.cbrt(n) % 1 === 0) {
            return true
        } else {
            return false
        }
    } else {
        return false
    }
}