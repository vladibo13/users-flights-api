function envParamsValidator(envVariables) {
	const envAvalaible = envVariables.filter((envVar) => !process.env[envVar]);
	if (envAvalaible.length) {
		console.log(`missing param ${envAvalaible.join(',')}`);
	}
}

module.exports = envParamsValidator;
