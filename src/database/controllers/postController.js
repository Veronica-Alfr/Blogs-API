const postService = require('../services/postService');
const { validatePost, validateToUpdate } = require('../middlewares/validation/schemas');

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

    return res.status(200).json(posts);
};

const findById = async (req, res) => {
    const { id } = req.params;

    const post = await postService.getById(id);

    if (!post) {
        const e = new Error('Post does not exist');
        e.name = 'NotFoundError';
        throw e;
    }

    return res.status(200).json(post);
};

const updated = async (req, res) => {
    const post = validateToUpdate(req.body);

    const { id } = req.user.data;

    if (!post.error) {
        const postUpdated = await postService.update(req.params.id, post, id);
        
        return res.status(200).json(postUpdated);
    }

    const e = new Error(post.error.message);
    e.name = 'UnauthorizedError';
    throw e;
};

const remove = async (req, res) => {
    const { id } = req.user.data;

    await postService.remove(req.params.id, id);
        
    return res.sendStatus(204);
};

module.exports = { create, findAll, findById, updated, remove };