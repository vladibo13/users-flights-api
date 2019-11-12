const moment = require('moment');

function generateRandomTime() {
	const randomNum = getRandomInt(1, 365);
	return moment().add(randomNum, 'days').format('l');
}

function getRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

module.exports = generateRandomTime;
