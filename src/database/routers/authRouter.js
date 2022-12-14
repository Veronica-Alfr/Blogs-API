require('express-async-errors');
const { Router } = require('express');

const authController = require('../controllers/authController');

const router = Router();

router.post('/', authController.loginUser);

module.exports = router;