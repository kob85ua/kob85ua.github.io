'use strict';

console.log('_____task07_____');

document
	.querySelector('#font-size-control')
	.addEventListener('input', (event) => {
		const inputBar = event.target;

		const textSize = document.querySelector('#text');
		textSize.style.fontSize = inputBar.value + 'px';
	});
