const authService = require('../services/authService');

const loginUser = async (req, res) => {
    const { email, password } = authService.validateBody(req.body);

    const token = await authService.login(email, password);

    res.status(200).json({ token });
};

module.exports = { loginUser };