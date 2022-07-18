require('dotenv/config');
const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
    const { authorization } = req.headers;

        if (!authorization) {
            return res.status(401).json({ message: 'Token not found' });
        }

        try {
            const data = jwt.verify(authorization, process.env.JWT_SECRET);
            req.user = data; // dados do usuario
            next();
        } catch (e) {
            e.message = 'Expired or invalid token';
            return res.status(401).json({ message: e.message });
        }
};

module.exports = { verifyToken };
