const express = require('express');
const router = express.Router();
const data = require('../utils/see');
const dataValidation = require('../validations/dataValidations');
const dateValidation = require('../validations/datesValidation');
const moment = require('moment');
let dataToReturn = [];

router.use('/getFlights', dateValidation);

router.get('/getFlights', (req, res, next) => {
	const { from, to } = req.query;
	dataToReturn = data.map((f) => f.departure);
	const filtredData = data.filter((f) => moment(f.departure).isBetween(from, to)); // true)
	res.send([ ...filtredData, ...dataToReturn ]);
});

router.use('/saveFlights', dataValidation);

router.post('/saveFlights', (req, res, next) => {
	data.push(req.body);
	res.send(data);
});

module.exports = router;
