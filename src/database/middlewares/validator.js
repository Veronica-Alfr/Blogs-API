const { schemaLogin } = require('./authSchema');
const jwtService = require('../services/jwtService');

const validateBody = (req, _res) => {  
    // const { error, value } = schemaLogin.validate(data);
  
    // if (error) throw error;

    // return value;
  const { email, password } = req.body;

  const { error, value } = schemaLogin.validate({ email, password });

  if (!error) throw error;

   return value;
};

const validateToken = (token) => {
    const tokenValidated = jwtService.validateToken(token);
    return tokenValidated;
};

module.exports = { validateBody, validateToken };
