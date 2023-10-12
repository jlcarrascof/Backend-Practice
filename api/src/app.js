const express = require('express');
const morgan = require('morgan');

const app = express();

app.use(morgan('dev'));

app.use((req, res, next) => {
    console.log('This is my middleware');
    next();
});

app.get('/', (req, res) => {
    res.status(200).send('OK');
});

app.get('/users', (req, res) => {
    res.status(200).send('Im in /users');
});

app.get('/users/:id', (req, res) => {
    res.status(200).send('Im in /users/:id');
});

module.exports = app;
