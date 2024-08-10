// Description:

// Given an array of integers your solution should find the smallest integer.

// Solution:

function findSmallestInt(arr) {
    return (arr.sort((a, b) => a - b))[0];
  }

  console.log(findSmallestInt([34, -345, -1, 100]));


  