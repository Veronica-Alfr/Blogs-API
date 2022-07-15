const { schemaLogin } = require('./authSchema');

const validateBody = (data) => {  
    const { error, value } = schemaLogin.validate(data);
  
    if (error) throw error;

    return value;
};

module.exports = { validateBody };
