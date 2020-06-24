'use strict';

console.log('_____task05_____');
document.querySelector('#name-input').addEventListener('input', (event) => {
	let userName = document.querySelector('#name-input').value;

	if (userName === ' ' || userName === '') {
		document.querySelector('#name-output').innerText = 'незнакомец';
	} else {
		document.querySelector('#name-output').innerText = userName;
	}
});

document.querySelector('#name-input').addEventListener('blur', (event) => {
	let userName = document.querySelector('#name-input').value;

	if (userName === '' || userName === ' ') {
		document.querySelector('#name-output').innerText = 'незнакомец';
	} else {
		document.querySelector('#name-output').innerText = document.querySelector(
			'#name-input'
		).value;
	}
});
