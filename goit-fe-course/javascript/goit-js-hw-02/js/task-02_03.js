'use strict';
const findLongestWord = function (string) {
	const arrayOfWords = string.split(' ');
	let longestWord = arrayOfWords[0];
	for (const word of arrayOfWords) {
		if (word.length > longestWord.length) {
			longestWord = word;
		}
	}
	return longestWord;
};

console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));

console.log(findLongestWord('Google do a roll'));

console.log(findLongestWord('May the force be with you'));
