// Description:
// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

// Examples
// highAndLow("1 2 3 4 5");  // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"
// Notes
// All numbers are valid Int32, no need to validate them.
// There will always be at least one number in the input string.
// Output string must be two numbers separated by a single space, and highest number is first.

// Solution:

function highAndLow(numbers) {
  let arrayHighAndLow = [];
  let highNum = 0;
  let lowNum = 0;
  let arrayInd = [];
  let arrayNumbersStr = [];
  let arrayNumber = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === " ") {
      arrayInd.push(i);
    }
  }
  for (let i = 0; i < arrayInd.length; i++) {
    arrayNumbersStr.push(numbers.substring(arrayInd[i], arrayInd[i + 1]));
  }
  arrayNumbersStr.push(numbers.slice(0, arrayInd[0]));
  for (let i = 0; i < arrayNumbersStr.length; i++) {
    arrayNumber.push(Number(arrayNumbersStr[i]));
  }
  highNum = arrayNumber[0];
  for (let i = 1; i < arrayNumber.length; i++) {
    if (highNum < arrayNumber[i]) {
      highNum = arrayNumber[i];
    }
  }
  lowNum = arrayNumber[0];
  for (let i = 1; i < arrayNumber.length; i++) {
    if (lowNum > arrayNumber[i]) {
      lowNum = arrayNumber[i];
    }
  }
  return highNum + " " + lowNum;
}
