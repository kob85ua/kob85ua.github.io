'use strict';

console.log('_____task02_____');

const ingredients = [
	'Картошка',
	'Грибы',
	'Чеснок',
	'Помидоры',
	'Зелень',
	'Приправы',
];
document.querySelector('#ingredients').innerText = 'Ингридиенты';

const addIngredients = ingredients.map((ingredient) => {
	return `<li>${ingredient}</li>`;
});

document
	.querySelector('#ingredients')
	.insertAdjacentHTML('beforeend', addIngredients.join(''));
