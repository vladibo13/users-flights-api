const moment = require('moment');
const fromRandomTimes = [];
const toRandomTimes = [];
function getRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateRandomTime() {
	const randomNum = getRandomInt(1, 365);
	return moment().add(randomNum, 'days').format('l');
}

for (let i = 0; i < 10; i++) {
	randomTimes.push(generateRandomTime());
}

for (let i = 0; i < 10; i++) {
	randomTimes.push(generateRandomTime());
}

module.exports = randomTimes;
