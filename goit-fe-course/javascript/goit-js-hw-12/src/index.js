'use strict';
console.log('Hello');

import searchState from './fetchCountries.js';

import stateInfoTemplate from './hbsTemplates/stateInfo.hbs';

import stateListTemplate from './hbsTemplates/stateList.hbs';

import './styles.css';

import { alert, notice, info, success, error } from '@pnotify/core';

import '@pnotify/core/dist/PNotify.css';

import '@pnotify/core/dist/BrightTheme.css';

import { defaults } from '@pnotify/core';
// import {notice, defaultModules} from '@pnotify/core';
// import * as PNotifyDesktop from '@pnotify/desktop';
// const myNotice = notice({
// 	text: "I'm a notice.",
// 	modules: new Map([
// 	  ...defaultModules,
// 	  [PNotifyDesktop, {

// 	  }]
// 	])
//   });

// import {notice, defaultModules} from '@pnotify/core';
// import * as PNotifyConfirm from '@pnotify/confirm';
// defaultModules.set(PNotifyMobile, {});
// error.close()
defaults.delay = Infinity;
defaults.closer = true;
defaults.sticker = false;
// defaults.hide=true
// defaults.remove=false

const _ = require('lodash');

const refs = {
	pageBody: document.querySelector('#page-body'),

	searchForm: document.querySelector('#search-form'),

	searchStateInput: document.querySelector('#state-search'),

	stateList: document.querySelector('#state-list'),

	errorNotice: document.querySelector('.pnotify'),
};

// refs.stateList.addEventListener('input', errorNoticeCleaner());
refs.searchStateInput.addEventListener(
	'input',
	_.debounce(searchFormHandler, 1000)
);

// const newLocal = error.close();
function searchFormHandler(e) {
	e.preventDefault();

	searchState.searchQuery = e.target.value;
	// removeError()
	// refs.pageBody.removeChild("div")
	// defaults.hide=true
	// refs.errorNotice.innerHTML=''
	// defaults.delay= 0
	// error.close()
	// notice.getState()
	// console.log(error.refs.container)
	// document.querySelector('.pnotify').remove()
	// if (document.querySelector('.pnotify') != null) {document.querySelector('.pnotify').remove(); return tagAdder()}
	// console.log(error.refs.elem)
	// console.log(refs.errorNotice)
	console.log(refs.pageBody);
	// console.log(document.querySelector('.pnotify').innerHTML);
	// console.log(refs.errorNotice.innerHTML)
	if (refs.stateList.innerHTML !== '') {
		// errorNoticeCleaner()
		tagCleaner();
		// return tagAdder();
	} else {
		// errorNoticeCleaner()
		tagAdder();
	}
}

function insertStateInfoItem(item) {
	refs.stateList.insertAdjacentHTML('afterbegin', item);
}

function buildOneStateInfoMarkup(item) {
	return stateInfoTemplate(item);
}

function buildStateListMarkup(item) {
	return stateListTemplate(item);
}

function tagCleaner() {
	refs.stateList.innerHTML = '';
}

function errorNoticeCleaner() {
	document.querySelector('[data-pnotify]').remove();
}

function tagAdder() {
	searchState.fetchCountries().then(data => {
		let markup;
		if (data.length === undefined) {
			markup = error('No matches found. Please enter another query!');
		} else if (data.length >= 10) {
			markup = error(
				'Too many matches found. Please enter a more specific query!'
			);
		} else if (data.length > 1 && data.length < 10) {
			console.log(data);
			markup = buildStateListMarkup(data);
			insertStateInfoItem(markup);
		} else if ((data.length = 1)) {
			markup = buildOneStateInfoMarkup(data);
			insertStateInfoItem(markup);
		}
		// insertStateInfoItem(markup);
	}).catch(dataError=>{console.log(dataError)});
}
function removeError() {
	error.close();
	error.fire('pnotify:cancel', { error });
}
// console.log(refs.pageBody);
