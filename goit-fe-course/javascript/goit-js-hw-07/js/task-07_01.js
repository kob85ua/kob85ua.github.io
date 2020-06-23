'use strict';

console.log('_____task01_____');

const categoriesByID = document.querySelector('#categories');
const number = categoriesByID.childElementCount;

console.log(`В списке ${number} категории.`);

const itemsListInfo = Array.from(categoriesByID.children).map(
	(itemsInCategories) => {
		const itemsCategoryName = itemsInCategories.querySelector('h2').textContent;

		const numberOfItems = itemsInCategories.querySelector('ul')
			.childElementCount;

		console.table([
			`Категория: ${itemsCategoryName}`,
			`Количество элементов: ${numberOfItems}`,
		]);
	}
);
