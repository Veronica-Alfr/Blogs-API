require('express-async-errors');
const { Router } = require('express');
const userController = require('../controllers/userController');

const router = Router();

router.post('/', userController.create);
router.get('/', userController.findAll);

module.exports = router;
