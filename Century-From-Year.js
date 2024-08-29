// Description: 

// Introduction
// The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.

// Task
// Given a year, return the century it is in.

// Solution:

function century(year) {
    return year % 100 ? (year - (year % 100))/100 + 1 : year / 100
}

