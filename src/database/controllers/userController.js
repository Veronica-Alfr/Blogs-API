const userService = require('../services/userService');

const create = async (req, res) => {
    const { displayName, email, password, image } = req.body;

    const user = await userService.create({ displayName, email, password, image });

    res.status(200).json(user);
};

module.exports = { create };
