//.env setup
require('dotenv').config();
//basic config
const express = require('express');
const app = express();
const authRouter = require('./routes/auth');
const moment = require('moment');
const bodyParser = require('body-parser');
const { logger } = require('./utils/logger');
const randomCountries = require('./utils/randomCountryGenerator')();

app.use(bodyParser.json());

app.use('/auth', authRouter);

//test route
app.get('/', (req, res, next) => {
	const time = moment().format('MMMM Do YYYY, h:mm:ss a');
	console.log(randomCountries);
	logger.info(`test logger at ${time}`);
	res.send('hello world');
});

app.listen(process.env.PORT || 6001, () => {
	console.log(`server running on port ${process.env.PORT}...`);
});
