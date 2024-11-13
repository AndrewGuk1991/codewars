// Description: 

// Find the total sum of internal angles (in degrees) in an n-sided simple polygon. N will be greater than 2.

// Solution: 

function angle(n) {
    if (n === 3) {
        return 180
    } else if (n === 4) {
        return 360
    } else {
        let ang = 360
        for (let i = 5; i <= n; i++) {
            ang += 180
        }
        return ang
    }
}