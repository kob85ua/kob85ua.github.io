'use strict';
const checkForSpam = function (message) {
	let messageInLowerCase = message.toLowerCase();
	console.log(messageInLowerCase);
	let messageReplaced = messageInLowerCase.replace('[', '');
	messageReplaced = messageReplaced.replace(']', '');
	let array = messageReplaced.split(' ');
	let result = array.includes('spam') || array.includes('sale');
	return result;
};

console.log(checkForSpam('Latest technology news'));

console.log(checkForSpam('JavaScript weekly newsletter'));

console.log(checkForSpam('Get best sale offers now!'));

console.log(checkForSpam('[SPAM] How to earn fast money?'));
