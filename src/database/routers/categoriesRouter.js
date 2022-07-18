require('express-async-errors');
const { Router } = require('express');
const categoriesController = require('../controllers/categoriesController');
const { verifyToken } = require('../middlewares/validation/token');

const router = Router();

router.post('/', verifyToken, categoriesController.create);

module.exports = router;
