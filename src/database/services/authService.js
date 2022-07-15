const model = require('../models');
const jwtService = require('./jwtService');

const login = async (email, password) => {
    const user = await model.User.findOne({
      //  attributes: { exclude: [] },
       where: { email },
    });

    if (!email || !password) {
       const e = new Error('Some required fields are missing');
       e.name = 'UnauthorizedError';
       throw e;
    }

    if (!user || user.password !== password) {
       const e = new Error('Invalid fields');
       e.name = 'UnauthorizedError';
       throw e;
    }
    
    const token = jwtService.createToken(user);
  
    return token;
};

module.exports = { login };
