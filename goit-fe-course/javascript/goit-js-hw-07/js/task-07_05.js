'use strict';

console.log('_____task05_____');
document.querySelector('#name-input').addEventListener('input', (event) => {
	const userName = document.querySelector('#name-input').value;

	if (userName !== '') {
		document.querySelector('#name-output').innerText = userName;
	}
});
