const service = require('./service');

async function generateRandomCountry() {
	const countries = await service.getAllCountries();
	const filtredCountries = countries.data.slice(75, 85).map((c) => c.name);
	return filtredCountries;
}

module.exports = generateRandomCountry;
