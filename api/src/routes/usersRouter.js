const { Router } = require('express');
const usersRouter = Router();

usersRouter.get('/', (req, res) => {
  res.status(200).send('Im in /users');
});

usersRouter.get('/:id', (req, res) => {
  res.status(200).send('Users details');
});

usersRouter.post('/', (req, res) => {
  res.status(200).send('Create user');
});

module.exports = usersRouter;
