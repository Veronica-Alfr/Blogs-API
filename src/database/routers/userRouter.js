require('express-async-errors');
const { Router } = require('express');
// const { validate } = require('../middlewares/validator');

const userController = require('../controllers/userController');

const router = Router();

router.post('/', userController.create);

module.exports = router;
