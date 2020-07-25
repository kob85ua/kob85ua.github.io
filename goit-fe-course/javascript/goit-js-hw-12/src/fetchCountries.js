const baseUrl = 'https://restcountries.eu/rest/v2/name/';

export default {
	fetchCountries(query) {
		const requestParams = `${query}?fields=name;capital;population;languages;flag`;

		return fetch(baseUrl + requestParams).then((response) => response.json());
	},
	
};
