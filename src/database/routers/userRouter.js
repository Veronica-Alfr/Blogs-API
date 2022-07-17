const { Router } = require('express');
// const { validateBody } = require('../middlewares/validator');

const userController = require('../controllers/userController');

const router = Router();

router.post('/', userController.create);

module.exports = router;
