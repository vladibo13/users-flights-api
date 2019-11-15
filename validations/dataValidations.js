const Joi = require('@hapi/joi');
const moment = require('moment');

const dataSchema = Joi.object({
	departure: Joi.date().required(),
	arrival: Joi.date().required(),
	from: Joi.string().required(),
	destination: Joi.string().required(),
	company: Joi.string().required()
});

function dataValidation(req, res, next) {
	console.log('hello from data validation');
	console.log(req.body);
	const { departure, arrival } = req.body;
	const { error } = dataSchema.validate(req.body);
	if (error) return res.json({ error });
	if (moment(departure).isValid() || moment(arrival).isValid()) return res.send('invalid dates');
	next();
}

module.exports = dataValidation;
