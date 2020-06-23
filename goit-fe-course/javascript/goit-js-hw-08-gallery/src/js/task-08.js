'use strict';
import galleryData from '../gallery-items.js';

const addImages = galleryData.reverse().map((image) => {
	document
		.querySelector('.js-gallery')
		.insertAdjacentHTML(
			'afterbegin',
			`<li class="gallery__item"><a class="gallery__link" href="${image.original}"><img class="gallery__image" src="${image.preview}" data-source="${image.original}" alt="${image.description}"></a></li>`
		);
});

const gallery = document.querySelector('.js-gallery');

gallery.addEventListener('click', clickONImage);

function clickONImage(event) {
	event.preventDefault();

	const originalImage = document.querySelector('.lightbox__image');

	originalImage.setAttribute('src', event.target.dataset.source);

	originalImage.setAttribute('alt', event.target.alt);

	document.querySelector('.js-lightbox').classList.add('is-open');
}

document
	.querySelector('[data-action="close-lightbox"]')
	.addEventListener('click', clickONXButton);

function clickONXButton(event) {
	const originalImage = document.querySelector('.lightbox__image');

	originalImage.setAttribute('src', '');

	originalImage.setAttribute('alt', '');

	document.querySelector('.js-lightbox').classList.remove('is-open');
}
