const express = require('express');
const router = express.Router();
const userValidation = require('../validations/userValidation');
const usersData = require('../utils/user');
const loginValidation = require('../validations/loginValidation');

router.use('/register', userValidation);

router.post('/register', (req, res, next) => {
	const { userName, password, email } = req.body;
	usersData[userName] = { userName, password, email };
	res.send(`${userName} succefully registered...`);
});

router.use('/login', loginValidation);

router.post('/login', (req, res, next) => {
	res.send('welcome from login, success logged in');
});

module.exports = router;
