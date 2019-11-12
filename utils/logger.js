const winston = require('winston');
const moment = require('moment');
const logger = winston.createLogger({
	level: 'info',
	format: winston.format.json(),
	transports: [
		//
		// - Write to all logs with level `info` and below to `combined.log`
		// - Write all logs error (and below) to `error.log`.
		//
		new winston.transports.File({
			filename: `logs/log-${moment().format('DD-MM-YYYY')}/error.log`,
			level: 'error'
		}),
		new winston.transports.File({ filename: 'logs/log/info.log', level: 'info' })
	]
});

module.exports = { logger };
