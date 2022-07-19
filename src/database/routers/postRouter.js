require('express-async-errors');
const { Router } = require('express');
const postController = require('../controllers/postController');
const { verifyToken } = require('../middlewares/validation/token');

const router = Router();

router.post('/', verifyToken, postController.create);

module.exports = router;