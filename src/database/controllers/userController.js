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

const findAll = async (req, res) => {
    const { authorization } = req.headers;

    const validateToken = jwtService.verifyToken(authorization);

    if (validateToken.error) {
        const e = new Error(validateToken.error.message);
          e.name = 'ValidationTokenError';
          throw e;
    }

    const users = await userService.getAll();

    return res.status(200).json(users);
};

module.exports = { create, findAll };
