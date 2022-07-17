const authService = require('../services/authService');

const loginUser = async (req, res) => {
    try {
        const { email, password } = authService.validateBody(req.body);

        const token = await authService.login(email, password);

        res.status(200).json({ token });
    } catch (e) {
        return res.status(400).json({ message: e.message });
    }
};

module.exports = { loginUser };