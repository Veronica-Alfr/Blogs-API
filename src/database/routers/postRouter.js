require('express-async-errors');
const { Router } = require('express');
const postController = require('../controllers/postController');
const { verifyToken } = require('../middlewares/validation/token');

const router = Router();

router.post('/', verifyToken, postController.create);
router.get('/', verifyToken, postController.findAll);
router.get('/:id', verifyToken, postController.findById);
router.put('/:id', verifyToken, postController.updated);
router.delete('/:id', verifyToken, postController.remove);

module.exports = router;