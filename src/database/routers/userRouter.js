const { Router } = require('express');
const { validateBody, validateToken } = require('../middlewares/validator');

const authController = require('../controllers/userController');

const router = Router();

router.post('/', validateBody, validateToken, authController.create);

module.exports = router;
