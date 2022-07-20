const postService = require('../services/postService');
const { validatePost } = require('../middlewares/validation/schemas');

const create = async (req, res) => {
    const postCreate = validatePost(req.body);

    const { id } = req.user.data;

    if (!postCreate.error) {
        const postNew = await postService.create(postCreate, id);

        return res.status(201).json(postNew);
    }
        const e = new Error(postCreate.error.message);
        e.name = 'UnauthorizedError';
        throw e;
};

const findAll = async (req, res) => {
    const posts = await postService.getAll();
    console.log(posts);
    return res.status(200).json(posts);
};

module.exports = { create, findAll };