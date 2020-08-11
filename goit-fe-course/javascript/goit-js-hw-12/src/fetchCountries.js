import { data } from 'autoprefixer';

const baseUrl = 'https://restcountries.eu/rest/v2/name/';

export default {
	query: '',

	fetchCountries() {
		const requestParams = `${this.query}?fields=name;capital;population;languages;flag`;

		return fetch(baseUrl + requestParams)
			.then(response => response.json())
			.then(parsedResponse => {
				return parsedResponse;
			})
			.catch(error => {
				console.log(error);
			});
	},
	get searchQuery() {
		return this.query;
	},
	set searchQuery(string) {
		this.query = string;
	},
};
