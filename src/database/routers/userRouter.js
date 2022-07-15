const { Router } = require('express');
// const { validateBody } = require('../middlewares/validator');

const authController = require('../controllers/userController');

const router = Router();

router.post('/', authController.create);

module.exports = router;
