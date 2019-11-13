const Joi = require('@hapi/joi');

const dataSchema = Joi.object({
	from: Joi.date().required(),
	to: Joi.date().required()
});

function dateValidation(req, res, next) {
	const { error } = dataSchema.validate(req.query);
	if (error) return res.json({ error });
	next();
}

module.exports = dateValidation;
