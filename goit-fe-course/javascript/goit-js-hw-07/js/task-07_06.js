'use strict';

console.log('_____task06_____');

document
	.querySelector('#validation-input')
	.addEventListener('blur', (event) => {
		const textInput = document.querySelector('#validation-input');

		const dataLength = document.querySelector('#validation-input').dataset
			.length;

		if (textInput.value.length !== Number(dataLength)) {
			textInput.classList.remove('valid');
			textInput.classList.add('invalid');
		} else {
			textInput.classList.remove('invalid'), textInput.classList.add('valid');
		}
	});

// document
// 	.querySelector('#validation-input')
// 	.addEventListener('focus', (event) => {
// 		const textInput = document.querySelector('#validation-input');
// 		textInput.classList.remove('valid');
// 		textInput.classList.remove('invalid');
// 	});
