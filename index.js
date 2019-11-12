//.env setup
require('dotenv').config();
//basic config
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const { logger } = require('./utils/logger');
const moment = require('moment');
const momentRandom = require('moment-random');
const randomTime = require('./utils/randomTimeGenerator');
const countries = require('./utils/randomCountryGenerator')();

app.use(bodyParser.json());

//test route
app.get('/', (req, res, next) => {
	const time = moment().format('MMMM Do YYYY, h:mm:ss a');
	logger.info(`test logger at ${time}`);
	const rTime = randomTime();

	console.log(rTime);
	console.log(countries);
	res.send('hello world');
});

app.listen(process.env.PORT || 6001, () => {
	console.log(`server running on port ${process.env.PORT}...`);
});
