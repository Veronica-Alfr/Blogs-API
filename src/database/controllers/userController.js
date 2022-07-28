const userService = require('../services/userService');
const jwtService = require('../services/jwtService');
const { validateUser } = require('../middlewares/validation/schemas');

const create = async (req, res) => {
    const userCreate = validateUser(req.body);

    if (!userCreate.error) {
        const user = await userService.create(userCreate);

        const token = jwtService.createToken(user);

        return res.status(201).json({ token });
    }
        const e = new Error(userCreate.error.message);
        e.name = 'UnauthorizedError';
        throw e;
};

const findAll = async (_req, res) => {
    const users = await userService.getAll();

    return res.status(200).json(users);
};

const findById = async (req, res) => {
    const { id } = req.params;

    const user = await userService.getById(id);

    if (!user) {
        const e = new Error('User does not exist');
        e.name = 'NotFoundError';
        throw e;
    }

    return res.status(200).json(user);
};

const remove = async (req, res) => {
    const { id } = req.user.data;
    console.log(req.user);

    await userService.remove(id);

    return res.sendStatus(204);
};

module.exports = { create, findAll, findById, remove };
