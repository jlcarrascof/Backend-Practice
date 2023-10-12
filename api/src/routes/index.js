const { Router } = require('express');
const usersRouter = require('./usersRouter');
const mainRouter = Router();

mainRouter.use('/users', usersRouter);

module.exports = mainRouter;

/*
app.use((req, res, next) => {
    console.log('This is my middleware');
    next();
});


*/
