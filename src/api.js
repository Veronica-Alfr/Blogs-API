const express = require('express');
const authRouter = require('./database/routers/authRouter');
const userRouter = require('./database/routers/userRouter');

const app = express();

app.use(express.json());

app.use('/login', authRouter);

app.use('/user', userRouter);

app.use((err, _req, res, _next) => {
    const { name, message } = err;
    switch (name) {
      case 'UnauthorizedError':
        res.status(400).json({ message });
        break; // caso de token: 2 erros 401, mas com messages diferentes
      case 'UserExistError':
        res.status(409).json({ message });
        break;
      case 'ValidationTokenError':
        res.status(401).json({ message });
        break;  
      default:
        res.status(500).json({ message });
        break;
    }
});

// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
