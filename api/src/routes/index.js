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

app.get('/', (req, res) => {
    res.status(200).send('OK');
});

app.get('/users/:id', (req, res) => {
    res.status(200).send('Im in /users/:id');
});

app.post('/users', (req, res) => {
    res.status(200).send('Im going to create an user');
});

app.get('/posts', (req, res) => {
    res.status(200).send('Using posts');
});

app.get('/posts/:id', (req, res) => {
    res.status(200).send('Using posts/:id');
});
*/
