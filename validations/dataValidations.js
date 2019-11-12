const Joi = require('@hapi/joi');

const dataSchema = Joi.object({
	departure: Joi.date().required(),
	arrival: Joi.date().required(),
	from: Joi.string().required(),
	destination: Joi.string().required(),
	company: Joi.string().required()
});

function dataValidation(req, res, next) {
	const { error } = dataSchema.validate(req.body);
	if (error) return res.json({ error });
	next();
}

module.exports = dataValidation;
