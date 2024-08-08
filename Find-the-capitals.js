// Description:

// Write a function that takes a single non-empty string of only lowercase and uppercase ascii letters (word) as its argument, and returns an ordered list containing the indices of all capital (uppercase) letters in the string.

// Solution:

var capitals = function (word) {
	return word.split('').filter(el => el.toUpperCase() === el).map(el => word.split('').indexOf(el))
};



