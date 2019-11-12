const axios = require('axios');
const config = {
	getAllCountriesURL: 'https://restcountries.eu/rest/v2/all'
};

const service = {
	getAllCountries: () => {
		return axios.get(config.getAllCountriesURL);
	}
};

module.exports = service;
