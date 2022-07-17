const userService = require('../services/userService');
const jwtService = require('../services/jwtService');

const create = async (req, res) => {
    try {
        const { displayName, email, password, image } = userService.validateBodyUser(req.body);

        const user = await userService.create({ displayName, email, password, image });

        const token = jwtService.createToken(user);

        res.status(201).json({ token });
    } catch (e) {
        return res.status(400).json({ message: e.message });
    }
};

module.exports = { create };
