const express = require('express');
const router = express.Router();
const data = require('../utils/see');
const dataValidation = require('../validations/dataValidations');
const dateValidation = require('../validations/datesValidation');
const jwt = require('jsonwebtoken');

const moment = require('moment');
let dataToReturn = [];

// router.use('/getFlights', dateValidation);

router.use((req, res, next) => {
	const { authorization } = req.headers;
	jwt.verify(authorization, process.env.SECRET, (err, decoded) => {
		if (err) return res.json({ error: 'verification failed' });
		console.log(decoded);
		next();
	});
});

router.get('/getFlights', (req, res, next) => {
	// const { from, to } = req.query;
	// dataToReturn = data.map((f) => f.departure);
	// const filtredData = data.filter((f) => moment(f.departure).isBetween(from, to)); // true)
	res.json({ flights: data });
});

router.use('/saveFlights', dataValidation);

router.post('/saveFlights', (req, res, next) => {
	return res.send('hello from save flights');
	// req.body.map((flight) => data.push(flight));
	// return res.send(data);
});

module.exports = router;
