'use strict';

console.log('_____task06_____');

document
	.querySelector('#validation-input')
	.addEventListener('input', (event) => {
		const textInput = document.querySelector('#validation-input');

		const dataLength = document.querySelector('#validation-input').dataset
			.length;

		if (textInput.value.length !== Number(dataLength)) {
			textInput.classList.add('invalid');
		} else {
			textInput.classList.toggle('invalid'), textInput.classList.add('valid');
		}
	});
