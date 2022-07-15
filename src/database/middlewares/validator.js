// const { schemaLogin } = require('./authSchema');
const jwtService = require('../services/jwtService');

// const validateBody = (req, _res, next) => {  
//     // const { error, value } = schemaLogin.validate(data);
  
//     // if (error) throw error;

//     // return value;
//   const { email, password } = req.body;

//   if (!email || !password) throw error;

//   const { error } = schemaLogin.validate({ email, password });

//    return next();

// //    const { email, password } = req.body;

// //    const { error } = schemaLogin.validate({ email, password });
 
// //    if (!email || !password) {
// //      return res.status(400).json({ message: 'Some required fields are missing' });
// //    }
 
// //    if (!error) return next();
// };

const validateToken = (token) => {
    const tokenValidated = jwtService.validateToken(token);
    return tokenValidated;
};

module.exports = { validateToken };
