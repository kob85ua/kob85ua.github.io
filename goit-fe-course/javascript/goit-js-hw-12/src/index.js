'use strict';
console.log('Hello');

import searchState from './fetchCountries.js';
import stateInfoTemplate from './hbsTemplates/stateInfo.hbs';
import stateListTemplate from './hbsTemplates/stateList.hbs';

import { alert, notice, info, success, error } from '@pnotify/core';
// import '@pnotify/core/dist/PNotify.css';
// import '@pnotify/core/dist/BrightTheme.css';
// import '@pnotify/core/dist/Material.css';
// import { defaults } from '@pnotify/core';
// defaults.width = '400px';
// defaults.styling = 'material';
// defaults.icons = 'material';
// import {notice, defaultModules} from '@pnotify/core';
// import * as PNotifyDesktop from '@pnotify/desktop';

// const myNotice = notice({
//   text: "I'm a notice.",
//   modules: new Map([
//     ...defaultModules,
//     [PNotifyDesktop, {
// 	  // Desktop Module Options
// 	  styling: 'brighttheme'
//     }]
//   ])
// });
const _ = require('lodash');
const refs = {
    searchForm: document.querySelector('#search-form'),
    searchStateInput: document.querySelector('#state-search'),
	stateList: document.querySelector('#state-list'),
};




refs.searchForm.addEventListener('input', _.debounce(searchFormHandler, 500));


function searchFormHandler(e) {
	
	console.log(refs.searchStateInput.value)
	const searchQuery = refs.searchStateInput.value;
    
	

	searchState.fetchCountries(searchQuery).then((data) => {
		console.log(data);
	    console.log(data.length);
		let markup;
		if (data.length===undefined) {
			error('No matches found. Please enter another query!');
		}
		else if (data.length > 10) {
			error('Too many matches found. Please enter a more specific query!');
            // data=[{name:'Too many matches!'}]
			// markup = buildStateListMarkup(data);
			
		} else if (data.length > 1) {
			markup = buildStateListMarkup(data);
			insertStateInfoItem(markup);
			
		} else if (data.length = 1) {
			markup = buildOneStateInfoMarkup(data);
			insertStateInfoItem(markup);
		} 
		
        // console.log(markup)
		// insertStateInfoItem(markup);
	});
}

// const searchQuery = 'itfdgdf';

// searchState.fetchCountries(searchQuery).then((data) => {
// 	console.log(data);
// 	console.log(data.length);
// 	let markup;
// 	if (data.length > 10) {
// 		data=[{name:'Too many matches!'}]
// 		markup = buildStateListMarkup(data);
// 	} else if (data.length > 1) {
// 		markup = buildStateListMarkup(data);
		
// 	} else if ((data.length = 1)) {
// 		markup = buildOneStateInfoMarkup(data);
		
// 	} else {
// 		data.message=[{name:'No matches found!'}]
// 		markup=buildOneStateInfoMarkup(data)}

// 	insertStateInfoItem(markup);
// });

function insertStateInfoItem(item) {
	refs.stateList.insertAdjacentHTML('afterbegin', item);
}

function buildOneStateInfoMarkup(item) {
	return stateInfoTemplate(item);
}

function buildStateListMarkup(item) {
	return stateListTemplate(item);
}

