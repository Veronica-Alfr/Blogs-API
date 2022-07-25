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
        await postService.update(req.params.id, post, id);
        
        const postUpdated = await postService.getById(req.params.id);

        const userIdPost = postUpdated.dataValues.user.dataValues.id;

        if (id !== userIdPost) {
            const e = new Error('Unauthorized user');
            e.name = 'UnauthorizedUser';
            throw e;
        }

        return res.status(200).json(postUpdated);
    }

    const e = new Error(post.error.message);
    e.name = 'UnauthorizedError';
    throw e;
};

module.exports = { create, findAll, findById, updated };