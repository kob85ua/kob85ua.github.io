'use strict';

console.log('_____task05_____');

// let userName = document.querySelector('#name-input').value;

document.querySelector('#name-input').addEventListener('input', (event) => {
	
	// userName = event.target.value ;

	if (event.target.value === '') {
		document.querySelector('#name-output').innerText = 'незнакомец';
	} else {
		document.querySelector('#name-output').innerText = event.target.value;
	}
});

// document.querySelector('#name-input').addEventListener('blur', (event) => {
// 	let userName = document.querySelector('#name-input').value;

// 	if (userName === '' || userName === ' ') {
// 		document.querySelector('#name-output').innerText = 'незнакомец';
// 	} else {
// 		document.querySelector('#name-output').innerText = document.querySelector(
// 			'#name-input'
// 		).value;
// 	}
// });
