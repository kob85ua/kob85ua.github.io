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

const addIngredients = ingredients.forEach((ingredient) => {
	const ingredientToAdd = document.createElement('li');
	ingredientToAdd.innerText = ingredient;
	document.querySelector('#ingredients').appendChild(ingredientToAdd);
});
