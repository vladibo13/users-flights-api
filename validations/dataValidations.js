const Joi = require('@hapi/joi');

// const flightSchema = Joi.array().items(
// 	Joi.object({
// 		departure: Joi.date().required(),
// 		arrival: Joi.date().required(),
// 		from: Joi.string().required(),
// 		destination: Joi.string().required(),
// 		company: Joi.string().required()
// 	})
// );

// const flightsSchema = Joi.object({
// 	flights: Joi.array().items(flightSchema)
// });

const flightSchema = Joi.object({
	departure: Joi.date().required(),
	arrival: Joi.date().required(),
	from: Joi.string().required(),
	destination: Joi.string().required(),
	company: Joi.string().required()
});
const flightsSchema = Joi.object({
	flights: Joi.array().items(flightSchema)
});
function dataValidation(req, res, next) {
	const { error } = flightsSchema.validate(req.body);
	if (error) return res.json({ error });
	next();
}

module.exports = dataValidation;
