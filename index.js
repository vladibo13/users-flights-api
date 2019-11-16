//.env setup
require('dotenv').config();
//basic config
const express = require('express');
const app = express();
const authRouter = require('./routes/auth');
const flightsRouter = require('./routes/flights');
const moment = require('moment');
const bodyParser = require('body-parser');
const cors = require('cors');
const { logger } = require('./utils/logger');

//alow cross origin requests
app.use(cors());
app.use(bodyParser.json());

app.use('/auth', authRouter);
app.use('/', flightsRouter);

//test route
app.get('/', (req, res, next) => {
	const time = moment().format('MMMM Do YYYY, h:mm:ss a');
	logger.info(`test logger at ${time}`);
	res.send('hello world');
});

app.listen(process.env.PORT || 6001, () => {
	console.log(`server running on port ${process.env.PORT}...`);
});
