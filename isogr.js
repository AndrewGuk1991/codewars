// Description:

// An isogram is a word that has no repeating letters, consecutive or non-consecutive.
// Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// Solution:

function isIsogram(str) {
  for (let i = 0; i < str.length; i++) {
    const letter = str[i];
    for (let j = i + 1; j < str.length; j++) {
      const letter1 = str[j];
      if (letter.toUpperCase() === letter1.toUpperCase()) {
        return false;
      }
    }
  }
  return true;
}
