const { Router } = require('express');
const postsRouter = Router();

postsRouter.get('/', (req, res) => {
  res.status(200).send('Im in /posts');
});

postsRouter.get('/:id', (req, res) => {
  res.status(200).send('Posts details');
});

postsRouter.post('/', (req, res) => {
  res.status(200).send('Create post');
});

module.exports = postsRouter;