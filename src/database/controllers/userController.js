const userService = require('../services/userService');
const jwtService = require('../services/jwtService');
const { validateUser } = require('../middlewares/validation/schemas');

const create = async (req, res) => {
    const { displayName, email, password, image } = validateUser(req.body);

    const user = await userService.create({ displayName, email, password, image });

    console.log(user, 'Antes do token');

    const token = jwtService.createToken(user);

    console.log(user, 'Depois do token');

    res.status(201).json({ token });

    console.log(user, 'Depois do status 201');
};

module.exports = { create };
