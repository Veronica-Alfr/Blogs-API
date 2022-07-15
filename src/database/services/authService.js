const model = require('../models');
const { schemaLogin } = require('../middlewares/authSchema');
const jwtService = require('./jwtService');

const validateBody = (email, password) => {
   const { error, value } = schemaLogin.validate({ email, password });

   if (error) throw error;

   return value;
};

const login = async (email, password) => {
    const user = await model.User.findOne({
       where: { email, password },
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

module.exports = { login, validateBody };
