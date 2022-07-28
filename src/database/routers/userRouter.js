require('express-async-errors');
const { Router } = require('express');
const userController = require('../controllers/userController');
const { verifyToken } = require('../middlewares/validation/token');

const router = Router();

router.post('/', userController.create);
router.get('/', verifyToken, userController.findAll);
router.get('/:id', verifyToken, userController.findById);
router.delete('/me', verifyToken, userController.remove);

module.exports = router;
