const userService = require('../services/userService');
const jwtService = require('../services/jwtService');
const { validateUser } = require('../middlewares/validation/schemas');

const create = async (req, res) => {
    const userCreate = validateUser(req.body);

    if (!userCreate.error) {
        const user = await userService.create(userCreate);

        console.log(user, 'Antes do token');

        const token = jwtService.createToken(user);

        console.log(user, 'Depois do token');

        return res.status(201).json({ token });
    }
        const e = new Error(userCreate.error.message);
        e.name = 'UnauthorizedError';
        throw e;
};

module.exports = { create };
