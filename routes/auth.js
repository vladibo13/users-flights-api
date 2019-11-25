const express = require('express');
const router = express.Router();
const userValidation = require('../validations/userValidation');
const usersData = require('../utils/user');
const loginValidation = require('../validations/loginValidation');
const sessions = require('../utils/sessions');
const jwt = require('jsonwebtoken');

router.use('/register', userValidation);

router.post('/register', (req, res, next) => {
	const { userName, password, email } = req.body;
	console.log(req.originalUrl);
	console.log(req.body);
	usersData[userName] = { userName, password, email };
	return res.json({ message: `${userName} succefully registered...`, redirect: true });
});

router.use('/login', loginValidation);

router.post('/login', (req, res, next) => {
	const { userName } = req.body;
	const user = usersData[userName];
	//generate token
	const token = jwt.sign({ user }, process.env.SECRET);
	const generateSession = `session-${Math.round(Math.random() * 999999)}`;
	sessions[generateSession] = Date.now() + 120000;
	res.json({
		session: sessions[generateSession],
		message: `welcome user ${userName} you logged in`,
		redirect: true,
		token
	});
});

module.exports = router;
