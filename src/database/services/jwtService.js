require('dotenv/config');
const jwt = require('jsonwebtoken');

const createToken = (data) => {
    const token = jwt.sign({ data }, process.env.JWT_SECRET);
    return token;
};

const verifyToken = (token) => {
    const data = jwt.verify(token, process.env.JWT_SECRET);

    try {
        if (!data) {
            return { error: { message: 'Token not found' } };
        }

            return data;
    } catch (e) {
            e.message = 'Expired or invalid token';
            return { error: { message: e.message } };
    }
};

module.exports = { createToken, verifyToken };