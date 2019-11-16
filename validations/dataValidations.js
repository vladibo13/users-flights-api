const Joi = require('@hapi/joi');
const moment = require('moment');



const flightSchema = Joi.object({
	departure: Joi.string(),
	arrival: Joi.string(),
	from: Joi.string().required(),
	destination: Joi.string().required(),
	company: Joi.string().required()
});

const flightsSchema = Joi.object({
    flights: Joi.array().items(flightSchema)
})

function dataValidation(req, res, next) {
	const { error } = flightsSchema.validate(req.body);
	if (error) return res.json({ error });
	next();
}

module.exports = dataValidation;
