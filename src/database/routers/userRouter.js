const { Router } = require('express');

const authController = require('../controllers/userController');

const router = Router();

router.post('/', authController.create);

module.exports = router;