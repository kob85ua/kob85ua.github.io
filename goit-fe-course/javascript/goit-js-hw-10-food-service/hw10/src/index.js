'use strict';
import menuData from './menu.json';
import menuCard from './templates/mealCard.hbs';
import './styles.css';

const Theme = {
	LIGHT: 'light-theme',
	DARK: 'dark-theme',
};

const menuCardMarkup = menuCard(menuData);

document
	.querySelector('.js-menu')
	.insertAdjacentHTML('afterbegin', menuCardMarkup);

function themeToggle(event) {
	document.querySelector('body').classList.toggle(Theme.DARK);

	document.querySelector('body').classList.toggle(Theme.LIGHT);

	{
		try {
			localStorage.setItem(
				'themeColor',
				JSON.stringify(document.querySelector('body').getAttribute('class'))
			);
		} catch (err) {
			console.error('Set state error: ', err);
		}
	}
}
document
	.querySelector('.js-switch-input')
	.addEventListener('change', themeToggle);

const themeCheck = function () {
	try {
		let themeColor = localStorage.getItem('themeColor');

		if (themeColor === null) {
			document.querySelector('body').classList.add(Theme.LIGHT);
			localStorage.setItem('themeColor', JSON.stringify(Theme.LIGHT));
			return;
		} else if (JSON.parse(themeColor) === Theme.DARK) {
			document.querySelector('body').classList.add(Theme.DARK);

			return (document.querySelector('.js-switch-input').checked = true);
		}
		document.querySelector('body').classList.add(Theme.LIGHT);
		return;
	} catch (err) {
		console.error('Get state error: ', err);
	}
};

themeCheck(document.querySelector('body'));

