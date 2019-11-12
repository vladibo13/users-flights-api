const { logger } = require('../utils/logger');
const usersData = require('../utils/user');

function loginValidation(req, res, next) {
	const { userName, password } = req.query;
	//if no query params provided
	if (!userName || !password) {
		logger.error(`${req.ip} tried to access with wrong password or username`);
		return res.send('no user or password were provided');
	}
	//if no user in the users object
	if (!usersData[userName]) {
		return res.send('user not registered...');
	}
	//if password incorect
	if (usersData[userName].password !== password) {
		return res.send('wrong password');
	}
	//if everthing matches
	if (usersData[userName] && usersData[userName].password === password) {
		logger.info(`user ${userName} logged in `);
		next();
	}
}

module.exports = loginValidation;
