'use strict';

console.log('_____task04_____');

document
	.querySelector('button[data-action="increment"]')
	.addEventListener('click', (event) => {
		let total = Number(document.querySelector('#value').innerText);

		total = total += 1;

		document.querySelector('#value').innerText = total;
	});

document
	.querySelector('button[data-action="decrement"]')
	.addEventListener('click', (event) => {
		let total = Number(document.querySelector('#value').innerText);

		total = total -= 1;

		document.querySelector('#value').innerText = total;
	});
