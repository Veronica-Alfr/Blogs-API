const model = require('../models');
const { schemaLogin } = require('../middlewares/validation/schemas');
const jwtService = require('./jwtService');

const validateBody = ({ email, password }) => {
   const { error, value } = schemaLogin.validate({ email, password });

   if (error) throw error;

   return value;
};

const login = async (email, password) => {
    const user = await model.User.findOne({
       where: { email, password },
   });

    if (!user || user.password !== password) {
       const e = new Error('Invalid fields');
       e.name = 'UnauthorizedError';
       throw e;
   }
    
    const { password: _, ...userWithoutPass } = user.dataValues;

    const token = jwtService.createToken(userWithoutPass);

    return token;
};

module.exports = { login, validateBody };
