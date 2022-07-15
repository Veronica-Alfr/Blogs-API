const { schemaLogin } = require('./authSchema');
const jwtService = require('../services/jwtService');

const validateBody = (data) => {  
    const { error, value } = schemaLogin.validate(data);
  
    if (error) throw error;

    return value;
};

const validateToken = (token) => {
    const tokenValidated = jwtService.validateToken(token);
    return tokenValidated;
};

module.exports = { validateBody, validateToken };
